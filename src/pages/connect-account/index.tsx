import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import _ from 'lodash'

// Components
import ConnectAccountForm from '@components/ConnectAccountForm'
import { TextStyled, ViewStyled } from '@components/styled-components'
import { TitlePageStyled } from '@components/Title/TitleStyled'
import Button from '@components/Button'

// Constants
import {
  ADDED_BILL_ENDPOINT,
  BILLS_ENDPOINT,
  EMAIL_NOT_EXIST,
  INVALID_PASSWORD,
  LINKED_BILL_ENDPOINT,
  PRIMARY_HEADER_URL,
  SERVER_ERROR,
  TITLE_CONNECT_ACCOUNT,
} from '@constants/index'

// Mocks
import { APPLICATION_CONNECT_ACCOUNT } from '@mocks/mockData'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'
import { useAuthContext } from '@hooks/useAuthContext'

// Services
import { addConnectAccount } from '@services/connectAccount'

// Types
import {
  AddedBillListProps,
  LinkedBillListProps,
} from '@self-types/components/Table.props'
import { IBills } from '@self-types/api'

// Utils
import { findItemByValue } from '@utils/index'

// Styles
import { WrapperMainContent } from '../../../styles/pages/DashBoardPageStyled'

const initAddedBill = { id: '', description: '', imgUrl: '', amount: 0 }

const ConnectAccountPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { setLoading } = useLoadingContext()
  const { userId } = useAuthContext()
  const { id, isEditLinkBill, billName } = router.query as {
    id: string
    isEditLinkBill: string
    billName: string
  }

  /**
   * Fetch data
   */
  const { data: addedBillList } = useSWR<AddedBillListProps[]>(
    ADDED_BILL_ENDPOINT(userId),
  )

  const { data: linkedBillList, mutate: mutateLinkedBillList } = useSWR<
    LinkedBillListProps[]
  >(LINKED_BILL_ENDPOINT(userId))

  const { data: bills } = useSWR<IBills[]>(BILLS_ENDPOINT(userId))

  const existedAddedBill = findItemByValue({
    data: addedBillList || [],
    value: id,
    key: 'id',
  })

  const existedLinkedBill = findItemByValue({
    data: linkedBillList || [],
    value: id,
    key: 'id',
  })

  const [errorMess, setErrorMessage] = useState({
    email: '',
    password: '',
  })
  const [loginAccount, setLoginAccount] = useState({
    email: '',
    password: '',
  })
  const [initAppBill, setInitAppBill] = useState<IBills>({
    imgUrl: '',
    description: '',
  })

  const appInfo = existedAddedBill || existedLinkedBill || initAddedBill

  useEffect(() => {
    if (id && _.isEmpty(existedAddedBill) && !isEditLinkBill) {
      router.push(PRIMARY_HEADER_URL.DASHBOARD.URL)
    }
  }, [existedAddedBill, id, isEditLinkBill, router])

  useEffect(() => {
    if (bills) {
      const appBill = findItemByValue({
        data: bills,
        key: 'description',
        value: billName,
      }) as {
        imgUrl: string
        description: string
      }

      setInitAppBill(appBill)
    }
  }, [billName, bills])

  const handleGoBack = () => {
    router.back()
  }

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage({
      email: '',
      password: '',
    })
    setLoginAccount({ ...loginAccount, [e.target.name]: e.target.value })
  }

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    const accountApp = APPLICATION_CONNECT_ACCOUNT

    if (accountApp.email !== loginAccount.email) {
      setErrorMessage((prev) => ({
        ...prev,
        email: EMAIL_NOT_EXIST,
      }))
    } else if (accountApp.password !== loginAccount.password) {
      setErrorMessage((prev) => ({
        ...prev,
        password: INVALID_PASSWORD,
      }))
    } else {
      try {
        setLoading(true)
        const credentials = { ...loginAccount, ...initAppBill }
        const data = await addConnectAccount(userId, id, credentials)

        mutateLinkedBillList(data.linkedBills, false)

        router.push({
          pathname: PRIMARY_HEADER_URL.CONFIRM_DETAIL.URL,
          query: isEditLinkBill
            ? {
                id,
                isEditLinkBill: 'true',
                billName: initAppBill.description,
              }
            : { id },
        })
      } catch {
        throw new Error(SERVER_ERROR)
      } finally {
        setLoading(false)
      }
    }
  }

  const appName = initAppBill ? initAppBill.description : appInfo.description
  const appImageUrl = initAppBill ? initAppBill.imgUrl : appInfo.imgUrl

  // Check re-render description to connect account page
  const renderDescription = useMemo(() => {
    return (
      <TextStyled
        fontSize={theme.typography.fontSize.sm}
        color={theme.colors.lightBlack}
        pBottom={theme.metrics.dimensions.lg}
        pTop={theme.metrics.dimensions.md}
        maxWidth={520}
        letterSpacing={theme.typography.letterSpacing.xxl}
        paddingMobile={18}
      >
        {`Enter your ${appName} credentials so we can pay this bill on your behalf. Don't worry, we do not store your login information.`}
      </TextStyled>
    )
  }, [
    appName,
    theme.colors.lightBlack,
    theme.metrics.dimensions.lg,
    theme.metrics.dimensions.md,
    theme.typography.fontSize.sm,
    theme.typography.letterSpacing.xxl,
  ])

  return (
    <WrapperMainContent
      width={theme.metrics.width.full}
      mTop={theme.metrics.dimensions.xmd}
    >
      <ViewStyled
        display="flex"
        justifyContent="flex-start"
        maxWidth={theme.metrics.breakPoints.xxl}
        pTop={theme.metrics.dimensions.xmd}
        mTopMobile={theme.metrics.dimensions.sm}
      >
        <Button
          variant="icon"
          height={theme.metrics.dimensions.md}
          width={theme.metrics.dimensions.md}
          imgUrl="/icons/chevron-left.svg"
          onClick={handleGoBack}
          mLeftMobile={7}
        />
      </ViewStyled>
      <ViewStyled display="flex" flexDirection="column">
        <TitlePageStyled
          as="h1"
          fontSize={theme.typography.fontSize.xlg}
          color={theme.colors.shark}
          letterSpacing={2}
          fontFamily="AdobeCleanExtraBold"
          lineHeight={theme.typography.lineHeight.lg}
        >
          {TITLE_CONNECT_ACCOUNT}
        </TitlePageStyled>
        {renderDescription}
        <ConnectAccountForm
          isShadowType
          email={loginAccount.email}
          password={loginAccount.password}
          handleChangeEmail={handleChangeValue}
          handleChangePassword={handleChangeValue}
          handleSubmit={handleSubmitForm}
          errorMessage={errorMess}
          nameApplication={appName}
          imageApplication={appImageUrl}
        />
      </ViewStyled>
    </WrapperMainContent>
  )
}

export default ConnectAccountPage
