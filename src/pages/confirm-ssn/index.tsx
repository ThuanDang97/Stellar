import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'
import useSWR from 'swr'

// Components
import SSNForm from '@components/SSNForm'
import { TextStyled, ViewStyled } from '@components/styled-components'
import { TitlePageStyled } from '@components/Title/TitleStyled'

// Constants
import { INVALID_SSN, SERVER_ERROR } from '@constants/errorMessage'
import { REGEX_REMOVE_BRACKETS } from '@constants/regex'
import { PRIMARY_HEADER_URL } from '@constants/routes'
import { SSN_LENGTH } from '@constants/variables'
import { USER_ENDPOINT } from '@constants/endPoints'

// Utils
import { formatSSN } from '@utils/index'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'
import { useAuthContext } from '@hooks/useAuthContext'

// Services
import { addSSN } from '@services/ssn'

// Types
import { IUser } from '@self-types/api'

const SSNPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { userId } = useAuthContext()
  const { setLoading } = useLoadingContext()

  const { mutate: mutateUserInfo } = useSWR<Omit<IUser, 'password'>>(
    userId ? USER_ENDPOINT(userId) : null,
  )
  /**
   * Define initial state
   */
  const [currentSSN, setCurrentSSN] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [securityNumber, setSecurityNumber] = useState('')

  /**
   * Handle change confirm SSN value
   */
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')
    const valueInput = e.target.value
    setCurrentSSN(formatSSN(valueInput).replace(REGEX_REMOVE_BRACKETS, ''))
    setSecurityNumber(formatSSN(valueInput))
  }

  /**
   * Handle submit confirm SSN
   */
  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()

      if (currentSSN.length !== SSN_LENGTH) {
        setErrorMessage(INVALID_SSN)
      } else if (currentSSN) {
        try {
          setLoading(true)
          const data = await addSSN(userId, currentSSN)
          mutateUserInfo(data, false)

          router.push(PRIMARY_HEADER_URL.DASHBOARD.URL)
        } catch {
          throw new Error(SERVER_ERROR)
        } finally {
          setLoading(false)
        }
      }
    },
    [currentSSN, mutateUserInfo, router, setLoading, userId],
  )

  const renderDescription = useMemo(() => {
    return (
      <TextStyled
        as="p"
        mTop={theme.metrics.dimensions.lg}
        mBottom={theme.metrics.dimensions.lg}
        fontSize={theme.typography.fontSize.sm}
        pLeft={theme.metrics.dimensions.sm}
        pRight={theme.metrics.dimensions.sm}
      >
        In order to complete your Stellar account we’ll need to confirm your
        full
        <TextStyled fontWeight={800}> Social Security Number.</TextStyled>
      </TextStyled>
    )
  }, [
    theme.metrics.dimensions.lg,
    theme.metrics.dimensions.sm,
    theme.typography.fontSize.sm,
  ])

  const renderMiniDescription = useMemo(() => {
    return (
      <TextStyled
        as="p"
        fontSize={theme.typography.fontSize.xss}
        color={theme.colors.shark}
      >
        This will not affect your credit score.
      </TextStyled>
    )
  }, [theme.colors.shark, theme.typography.fontSize.xss])

  return (
    <ViewStyled maxWidth={450} mTop={theme.metrics.dimensions.xxl}>
      <TitlePageStyled
        as="h1"
        pTop={theme.metrics.dimensions.xs}
        fontSize={theme.typography.fontSize.xlg}
        lineHeight={theme.typography.fontSize.xlg}
        color={theme.colors.shark}
        fontFamily="AdobeCleanExtraBold"
      >
        Get your credit score.
      </TitlePageStyled>
      {renderDescription}
      <SSNForm
        securityNumber={securityNumber}
        handleChangeValue={handleChangeValue}
        onSubmit={onSubmit}
        errorMessage={errorMessage}
      />
      {renderMiniDescription}
    </ViewStyled>
  )
}

export default SSNPage
