import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import {
  PlaidLinkOnSuccess,
  PlaidLinkOnSuccessMetadata,
  usePlaidLink,
} from 'react-plaid-link'
import useSWR from 'swr'
import { AxiosResponse } from 'axios'

// Props type
import { BankNumberType } from '@self-types/components/AddBankAccount.props'

// Components
import {
  BreakPointTextStyledPageConnectBank,
  WrapperContent,
} from '@components/styled-components'
import Stepper from '@components/Stepper'
import Title from '@components/Title'
import AddBankAccount from '@components/AddBankAccount'
import ErrorMessage from '@components/ErrorMessage'

// Constants
import {
  SECONDARY_URL,
  CONNECT_BANK_DESCRIPTION,
  CONNECT_BANK_DESCRIPTION_SUCCESS,
  SUCCESS,
  TITLE_CONNECT_BANK,
  CONNECT_BANK_ENDPOINT,
  CLIENT_ERROR_RESPONSE,
} from '@constants/index'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Services
import {
  addBankAccount,
  createLinkToken,
  getBankNumber,
} from '@services/connectBank'

// API types
import { IBankAccount } from '@self-types/api'

const AddBankAccountPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { userId } = useAuthContext()
  const { setLoading } = useLoadingContext()
  const { data: linkToken } = useSWR(userId, createLinkToken)
  const { data: bankAccount } = useSWR<IBankAccount>(
    userId ? CONNECT_BANK_ENDPOINT(userId) : null,
  )

  const [bankNumbers, setBankNumbers] = useState<BankNumberType[]>([])
  const [error, setError] = useState('')

  const { query } = router

  const isHasBank = bankNumbers.length > 0

  // Get bankNumber
  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (publicToken: string, metadata: PlaidLinkOnSuccessMetadata) => {
      const id = metadata.institution?.institution_id as string
      const bankName = metadata.institution?.name as string

      try {
        setLoading(true)
        const bankNumber = await getBankNumber(publicToken, userId, id)

        const newAccount = { id, bankNumber, bankName }

        await addBankAccount(userId, newAccount)

        setBankNumbers((prev) => [...prev, newAccount])
      } catch (serverError) {
        const { response } = serverError as { response: AxiosResponse }

        if (response && response.status === CLIENT_ERROR_RESPONSE.CONFLICT) {
          setError(`${bankName} already linked.`)
        } else {
          setError(`Error linking ${bankName}`)
        }
      } finally {
        setLoading(false)
      }
    },
    [setLoading, userId],
  )

  // Config plaid
  const config: Parameters<typeof usePlaidLink>[0] = {
    token: linkToken as string,
    onSuccess,
  }

  const { open, ready } = usePlaidLink(config)

  // Loading for plaid to init
  useEffect(() => {
    if (!ready) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [ready, setLoading])

  // Get bank account in case already link bank
  // (Use for connect bank from dashboard header)
  useEffect(() => {
    if (bankAccount) {
      setBankNumbers(bankAccount.account)
    }
  }, [bankAccount])

  /* Handle click add Bank Account */
  const handleAddBankAccount = () => {
    setError('')
    open()
  }

  /* Handle button continue */
  const handleSubmitContinue = () => {
    router.push((query.returnUrl as string) ?? SECONDARY_URL.SUBSCRIPTION.URL)
  }

  return (
    <WrapperContent display="flex" flexDirection="column">
      <Stepper currentPage="connectbank" />
      <Title
        title={isHasBank ? SUCCESS : TITLE_CONNECT_BANK}
        fontSize={theme.typography.fontSize.xlg}
        color={theme.colors.shark}
        pTop={theme.metrics.dimensions.xl}
        letterSpacing={2}
        fontFamily="AdobeCleanExtraBold"
        lineHeight={theme.typography.lineHeight.lg}
      />

      <BreakPointTextStyledPageConnectBank
        fontSize={theme.typography.fontSize.sm}
        color={theme.colors.lightBlack}
        pBottom={theme.metrics.dimensions.lg}
        pTop={theme.metrics.dimensions.md}
        maxWidth="60%"
      >
        {isHasBank
          ? CONNECT_BANK_DESCRIPTION_SUCCESS
          : CONNECT_BANK_DESCRIPTION}
      </BreakPointTextStyledPageConnectBank>

      <AddBankAccount
        handleAddBankAccount={handleAddBankAccount}
        bankNumbers={bankNumbers}
        handleSubmitContinue={handleSubmitContinue}
      />

      {error && <ErrorMessage error={error} />}
    </WrapperContent>
  )
}

export default AddBankAccountPage
