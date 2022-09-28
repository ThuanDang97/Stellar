import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import useSWR from 'swr'

// Components
import { ViewStyled } from '@components/styled-components'
import ConfirmDetailForm from '@components/ConfirmDetailForm'
import { TitlePageStyled } from '@components/Title/TitleStyled'
import Button from '@components/Button'

// Utils
import { findItemByValue, getLastFourDigitsString } from '@utils/index'

// Constants
import {
  CONNECT_BANK_ENDPOINT,
  LINKED_BILL_ENDPOINT,
  LIST_PAYMENTS_BY_MONTH,
  PRIMARY_HEADER_URL,
  REGEX_REMOVE_COMMA,
  SERVER_ERROR,
  TITLE_CONFIRM_DETAIL,
  USER_ENDPOINT,
} from '@constants/index'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Types
import { LinkedBillListProps } from '@self-types/components/Table.props'
import { IBankAccount, IUser } from '@self-types/api'

// Services
import { handleAddConfirmDetailRequest } from '@services/confirmDetail'

// Styles
import { WrapperMainContent } from '../../../styles/pages/DashBoardPageStyled'

const ConfirmDetailPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { userId } = useAuthContext()
  const { setLoading } = useLoadingContext()
  const { id, isEditLinkBill, billName } = router.query as {
    id: string
    isEditLinkBill: string
    billName: string
  }

  /**
   * Define initial state
   */
  const [confirmDetailData, setConfirmDetailData] = useState({
    imgUrl: '',
    description: '',
    amount: '',
    bankName: '',
    draftDate: new Date().getDate(),
    payPeriod: LIST_PAYMENTS_BY_MONTH[1].value,
  })

  /**
   * Fetch data from APIs by useSWR
   */
  const { data: linkedBillList, mutate: mutateLinkedBillList } = useSWR<
    LinkedBillListProps[]
  >(userId ? LINKED_BILL_ENDPOINT(userId) : null)

  const { data: bankAccount } = useSWR<IBankAccount>(
    userId ? CONNECT_BANK_ENDPOINT(userId) : null,
  )

  const { data: userInfo, mutate: mutateUserInfo } = useSWR<
    Omit<IUser, 'password'>
  >(userId ? USER_ENDPOINT(userId) : null)

  /**
   * Define variables
   */
  const currentLinkBill = findItemByValue({
    data: linkedBillList || [],
    key: 'id',
    value: id,
  })

  const bankAccountInfo = useMemo(() => {
    return bankAccount?.account || []
  }, [bankAccount?.account])

  useEffect(() => {
    if (currentLinkBill && bankAccountInfo.length) {
      setLoading(false)

      const bankName =
        currentLinkBill.bankName ||
        (bankAccountInfo && bankAccountInfo[0]?.bankName)

      const draftDate = currentLinkBill.draftDate || new Date().getDate()

      const payPeriod =
        currentLinkBill.payPeriod || LIST_PAYMENTS_BY_MONTH[1].value

      setConfirmDetailData((prev) => ({
        ...prev,
        amount: currentLinkBill.amount.toString(),
        bankName,
        draftDate,
        payPeriod,
        imgUrl: currentLinkBill.imgUrl,
        description: currentLinkBill.description,
      }))
    } else {
      setLoading(true)
    }
  }, [bankAccountInfo, currentLinkBill, setLoading])

  /**
   * Handle go back route when click arrow button
   */
  const handleGoBack = () => {
    router.back()
  }

  const handleChangeAmount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setConfirmDetailData((prev) => {
      return { ...prev, amount: e.target.value }
    })
  }, [])

  const handleChangeBankNumber = useCallback((value: string) => {
    setConfirmDetailData((prev) => {
      return { ...prev, bankName: value }
    })
  }, [])

  const handleChangePayByMonth = useCallback((value: string) => {
    setConfirmDetailData((prev) => {
      return { ...prev, payPeriod: value }
    })
  }, [])

  const handleChangePayByDay = useCallback((date: Date) => {
    setConfirmDetailData((prev) => {
      return { ...prev, draftDate: date.getDate() }
    })
  }, [])

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    try {
      setLoading(true)
      const countBillUser = userInfo?.countBill ? userInfo.countBill + 1 : 1

      const payload = {
        id,
        ...confirmDetailData,
        amount: +confirmDetailData.amount.replace(REGEX_REMOVE_COMMA, ''),
        countBill: countBillUser,
      }
      const data = await handleAddConfirmDetailRequest(userId, payload)

      mutateLinkedBillList(data.linkedBills, false)

      mutateUserInfo(
        userInfo && {
          ...userInfo,
          countBill: countBillUser,
        },
        false,
      )

      router.replace({
        pathname: PRIMARY_HEADER_URL.DASHBOARD.URL,
        query: isEditLinkBill
          ? {
              fromPage: PRIMARY_HEADER_URL.CONFIRM_DETAIL.URL,
              isEditLinkBill: 'true',
            }
          : { fromPage: PRIMARY_HEADER_URL.CONFIRM_DETAIL.URL },
      })
    } catch (error) {
      throw new Error(SERVER_ERROR)
    } finally {
      setLoading(false)
    }
  }

  const listBankAccountUpdate = useMemo(() => {
    return bankAccountInfo.map((item) => {
      const subBankNumber = getLastFourDigitsString(item.bankNumber)

      return {
        value: item.bankName,
        name: `${item.bankName} Checking *${subBankNumber}`,
      }
    })
  }, [bankAccountInfo])

  const appName = billName
    ? confirmDetailData.description
    : currentLinkBill?.description ?? ''
  const appImageUrl = billName
    ? confirmDetailData.imgUrl
    : currentLinkBill?.imgUrl

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
          fontSize={theme.typography.fontSize.xlg}
          color={theme.colors.shark}
          letterSpacing={2}
          fontFamily="AdobeCleanExtraBold"
          lineHeight={theme.typography.lineHeight.lg}
          pBottom={theme.metrics.dimensions.md}
          as="h1"
        >
          {TITLE_CONFIRM_DETAIL}
        </TitlePageStyled>
        <ConfirmDetailForm
          confirmDetailForm={confirmDetailData}
          handleChangeAmount={handleChangeAmount}
          handleChangeBankNumber={handleChangeBankNumber}
          handleChangePayByMonth={handleChangePayByMonth}
          handleSubmit={handleSubmitForm}
          handleChangePayByDay={handleChangePayByDay}
          listBankNumber={listBankAccountUpdate}
          appName={appName}
          appImage={appImageUrl}
        />
      </ViewStyled>
    </WrapperMainContent>
  )
}

export default ConfirmDetailPage
