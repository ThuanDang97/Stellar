import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useState,
  useMemo,
} from 'react'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

// Components
import ResetPasswordForm from '@components/ResetPasswordForm'
import {
  TextStyled,
  ViewStyled,
  WrapperContent,
} from '@components/styled-components'
import Image from 'next/image'
import LinkComponent from '@components/Link'
import Title from '@components/Title'

// Utils
import { pxToRem } from '@utils/theme'
import {
  checkPasswordRules,
  checkStatusPassword,
  checkValidate,
} from '@utils/validation'

// Constants
import {
  DEFAULT_HEADER_URL,
  INVALID_PASSWORD,
  PASS_NOT_MATCH,
  REGEX_PASSWORD,
  SERVER_ERROR,
} from '@constants/index'

// Props type
import { ResetPassword } from '@self-types/components/ResetPasswordForm.props'

// Services
import { resetPassword } from '@services/authentication'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'

const resetPass: ResetPassword = {
  newPassword: '',
  confirmPassword: '',
}

const ResetPasswordPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { setLoading } = useLoadingContext()

  const [password, setPassword] = useState(resetPass)
  const [statusPassword, setStatusPassword] = useState('')
  const [isNewPassword, setIsNewPassword] = useState(true)
  const [errorMess, setErrorMessage] = useState('')

  const { token } = router.query as { token: string }

  /**
   * Get input value and check rules password
   */
  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const inputValues = { [e.target.name]: e.target.value }
      setPassword((prev) => ({
        ...prev,
        ...inputValues,
      }))
      if (inputValues.newPassword) {
        const errorCase = checkPasswordRules(inputValues.newPassword)
        const statusPass = checkStatusPassword(errorCase)

        if (statusPass.status) {
          setStatusPassword(statusPass.status)
          setIsNewPassword(false)
        } else {
          setIsNewPassword(true)
        }
      } else if (
        inputValues.newPassword === '' ||
        inputValues.confirmPassword === ''
      ) {
        setIsNewPassword(true)
        setErrorMessage('')
      }
    },
    [],
  )

  /**
   * Handle password when changed completed
   */
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const isPasswordIncorrect = checkValidate({
        value: password.newPassword,
        regex: REGEX_PASSWORD,
        errorMess: INVALID_PASSWORD,
      })

      if (isPasswordIncorrect) {
        setErrorMessage(INVALID_PASSWORD)
      } else if (password.newPassword !== password.confirmPassword) {
        setErrorMessage(PASS_NOT_MATCH)
      } else {
        try {
          setLoading(true)
          await resetPassword(token, password.newPassword)

          router.push(DEFAULT_HEADER_URL.CHANGE_PASSWORD.URL)
        } catch {
          throw new Error(SERVER_ERROR)
        } finally {
          setLoading(false)
        }
      }
    },
    [password.confirmPassword, password.newPassword, router, setLoading, token],
  )

  // Check re-render image sign up page
  const renderLogoPage = useMemo(() => {
    return (
      <ViewStyled width={250} height={60} position="relative" margin="0 auto">
        <Image
          alt="stellar-logo"
          src="/images/stellar-dark.png"
          layout="fill"
          objectFit="contain"
        />
      </ViewStyled>
    )
  }, [])

  // Check re-render link to sign up page
  const renderTextLink = useMemo(() => {
    return (
      <TextStyled as="p" mTop={theme.metrics.dimensions.lg}>
        <TextStyled color={theme.colors.doveGray}>
          Don’t have an account?
        </TextStyled>
        <LinkComponent
          href={DEFAULT_HEADER_URL.SIGN_UP.URL}
          linkTypes="forgotPasswordLink"
          text="Signup Now"
          display="inline"
          mLeft={theme.metrics.dimensions.tiny}
        />
      </TextStyled>
    )
  }, [
    theme.colors.doveGray,
    theme.metrics.dimensions.lg,
    theme.metrics.dimensions.tiny,
  ])

  // Check re-render image sign up page
  const renderImagePage = useMemo(() => {
    return (
      <ViewStyled
        height={450}
        width="inherit"
        position="relative"
        data-testid="img"
        flex={`1 1 ${pxToRem(250)}`}
      >
        <Image
          alt="Jumping man image"
          src="/images/jumping-man.png"
          layout="fill"
          objectFit="contain"
        />
      </ViewStyled>
    )
  }, [])

  return (
    <WrapperContent>
      {renderLogoPage}
      <ViewStyled
        display="flex"
        flexWrap="wrap"
        mTop={theme.metrics.dimensions.xxxl}
      >
        {renderImagePage}
        <ViewStyled
          width="inherit"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="initial"
          flex={`1 1 ${pxToRem(250)}`}
        >
          <Title
            color={theme.colors.black}
            pBottom={theme.metrics.dimensions.md}
            title="Reset Password"
            fontFamily="AdobeCleanExtraBold"
          />
          <ResetPasswordForm
            isNewPassword={isNewPassword}
            statusNewPassword={statusPassword}
            newPassword={password.newPassword}
            confirmPassword={password.confirmPassword}
            handleChangePassword={handleChangePassword}
            errorMessage={errorMess}
            onSubmit={handleSubmit}
          />
          {renderTextLink}
        </ViewStyled>
      </ViewStyled>
    </WrapperContent>
  )
}

export default React.memo(ResetPasswordPage)
