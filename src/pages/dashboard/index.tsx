import { useTheme } from 'styled-components'
import dynamic from 'next/dynamic'
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'

// Components
import {
  BackDropPointLocker,
  BackDropTableLocker,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'
import Banner from '@components/Banner'
import FicoScore from '@components/FicoScore'
import Table from '@components/Table'
import Placeholder from '@components/Placeholder'
import TableCell from '@components/TableCell'
import Badge from '@components/Badge'
import Button from '@components/Button'
import TableControlPopup from '@components/TableControlPopup'
import Link from '@components/Link'
import GoalModal from '@components/GoalModal'
import PopupConfirm from '@components/PopupConfirm'
import AddBillModal from '@components/AddBillModal'
import PopupSuccess from '@components/PopupSuccess'
import EditLinkedBillModal from '@components/EditLinkedBillModal'

// Constants
import {
  ADDED_BILL_ENDPOINT,
  ADD_BILLS_COLUMNS,
  DELETE_CONFIRM,
  GOAL_ENDPOINT,
  LINKED_BILLS_COLUMNS,
  LINKED_BILL_ENDPOINT,
  MY_GOAL_COLUMNS,
  OPACITY_BLUR,
  PRIMARY_HEADER_URL,
  SERVER_ERROR,
  SNACKBAR_SUCCESS,
  TABLE_BUTTON,
  TABLE_TITLE,
  USER_ENDPOINT,
  SCORE_PROJECTION_ENDPOINT,
  CONNECT_BANK_ENDPOINT,
  REGEX_REMOVE_COMMA,
  CREDIT_SCORE_LOCKED,
  BILLS_ENDPOINT,
  EMAIL_NOT_EXIST,
  INVALID_PASSWORD,
} from '@constants/index'

// MockData
import {
  APPLICATION_CONNECT_ACCOUNT,
  FICO_DATE_UPDATE,
  FICO_SCORE,
} from '@mocks/mockData'

// Utils
import { pxToRem } from '@utils/theme'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

// Types
import {
  GoalListProps,
  SortBy,
  SortDataProps,
  AddedBillListProps,
  LinkedBillListProps,
  TableButtonActions,
  ITableData,
} from '@self-types/components/Table.props'
import { ConfirmPopupType } from '@self-types/components/PopupConfirm.props'
import {
  IBankAccount,
  IBills,
  IConnectAccount,
  ICreditScore,
  ILinkedBill,
  IUser,
} from '@self-types/api'
import { EditLinkedBillFormProps } from '@self-types/components/EditLinkedBillModal.props'

// Services
import { addGoals, deleteGoal } from '@services/goal'
import { deleteLinkedBill, editLinkedBill } from '@services/linkedBill'
import { addBill, deleteAddedBill } from '@services/addedBill'

// Utils
import {
  filterDataNotContainValue,
  getSuffixForDate,
  formatStringToCurrency,
  sortAlphabet,
  sortNumeric,
  getLastFourDigitsString,
  findItemByValue,
  formatPayPeriod,
} from '@utils/index'

// Styles
import {
  AnimatedLayoutMain,
  WrapperMainContent,
  WrapperTableContent,
  WrapperPointContent,
  AnimatedBanner,
  AnimatedPointContent,
  WrapperPointContentMobile,
  SubBackgroundHeader,
} from '../../../styles/pages/DashBoardPageStyled'

const LineChart = dynamic(() => import('@components/Chart'), {
  ssr: false,
})

const initAddedBillInfo = {
  description: '',
  amount: '',
}

const initEditBill = {
  id: '',
  amount: '',
  bankName: '',
  draftDate: 0,
  payPeriod: '',
}

const initEditConnectAccount = {
  email: '',
  password: '',
  imgUrl: '',
  description: '',
}

const DashboardPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { userId } = useAuthContext()
  const { fromPage, isEditLinkBill } = router.query as {
    fromPage: string
    isEditLinkBill: string
  }

  // Define ref
  const toggleRef = useRef<HTMLInputElement>(null)

  // Define initial state
  const [loading, setLoading] = useState(true)
  const [isReload, setIsReload] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [currentSelectItem, setCurrentSelectItem] = useState('')
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [innerWidth, setInnerWidth] = useState(window.screen.width)
  const [addBillInfo, setAddBillInfo] = useState(initAddedBillInfo)
  const [contentSnackbar, setContentSnackbar] = useState<string>('')
  const [editBillDescription, setEditBillDescription] = useState<string>('')
  const [initSelectedGoals, setInitSelectedGoals] = useState<string[]>([])

  const [toggleModal, setToggleModal] = useState({
    addGoal: false,
    addBill: false,
    linkBill: false,
  })
  const [openConfirmPopup, setOpenConfirmPopup] = useState<{
    type: ConfirmPopupType
    id: string
  }>()

  const [tableData, setTableData] = useState<ITableData>({
    goalList: [],
    addedBillList: [],
    linkedBillList: [],
  })

  const [isConnectAccount, setIsConnectAccount] = useState<boolean>(false)
  const [isChangeConnectAccount, setIsChangeConnectAccount] =
    useState<boolean>(false)
  const [editConnectAccount, setEditConnectAccount] = useState<IConnectAccount>(
    initEditConnectAccount,
  )
  const [errorMessEditAccount, setErrorMessageEditAccount] = useState({
    email: '',
    password: '',
  })

  /**
   * Fetch data from APIs by useSWR
   */
  const { data: userInfo } = useSWR<Omit<IUser, 'password'>>(
    userId ? USER_ENDPOINT(userId) : null,
  )

  const { data: goalList, mutate: mutateGoalList } = useSWR<GoalListProps[]>(
    userId ? GOAL_ENDPOINT(userId) : null,
  )

  const { data: addedBillList, mutate: mutateAddedBillList } = useSWR<
    AddedBillListProps[]
  >(userId ? ADDED_BILL_ENDPOINT(userId) : null)

  const { data: linkedBillList, mutate: mutateLinkedBillList } = useSWR<
    LinkedBillListProps[]
  >(userId ? LINKED_BILL_ENDPOINT(userId) : null)

  const { data: chartList } = useSWR<ICreditScore[]>(
    userId ? SCORE_PROJECTION_ENDPOINT : null,
  )

  const { data: bankAccount } = useSWR<IBankAccount>(
    userId ? CONNECT_BANK_ENDPOINT(userId) : null,
  )

  const { data: bills } = useSWR<IBills[]>(
    userId ? BILLS_ENDPOINT(userId) : null,
  )

  const isLockedFicoScore =
    ((userInfo && (userInfo?.ficoScore?.score as number)) ?? false) <
    CREDIT_SCORE_LOCKED

  const isLocked =
    isLockedFicoScore &&
    ((addedBillList && addedBillList?.length) ?? false) >= 0 &&
    ((linkedBillList && linkedBillList.length) ?? false) >= 0 &&
    !loading

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.screen.width)
    }
    // Add event  and remove event resize screen
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleToggleControlPopup = (event: MouseEvent) => {
      if (
        toggleRef &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        setCurrentSelectItem('')
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleToggleControlPopup)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleToggleControlPopup)
    }
  }, [toggleRef, currentSelectItem])

  // State for modal edit linked bill
  const [editLinkedBillForm, setEditLinkedBillForm] =
    useState<EditLinkedBillFormProps>(initEditBill)

  const [selectedEditBill, setSelectedEditBill] = useState<Pick<
    LinkedBillListProps,
    'id' | 'status'
  > | null>(null)

  /**
   * Define variables
   */
  // Define inner width for mobile devices
  const isMobile = innerWidth <= theme.metrics.breakPoints.xs

  // Information for edit link bill
  const bankAccountInfo = useMemo(() => {
    return bankAccount?.account || []
  }, [bankAccount?.account])

  // Check count bills at change animation on mobile
  const isCountLinkedBills = userInfo && (userInfo.countBill as number) <= 1

  /**
   * Check if linked bills exist
   */
  const isLinked = !!linkedBillList && linkedBillList?.length > 0

  const currentLinkBill =
    selectedEditBill?.id &&
    (findItemByValue({
      data: linkedBillList || [],
      key: 'id',
      value: selectedEditBill.id,
    }) as LinkedBillListProps)

  // List bank account after update success
  const listBankAccountUpdate = useMemo(() => {
    return bankAccountInfo.map((item) => {
      const subBankNumber = getLastFourDigitsString(item.bankNumber)

      return {
        value: item.bankName,
        name: `${item.bankName} Checking *${subBankNumber}`,
      }
    })
  }, [bankAccountInfo])

  useEffect(() => {
    if (goalList) {
      const initGoals = goalList.map((goal) => goal.value)

      setInitSelectedGoals(initGoals)
      setSelectedGoals(initGoals)
    }
  }, [goalList])

  useEffect(() => {
    if (goalList && addedBillList && linkedBillList) {
      const qualifiedLinkedBills = linkedBillList.filter(
        (bill) => bill.draftDate && bill.status,
      )

      setTableData({
        goalList,
        addedBillList,
        linkedBillList: qualifiedLinkedBills,
      })

      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [goalList, addedBillList, linkedBillList, isLocked])

  // Check isLock
  useEffect(() => {
    if (isLocked) {
      setLoading(false)
    }
  }, [isLocked])

  useEffect(() => {
    if (currentLinkBill && bankAccountInfo.length) {
      setEditLinkedBillForm((prev) => ({
        ...prev,
        id: currentLinkBill.id,
        amount: currentLinkBill.amount.toString(),
        bankName: currentLinkBill.bankName,
        payPeriod: currentLinkBill.payPeriod,
        draftDate: currentLinkBill.draftDate,
      }))
    }
  }, [selectedEditBill, currentLinkBill, bankAccountInfo])

  // Check show snackbar linked successfully when redirect from confirm detail page
  useEffect(() => {
    if (fromPage === PRIMARY_HEADER_URL.CONFIRM_DETAIL.URL || isEditLinkBill) {
      setOpenSnackbar(true)
      setContentSnackbar(
        isEditLinkBill
          ? SNACKBAR_SUCCESS.EDIT_BILL
          : SNACKBAR_SUCCESS.ADD_LINK_BILL,
      )

      window.history.replaceState(null, '', PRIMARY_HEADER_URL.DASHBOARD.URL)
    }
  }, [fromPage, isEditLinkBill])

  /**
   * Sort table
   */
  const sortGoalTable = useCallback(
    (sortData: SortDataProps) => {
      const { field, sortBy } = sortData as {
        field: keyof GoalListProps
        sortBy: SortBy
      }

      let sortedData: GoalListProps[]

      switch (field) {
        case 'goal':
          sortedData = sortAlphabet({
            data: goalList as GoalListProps[],
            field,
            sortType: sortBy,
          })

          break

        case 'pointNeeded':
          {
            const descriptionSortGoals = sortAlphabet({
              data: goalList as GoalListProps[],
              field: 'goal',
              sortType: SortBy.ASC,
            })

            sortedData = sortNumeric({
              data: descriptionSortGoals,
              field,
              sortType: sortBy,
            })
          }

          break

        default:
          sortedData = sortNumeric({
            data: goalList as GoalListProps[],
            field,
            sortType: sortBy,
          })

          break
      }

      setTableData((prev) => ({ ...prev, goalList: sortedData }))
    },
    [goalList],
  )

  const sortAddedBillTable = useCallback(
    (sortData: SortDataProps) => {
      const { field, sortBy } = sortData as {
        field: keyof AddedBillListProps
        sortBy: SortBy
      }

      let sortedData: AddedBillListProps[]

      switch (field) {
        case 'description':
          sortedData = sortAlphabet({
            data: addedBillList as AddedBillListProps[],
            field,
            sortType: sortBy,
          })

          break

        default:
          sortedData = sortNumeric({
            data: addedBillList as AddedBillListProps[],
            field,
            sortType: sortBy,
          })

          break
      }

      setTableData((prev) => ({ ...prev, addedBillList: sortedData }))
    },
    [addedBillList],
  )

  const sortLinkedBillTable = useCallback(
    (sortData: SortDataProps) => {
      const { field, sortBy } = sortData as {
        field: keyof LinkedBillListProps
        sortBy: SortBy
      }

      let sortedData: LinkedBillListProps[]

      switch (field) {
        case 'amount':
        case 'draftDate':
          sortedData = sortNumeric({
            data: linkedBillList as LinkedBillListProps[],
            field,
            sortType: sortBy,
          })

          break

        case 'status':
          {
            const descriptionSortBills = sortAlphabet({
              data: linkedBillList as LinkedBillListProps[],
              field: 'description',
              sortType: SortBy.ASC,
            })

            sortedData = sortAlphabet({
              data: descriptionSortBills,
              field,
              sortType: sortBy,
            })
          }

          break

        default:
          sortedData = sortAlphabet({
            data: linkedBillList as LinkedBillListProps[],
            field,
            sortType: sortBy,
          })

          break
      }

      setTableData((prev) => ({ ...prev, linkedBillList: sortedData }))
    },
    [linkedBillList],
  )

  /**
   * Handle delete goal when user unable goal in modal
   */
  const handleDeleteGoal = useCallback(
    async (goalId: string) => {
      const updatedData = filterDataNotContainValue({
        data: goalList as GoalListProps[],
        key: 'value',
        value: goalId,
      })

      try {
        setIsReload(true)

        await deleteGoal(goalId, userId)
        mutateGoalList(updatedData, false)

        setOpenSnackbar(true)
        setContentSnackbar(SNACKBAR_SUCCESS.DELETE_GOAL)
      } catch {
        throw new Error(SERVER_ERROR)
      } finally {
        setOpenConfirmPopup(undefined)
      }
    },
    [goalList, mutateGoalList, userId],
  )

  // Handle delete bills added
  const handleDeleteAddedBill = useCallback(
    async (addedBillId: string) => {
      const updatedData = filterDataNotContainValue({
        data: addedBillList as AddedBillListProps[],
        key: 'id',
        value: addedBillId,
      })

      try {
        await deleteAddedBill(addedBillId, userId)
        mutateAddedBillList(updatedData, false)

        setIsReload(true)
        setOpenSnackbar(true)
        setContentSnackbar(SNACKBAR_SUCCESS.DELETE_BILL)
      } catch {
        throw new Error(SERVER_ERROR)
      } finally {
        setOpenConfirmPopup(undefined)
      }
    },
    [addedBillList, mutateAddedBillList, userId],
  )

  // Handle delete bill linked
  const handleDeleteLinkedBill = useCallback(
    async (linkedBillId: string) => {
      const updatedData = filterDataNotContainValue({
        data: linkedBillList as LinkedBillListProps[],
        key: 'id',
        value: linkedBillId,
      })

      try {
        setIsReload(true)

        await deleteLinkedBill(linkedBillId, userId)
        mutateLinkedBillList(updatedData, false)

        setOpenSnackbar(true)
        setContentSnackbar(SNACKBAR_SUCCESS.DELETE_LINK_BILL)
      } catch {
        throw new Error(SERVER_ERROR)
      } finally {
        setOpenConfirmPopup(undefined)
      }
    },
    [linkedBillList, mutateLinkedBillList, userId],
  )

  // Handle delete item in list bill, goals
  const handleDeleteItem = useCallback(() => {
    const itemId = openConfirmPopup?.id as string

    switch (openConfirmPopup?.type) {
      case ConfirmPopupType.DELETE_GOAL:
        handleDeleteGoal(itemId)
        break

      case ConfirmPopupType.DELETE_BILL:
        handleDeleteAddedBill(itemId)
        break

      case ConfirmPopupType.DELETE_LINK_BILL:
        handleDeleteLinkedBill(itemId)
        break

      default:
        break
    }
    setIsReload(true)
  }, [
    handleDeleteAddedBill,
    handleDeleteGoal,
    handleDeleteLinkedBill,
    openConfirmPopup?.id,
    openConfirmPopup?.type,
  ])

  /**
   * Close confirm delete popup
   */
  const onCloseConfirmPopup = useCallback(
    () => setOpenConfirmPopup(undefined),
    [],
  )

  /**
   * Toggle table control popup
   */
  const onToggleTablePopup = (id: string) =>
    setCurrentSelectItem((prev) => (prev === id ? '' : id))

  /**
   * Handle close snackbar
   */
  const handleCloseSnackbar = useCallback(() => {
    setOpenSnackbar(false)
    setContentSnackbar('')
  }, [])

  /**
   * Toggle modal add bill and add goal and edit linked bill
   */
  const handleCloseModal = (type: TableButtonActions) => {
    setToggleModal((prev) => ({ ...prev, [type]: false }))
    document.body.style.overflow = 'unset'
  }

  /**
   * Handle open modal when click kebab
   */
  const handleOpenModal = (type: TableButtonActions) => {
    setToggleModal((prev) => ({ ...prev, [type]: true }))
    document.body.style.overflow = 'hidden'
  }

  /**
   * Handle close modal when click button close modal
   */
  const onCloseModalAddGoal = useCallback(
    () => handleCloseModal(TableButtonActions.ADD_GOAL),
    [],
  )

  /**
   * Handle open modal add goal when click button add goal
   */
  const onOpenModalAddGoal = useCallback(
    () => handleOpenModal(TableButtonActions.ADD_GOAL),
    [],
  )

  /**
   * Handle close modal when click button close modal
   */
  const onCloseModalAddBill = useCallback(
    () => handleCloseModal(TableButtonActions.ADD_BILL),
    [],
  )

  /**
   * Handle open modal add bill when click button add bill
   */
  const onOpenModalAddBill = useCallback(
    () => handleOpenModal(TableButtonActions.ADD_BILL),
    [],
  )

  /**
   * Handle close modal link bill when click button close
   */
  const onCloseModalLinkBill = useCallback(() => {
    handleCloseModal(TableButtonActions.LINK_BILL)
    setSelectedEditBill(null)
    setEditBillDescription('')
    setIsConnectAccount(false)
    setIsChangeConnectAccount(false)
    setEditConnectAccount((prev) => ({
      ...prev,
      ...initEditBill,
    }))
    setEditConnectAccount((prev) => ({
      ...prev,
      ...initEditConnectAccount,
    }))
    setErrorMessageEditAccount({
      email: '',
      password: '',
    })
  }, [])

  /**
   * Handle open modal link bill when click button link bill
   */
  const onOpenModalLinkBill = useCallback(
    () => handleOpenModal(TableButtonActions.LINK_BILL),
    [],
  )

  /**
   * Table data
   */
  const goalTableData = tableData.goalList.map(
    ({ id, value, goal, imgUrl, pointNeeded, scoreNeeded }) => {
      const scoreNeededTitle = `Need ${scoreNeeded} Score`
      const pointNeededTitle =
        pointNeeded === 0 ? 'READY' : `${pointNeeded} PTS AWAY`

      const onDeleteGoal = () => {
        setOpenConfirmPopup({ type: ConfirmPopupType.DELETE_GOAL, id: value })
        setCurrentSelectItem('')
      }

      const toggleTablePopup = () => onToggleTablePopup(id)

      return {
        goal: <TableCell title={goal} imgUrl={imgUrl} />,
        scoreNeeded: scoreNeededTitle,
        pointNeeded: (
          <ViewStyled display="flex" justifyContent="center">
            <ViewStyled flex={1}>
              <Badge title={pointNeededTitle} isReady={pointNeeded === 0} />
            </ViewStyled>

            <ViewStyled
              display="flex"
              justifyContent="center"
              position="relative"
            >
              <Button
                bgColorHover={theme.colors.ironLight}
                variant="icon"
                width={theme.metrics.dimensions.base}
                height={theme.metrics.dimensions.md}
                onClick={toggleTablePopup}
                imgUrl="/icons/kebab.svg"
                data-testid="kebab"
                size="noPadding"
              />

              {currentSelectItem === id && (
                <TableControlPopup
                  ref={toggleRef}
                  idItem={id}
                  handleDeleteTable={onDeleteGoal}
                />
              )}
            </ViewStyled>
          </ViewStyled>
        ),
      }
    },
  )

  const addedBillTableData = tableData.addedBillList.map(
    ({ id, amount, description, imgUrl }) => {
      const onDeleteAddedBill = () => {
        setOpenConfirmPopup({ type: ConfirmPopupType.DELETE_BILL, id })
        setCurrentSelectItem('')
      }

      return {
        description: <TableCell title={description} imgUrl={imgUrl} />,
        amount: `$${formatStringToCurrency(amount.toString())}`,
        buttonControl: (
          <ViewStyled
            display="flex"
            justifyContent="flex-end"
            gap={theme.metrics.dimensions.sm}
            pRight={theme.metrics.dimensions.base}
          >
            <Button
              title="Dismiss"
              variant="primary"
              onClick={onDeleteAddedBill}
              bgColorHover={theme.colors.ironLight}
            />
            <Link
              width={85}
              href={{
                pathname:
                  userInfo?.countBill && userInfo.countBill > 0
                    ? PRIMARY_HEADER_URL.CONNECT_ACCOUNT.URL
                    : PRIMARY_HEADER_URL.ADD_FIRST_BILL.URL,
                query: { id },
              }}
              text="Link"
              linkTypes="primaryLink"
              iconLeftUrl="/icons/link-45deg.svg"
              pTop={isMobile ? theme.metrics.dimensions.sm : 12}
              pBottom={isMobile ? theme.metrics.dimensions.sm : 12}
              bgColorHover={theme.colors.caribbeanGreenDark}
            />
          </ViewStyled>
        ),
      }
    },
  )

  const linkedBillTableData = tableData.linkedBillList.map(
    ({ id, amount, description, draftDate, status, imgUrl, payPeriod }) => {
      const onDeleteAddedBill = () => {
        setOpenConfirmPopup({ type: ConfirmPopupType.DELETE_LINK_BILL, id })
        setCurrentSelectItem('')
      }

      const onEditLinkBill = () => {
        setSelectedEditBill({ id, status })
        onOpenModalLinkBill()
        setCurrentSelectItem('')
      }

      const toggleTablePopup = () => onToggleTablePopup(id)

      const subDescription = formatPayPeriod(payPeriod)

      return {
        description: (
          <TableCell
            title={description}
            subTitle={subDescription}
            imgUrl={imgUrl}
          />
        ),
        amount: `$${formatStringToCurrency(amount.toString())}`,
        draftDate: getSuffixForDate(draftDate),
        status: (
          <ViewStyled display="flex" justifyContent="center">
            <ViewStyled flex={1}>
              <Badge title={status} isReady={status === 'paid'} />
            </ViewStyled>

            <ViewStyled
              display="flex"
              justifyContent="center"
              position="relative"
            >
              <Button
                bgColorHover={theme.colors.ironLight}
                variant="icon"
                width={theme.metrics.dimensions.base}
                height={theme.metrics.dimensions.md}
                onClick={toggleTablePopup}
                imgUrl="/icons/kebab.svg"
                data-testid="kebab"
                size="noPadding"
              />

              {currentSelectItem === id && (
                <TableControlPopup
                  ref={toggleRef}
                  nameTable="linkedBill"
                  idItem={id}
                  handleEditTable={onEditLinkBill}
                  handleDeleteTable={onDeleteAddedBill}
                />
              )}
            </ViewStyled>
          </ViewStyled>
        ),
      }
    },
  )

  /**
   *  Handle change event
   */
  const onChangeBillAmount = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      setAddBillInfo((prev) => ({
        ...prev,
        amount: formatStringToCurrency(e.target.value),
      })),
    [],
  )

  const onChangeBillDescription = useCallback(
    (value: string) =>
      setAddBillInfo((prev) => ({ ...prev, description: value })),
    [],
  )

  const onChangeLinkBillAmount = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEditLinkedBillForm((prev) => ({
        ...prev,
        amount: formatStringToCurrency(e.target.value),
      }))
    },
    [],
  )

  const onChangeBankNumber = useCallback((value: string) => {
    setEditLinkedBillForm((prev) => ({ ...prev, bankName: value }))
  }, [])

  const onChangePayByMonth = useCallback((value: string) => {
    setEditLinkedBillForm((prev) => ({ ...prev, payPeriod: value }))
  }, [])

  const onChangePayByDay = useCallback((date: Date) => {
    setEditLinkedBillForm((prev) => ({ ...prev, draftDate: date.getDate() }))
  }, [])

  const handleChangeEmailConnectAccount = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const email = e.target.value
    setEditConnectAccount((prev) => ({ ...prev, email }))
  }

  const handleChangePasswordConnectAccount = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const password = e.target.value
    setEditConnectAccount((prev) => ({ ...prev, password }))
  }

  /**
   * Edit bill description
   */
  const handleEditBillDescriptionRequest = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()

    if (editBillDescription) {
      setIsConnectAccount(true)

      if (bills) {
        const appBill = findItemByValue({
          data: bills,
          key: 'description',
          value: editBillDescription,
        }) as {
          imgUrl: string
          description: string
        }

        setEditConnectAccount((prev) => ({ ...prev, ...appBill }))
      }
    }
  }

  /**
   * Edit link bill
   */
  const handleSubmitEditConnectAccount = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()

    const accountApp = APPLICATION_CONNECT_ACCOUNT

    if (accountApp.email !== editConnectAccount.email) {
      setErrorMessageEditAccount((prev) => ({
        ...prev,
        email: EMAIL_NOT_EXIST,
      }))
    } else if (accountApp.password !== editConnectAccount.password) {
      setErrorMessageEditAccount((prev) => ({
        ...prev,
        password: INVALID_PASSWORD,
      }))
    } else {
      setEditConnectAccount((prev) => ({
        ...prev,
        ...editConnectAccount,
      }))

      setIsConnectAccount(false)
      setIsChangeConnectAccount(true)
      setErrorMessageEditAccount({
        email: '',
        password: '',
      })
    }
  }

  const handleEditBillRequest = async (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    if (editLinkedBillForm || editLinkedBillForm) {
      const dataUpdateLinkedBill = isChangeConnectAccount
        ? {
            ...currentLinkBill,
            ...editConnectAccount,
            ...editLinkedBillForm,
            amount: +editLinkedBillForm.amount.replace(REGEX_REMOVE_COMMA, ''),
          }
        : {
            ...currentLinkBill,
            ...editLinkedBillForm,
            amount: +editLinkedBillForm.amount.replace(REGEX_REMOVE_COMMA, ''),
          }

      try {
        const data: ILinkedBill = await editLinkedBill(
          dataUpdateLinkedBill,
          userId,
        )

        mutateLinkedBillList(data.linkedBills, false)

        setOpenSnackbar(true)
        setContentSnackbar(SNACKBAR_SUCCESS.EDIT_BILL)
      } catch {
        throw new Error(SERVER_ERROR)
      } finally {
        onCloseModalLinkBill()
      }
    }
  }

  /**
   * Add bill
   */
  const handleAddBillRequest = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()

      try {
        const data = await addBill(userId, {
          title: addBillInfo.description,
          amount: +addBillInfo.amount.replace(/,/g, ''),
        })

        mutateAddedBillList(data.addedBills, false)
        setIsReload(true)

        setOpenSnackbar(true)
        setContentSnackbar(SNACKBAR_SUCCESS.ADD_BILL)
      } catch {
        throw new Error(SERVER_ERROR)
      } finally {
        onCloseModalAddBill()

        setAddBillInfo(initAddedBillInfo)
      }
    },
    [
      userId,
      addBillInfo.description,
      addBillInfo.amount,
      mutateAddedBillList,
      onCloseModalAddBill,
    ],
  )

  /**
   * Add goal
   */
  const handleAddGoalRequest = useCallback(async () => {
    try {
      const data = await addGoals(selectedGoals, userId)

      mutateGoalList(data, false)

      setIsReload(true)
      setOpenSnackbar(true)
      setContentSnackbar(SNACKBAR_SUCCESS.ADD_GOAL)
    } catch {
      throw new Error(SERVER_ERROR)
    } finally {
      onCloseModalAddGoal()
    }
  }, [mutateGoalList, onCloseModalAddGoal, selectedGoals, userId])

  const appName = isChangeConnectAccount
    ? editConnectAccount.description
    : currentLinkBill && currentLinkBill?.description
  const appImageUrl = isChangeConnectAccount
    ? editConnectAccount.imgUrl
    : currentLinkBill && currentLinkBill?.imgUrl

  /**
   * Render memoized
   */
  const renderBanner = useMemo(
    () => <Banner isLinkBill={isLinked} />,
    [isLinked],
  )

  const renderFicoScore = useMemo(
    () => (
      <FicoScore
        isLocked={isLocked}
        currentFicoScore={userInfo?.ficoScore?.score as number}
        dateUpdated={userInfo?.ficoScore?.created as string}
        minScore={300}
        maxScore={850}
      />
    ),
    [userInfo?.ficoScore?.created, userInfo?.ficoScore?.score, isLocked],
  )

  const renderChart = useMemo(
    () => (
      <BackDropPointLocker isLocked={isLocked}>
        <LineChart
          dataChart={isLocked ? [] : chartList || []}
          isLocked={isLocked}
        />
      </BackDropPointLocker>
    ),
    [chartList, isLocked],
  )

  const renderLinkedBillTable = useMemo(() => {
    return (
      <>
        {linkedBillTableData.length > 0 && (
          <ViewStyled
            mTop={
              userInfo?.countBill && userInfo.countBill <= 1
                ? theme.metrics.dimensions.md
                : 0
            }
          >
            <Table
              tableId="linkBill"
              tableTitle={TABLE_TITLE.LINK_BILL}
              hasViewAll
              tableData={linkedBillTableData}
              columns={LINKED_BILLS_COLUMNS}
              onClickSort={sortLinkedBillTable}
              isReLoad={isReload}
              isLocked={isLocked}
            />
          </ViewStyled>
        )}
      </>
    )
  }, [
    isLocked,
    isReload,
    linkedBillTableData,
    sortLinkedBillTable,
    theme.metrics.dimensions.md,
    userInfo?.countBill,
  ])

  const renderGoalTable = useMemo(
    () => (
      <ViewStyled mTop={theme.metrics.dimensions.md}>
        <Table
          tableId="goalTable"
          tableTitle={TABLE_TITLE.MY_GOAL}
          hasViewAll
          tableData={isLocked ? [] : goalTableData}
          columns={MY_GOAL_COLUMNS}
          buttonTitle={TABLE_BUTTON.ADD_GOAL}
          handleAddItem={onOpenModalAddGoal}
          onClickSort={sortGoalTable}
          isReLoad={isReload}
          isLocked={isLocked}
        />
      </ViewStyled>
    ),
    [
      goalTableData,
      isLocked,
      isReload,
      onOpenModalAddGoal,
      sortGoalTable,
      theme.metrics.dimensions.md,
    ],
  )

  const renderAddedBillTable = useMemo(
    () => (
      <ViewStyled
        mTop={
          linkedBillList?.length || (userInfo?.countBill ?? false) <= 1
            ? theme.metrics.dimensions.md
            : 0
        }
      >
        <Table
          tableId="addBill"
          tableTitle={TABLE_TITLE.ADD_BILL}
          hasViewAll
          tableData={addedBillTableData}
          columns={ADD_BILLS_COLUMNS}
          buttonTitle={TABLE_BUTTON.ADD_BILL}
          handleAddItem={onOpenModalAddBill}
          onClickSort={sortAddedBillTable}
          isReLoad={isReload}
          isLocked={isLocked}
        />
      </ViewStyled>
    ),
    [
      addedBillTableData,
      isLocked,
      isReload,
      linkedBillList?.length,
      onOpenModalAddBill,
      sortAddedBillTable,
      theme.metrics.dimensions.md,
      userInfo?.countBill,
    ],
  )

  return (
    <>
      <SubBackgroundHeader
        width={theme.metrics.width.full}
        bgColor={theme.colors.firefly}
        height={150}
        position="fixed"
      />
      <WrapperMainContent
        display="flex"
        margin="0 auto"
        pTop={55}
        gap={theme.metrics.dimensions.lg}
        alignItems="initial"
        position="relative"
        width={theme.metrics.width.full}
      >
        <WrapperTableContent
          display="flex"
          flexDirection="column"
          alignItems="base"
        >
          {(userInfo?.countBill ?? false) <= 1 && (
            <AnimatedBanner isLocked={isLocked} delay={isLinked ? 6 : 4}>
              {renderBanner}
            </AnimatedBanner>
          )}

          {/* Chart on Mobile */}
          <WrapperPointContentMobile mTop={isCountLinkedBills ? 30 : 0}>
            {loading && (
              <>
                <FicoScore
                  isLocked
                  currentFicoScore={FICO_SCORE}
                  dateUpdated={FICO_DATE_UPDATE}
                  minScore={300}
                  maxScore={850}
                />
                <BackDropPointLocker isLocked>
                  <LineChart dataChart={[]} isLocked />
                </BackDropPointLocker>
              </>
            )}

            {!loading && (
              <AnimatedPointContent
                isLocked={isLocked}
                delay={isLinked ? 6 : 3.75}
                isLinkedBills={isCountLinkedBills}
              >
                {renderFicoScore}

                {renderChart}
              </AnimatedPointContent>
            )}
          </WrapperPointContentMobile>

          {/* Loading skeleton */}
          {loading && (
            <>
              {/* Table Linked Bills */}
              {!isLocked && (
                <ViewStyled
                  padding={pxToRem(theme.metrics.dimensions.base)}
                  bgColor={theme.colors.gallery}
                >
                  <TextStyled
                    fontSize={theme.typography.fontSize.md}
                    fontWeight={theme.typography.fontWeight.bold}
                    color={theme.colors.black}
                    opacity={OPACITY_BLUR}
                  >
                    Linked Bills
                  </TextStyled>
                  <Placeholder />
                  <Placeholder />
                </ViewStyled>
              )}

              {/* Table Adding Bills */}
              <ViewStyled
                mTop={theme.metrics.dimensions.md}
                padding={pxToRem(theme.metrics.dimensions.base)}
                bgColor={theme.colors.gallery}
              >
                <TextStyled
                  fontSize={theme.typography.fontSize.md}
                  fontWeight={theme.typography.fontWeight.bold}
                  color={theme.colors.black}
                  opacity={OPACITY_BLUR}
                >
                  Finish Adding Bills
                </TextStyled>
                <Placeholder />
                <Placeholder />
              </ViewStyled>

              {/* Loading table My Goals */}
              <ViewStyled
                mTop={theme.metrics.dimensions.md}
                padding={pxToRem(theme.metrics.dimensions.base)}
                bgColor={theme.colors.gallery}
              >
                <TextStyled
                  fontSize={theme.typography.fontSize.md}
                  fontWeight={theme.typography.fontWeight.bold}
                  color={theme.colors.black}
                  opacity={OPACITY_BLUR}
                >
                  My Goals
                </TextStyled>
                <Placeholder isLinkBill={false} />
                <Placeholder isLinkBill={false} />
              </ViewStyled>
            </>
          )}

          {!loading && (
            <BackDropTableLocker isLocked={isLocked}>
              <AnimatedLayoutMain
                isLocked={isLocked}
                delay={isLinked ? 6 : 3.75}
                isLinkedBills={(userInfo?.countBill ?? false) > 1}
              >
                {renderLinkedBillTable}

                {renderAddedBillTable}

                {renderGoalTable}
              </AnimatedLayoutMain>
            </BackDropTableLocker>
          )}
        </WrapperTableContent>

        {/* Aside */}
        <WrapperPointContent
          overflow="hidden"
          position="sticky"
          maxHeight={650}
          alignSelf="flex-start"
          top={105}
          as="aside"
        >
          {loading && (
            <>
              <FicoScore
                isLocked
                currentFicoScore={FICO_SCORE}
                dateUpdated={FICO_DATE_UPDATE}
                minScore={300}
                maxScore={850}
              />
              <BackDropPointLocker isLocked>
                <LineChart dataChart={[]} isLocked />
              </BackDropPointLocker>
            </>
          )}

          {!loading && (
            <AnimatedPointContent
              maxWidth={theme.metrics.width.full}
              isLocked={isLocked}
            >
              {renderFicoScore}

              {renderChart}
            </AnimatedPointContent>
          )}
        </WrapperPointContent>
      </WrapperMainContent>

      {/* Add goal modal */}
      <GoalModal
        isOpen={toggleModal.addGoal}
        onClose={onCloseModalAddGoal}
        setSelectedItem={setSelectedGoals}
        selectedItem={selectedGoals}
        selectedGoals={initSelectedGoals}
        onClick={handleAddGoalRequest}
      />

      {/* Add bill modal */}
      <AddBillModal
        handleChangeValue={onChangeBillAmount}
        amount={addBillInfo.amount}
        isOpen={toggleModal.addBill}
        onClose={onCloseModalAddBill}
        billerItem={addBillInfo.description}
        setBillerItem={onChangeBillDescription}
        onSubmit={handleAddBillRequest}
      />

      {/* Popup confirm */}
      <PopupConfirm
        isOpen={!!openConfirmPopup}
        onClose={onCloseConfirmPopup}
        handleDelete={handleDeleteItem}
        textConfirm={
          DELETE_CONFIRM[openConfirmPopup?.type ?? ConfirmPopupType.DELETE_GOAL]
        }
      />
      <PopupSuccess
        left={theme.metrics.dimensions.md}
        isOpen={openSnackbar}
        textContent={contentSnackbar}
        onClose={handleCloseSnackbar}
      />

      {/* Edit linked bill modal */}
      <EditLinkedBillModal
        editLinkedBillForm={editLinkedBillForm}
        handleChangeAmount={onChangeLinkBillAmount}
        handleChangeBankNumber={onChangeBankNumber}
        handleChangePayByMonth={onChangePayByMonth}
        handleSubmit={handleEditBillRequest}
        handleChangePayByDay={onChangePayByDay}
        listBankNumber={listBankAccountUpdate}
        appName={appName}
        appImage={appImageUrl}
        status={selectedEditBill?.status}
        isOpen={toggleModal.linkBill}
        onClose={onCloseModalLinkBill}
        billItem={editBillDescription}
        setBillItem={setEditBillDescription}
        onSubmitBill={handleEditBillDescriptionRequest}
        handleChangeEmail={handleChangeEmailConnectAccount}
        handleChangePassword={handleChangePasswordConnectAccount}
        handleSubmitConnectAccount={handleSubmitEditConnectAccount}
        isConnectAccount={isConnectAccount}
        setIsConnectAccount={setIsConnectAccount}
        loginConnectAccount={editConnectAccount}
        newAppImage={editConnectAccount.imgUrl}
        newAppName={editConnectAccount.description}
        errorMessageConnectAccount={errorMessEditAccount}
      />
    </>
  )
}

export default DashboardPage
