import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useTheme } from 'styled-components'
import router from 'next/router'

// Constants
import {
  AGE_UNDER_EIGHTEEN,
  IDENTITY_DESCRIPTION,
  INVALID_DOB,
  MAX_AGE_OF_USER,
  MIN_AGE_OF_USER,
  PRIMARY_HEADER_URL,
  SERVER_ERROR,
} from '@constants/index'

// Utils
import { calculateAge, formatDate } from '@utils/index'

// Components
import {
  BreakPointTextStyled,
  TextStyled,
  WrapperContent,
} from '@components/styled-components'
import { TitlePageStyled } from '@components/Title/TitleStyled'
import IdentityForm from '@components/IdentityForm'
import LinkComponent from '@components/Link'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Services
import { addIdentity } from '@services/identity'

const identityInit = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
}

const IdentityPage = () => {
  const theme = useTheme()
  const { setLoading } = useLoadingContext()
  const { userId } = useAuthContext()

  /**
   * Define initial state
   */
  const [error, setError] = useState('')
  const [identity, setIdentity] = useState(identityInit)

  /**
   * Define variables
   */
  const ageOfUser = identity.dateOfBirth && calculateAge(identity.dateOfBirth)

  const isEnableButton = !!(
    identity.firstName &&
    identity.lastName &&
    identity.dateOfBirth
  )

  /**
   * Handle change input value
   */
  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const inputValues = { [e.target.name]: e.target.value }

      setIdentity((prev) => ({
        ...prev,
        ...inputValues,
      }))
    },
    [],
  )

  /**
   * User chooses date of birth
   */
  const handleChangeDateOfBirth = useCallback((date: Date) => {
    const formatDayOfBirth = date && formatDate(date)

    setIdentity((prev) => ({
      ...prev,
      dateOfBirth: formatDayOfBirth,
    }))
    setError('')
  }, [])

  /**
   * Function submit form Identity
   */
  const handleSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()
      const checkAge =
        ageOfUser >= MIN_AGE_OF_USER && ageOfUser < MAX_AGE_OF_USER

      if (checkAge) {
        try {
          setLoading(true)
          addIdentity(userId, identity)

          router.push(PRIMARY_HEADER_URL.CONFIRM_ADDRESS.URL)
        } catch {
          throw new Error(SERVER_ERROR)
        } finally {
          setLoading(false)
        }
      } else if (ageOfUser < MIN_AGE_OF_USER && ageOfUser > 0) {
        setError(AGE_UNDER_EIGHTEEN)
      } else {
        setError(INVALID_DOB)
      }
    },
    [ageOfUser, identity, setLoading, userId],
  )

  return (
    <WrapperContent
      display="flex"
      flexDirection="column"
      mTop={theme.metrics.dimensions.xxl}
    >
      <TitlePageStyled
        as="h1"
        fontSize={theme.typography.fontSize.xlg}
        color={theme.colors.shark}
        letterSpacing={theme.typography.letterSpacing.xxl}
        fontFamily="AdobeCleanExtraBold"
        lineHeight={theme.typography.lineHeight.lg}
        pTop={theme.metrics.dimensions.xs}
      >
        Confirm Your Identity
      </TitlePageStyled>
      <TextStyled
        as="p"
        fontSize={theme.typography.fontSize.sm}
        lineHeight={theme.typography.lineHeight.tiny}
        color={theme.colors.shark}
        pTop={theme.metrics.dimensions.md}
        pBottom={theme.metrics.dimensions.md}
        letterSpacing={theme.typography.letterSpacing.xxl}
        maxWidth={450}
      >
        {IDENTITY_DESCRIPTION}
      </TextStyled>
      <IdentityForm
        error={error}
        onSubmit={handleSubmitForm}
        onChangeDayOfBirth={handleChangeDateOfBirth}
        onChangeInput={handleChangeInput}
        isEnableButton={isEnableButton}
        firstName={identity.firstName}
        lastName={identity.lastName}
      />
      <BreakPointTextStyled
        as="p"
        color={theme.colors.frenchRose}
        fontSize={theme.typography.fontSize.xss}
        lineHeight={theme.typography.lineHeight.tiny}
        letterSpacing={theme.typography.letterSpacing.xl}
        pTop={theme.metrics.dimensions.sm}
        display="inline"
      >
        This will not affect your credit score. We don&rsquo;t store your
        sensitive information.
        <LinkComponent
          href={PRIMARY_HEADER_URL.LEARN_MORE.URL}
          linkTypes="supportLinkUnderline"
          textDecoration="underline"
          text="Learn more"
          display="inline"
          mLeft={theme.metrics.dimensions.xs}
          mRight={theme.metrics.dimensions.xs}
          fontWeight={theme.typography.fontWeight.bold}
          fontSize={theme.typography.fontSize.base}
        />
        about our security.
      </BreakPointTextStyled>
    </WrapperContent>
  )
}

export default IdentityPage
