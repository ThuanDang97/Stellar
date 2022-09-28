import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useState,
  useMemo,
} from 'react'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

// Props type
import {
  ErrorMsgs,
  SignUpAccount,
} from '@self-types/components/SignUpForm.props'

// Utils
import {
  checkPasswordRules,
  checkStatusPassword,
  signUpValidate,
} from '@utils/validation'
import { pxToRem } from '@utils/theme'
import { setLocalStorage } from '@utils/localStorage'

// Components
import {
  TextStyled,
  ViewStyled,
  WrapperContent,
} from '@components/styled-components'
import Stepper from '@components/Stepper'
import Title from '@components/Title'
import Image from 'next/image'
import SignUpForm from '@components/SignUpForm'

// Constants
import {
  DEFAULT_HEADER_URL,
  EMAIL_EXIST,
  LOCAL_STORAGE_KEY,
} from '@constants/index'

// Services
import { signUpUser } from '@services/authentication'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

const signUp: SignUpAccount = {
  userName: '',
  email: '',
  password: '',
}

const errorMsgs: ErrorMsgs = {
  email: '',
  password: '',
}

const SignUpPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { setUserId } = useAuthContext()
  const { setLoading } = useLoadingContext()

  const [signUpAccount, setSignUpAccount] = useState(signUp)
  const [passwordStatus, setPasswordStatus] = useState<string>('')
  const [error, setError] = useState<ErrorMsgs>(errorMsgs)

  /**
   * Check enable button SignUp
   */
  const isEnableButton = !!(
    signUpAccount.userName &&
    signUpAccount.email &&
    signUpAccount.password
  )

  /**
   * Get input value and check rules password
   */
  const handleChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const inputValues = { [e.target.name]: e.target.value }

      const errorCase = checkPasswordRules(inputValues.password)
      const statusPassword = checkStatusPassword(errorCase)

      setSignUpAccount((prev) => ({
        ...prev,
        ...inputValues,
      }))

      if (inputValues.password && statusPassword.status) {
        setPasswordStatus(statusPassword.status)
      }

      if (inputValues.password === '') {
        setPasswordStatus('')
      }

      setError(errorMsgs)
    },
    [],
  )

  /**
   * Function submit form SignUp
   */
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()
      const signUpFormValidate = signUpValidate(signUpAccount)
      const account = { ...signUpAccount, countBill: 0 }

      if (!signUpFormValidate.isValid && signUpFormValidate.error) {
        setError(signUpFormValidate.error)
      } else {
        try {
          setLoading(true)

          const { userId } = await signUpUser(account)

          setUserId(userId)

          setLocalStorage(LOCAL_STORAGE_KEY.USER_ID, userId)
          setLocalStorage(LOCAL_STORAGE_KEY.IS_TOKEN, `${userId}-LP`)

          router.push(DEFAULT_HEADER_URL.MARKETING.URL)
        } catch (err) {
          const responseError = err as { message: string }

          if (responseError.message === EMAIL_EXIST)
            setError((prev) => ({ ...prev, email: responseError.message }))
        } finally {
          setLoading(false)
        }
      }
    },
    [router, setLoading, setUserId, signUpAccount],
  )

  // Check re-render header title page
  const renderHeaderTitlePage = useMemo(() => {
    return (
      <ViewStyled
        maxWidth={650}
        display="flex"
        flexDirection="column"
        margin="0 auto"
      >
        <Stepper currentPage="signup" />
        <Title
          title="Start Paying Bills & Building Credit With Stellar"
          fontSize={theme.typography.fontSize.xlg}
          color={theme.colors.shark}
          pTop={theme.metrics.dimensions.xl}
          letterSpacing={2}
          fontFamily="AdobeCleanExtraBold"
          lineHeight={theme.typography.lineHeight.lg}
        />
      </ViewStyled>
    )
  }, [
    theme.colors.shark,
    theme.metrics.dimensions.xl,
    theme.typography.fontSize.xlg,
    theme.typography.lineHeight.lg,
  ])

  // Check re-render image page
  const renderImagePage = useMemo(() => {
    return (
      <ViewStyled
        height={400}
        width="inherit"
        position="relative"
        flex={`1 1 ${pxToRem(250)}`}
        display="flex"
        alignItems="flex-start"
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
      {renderHeaderTitlePage}
      <ViewStyled
        display="flex"
        flexWrap="wrap"
        mTop={theme.metrics.dimensions.xxl}
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
          <SignUpForm
            emailError={error.email}
            passwordError={error.password}
            handleSubmit={handleSubmit}
            handleChangeInput={handleChangeValue}
            passwordStatus={passwordStatus}
            isEnableButton={isEnableButton}
            userName={signUpAccount.userName}
            email={signUpAccount.email}
            password={signUpAccount.password}
          />
          <TextStyled
            fontSize={theme.typography.fontSize.xss}
            lineHeight={theme.typography.fontSize.sm}
            color={theme.colors.cello}
            pBottom={theme.metrics.dimensions.lg}
            pTop={theme.metrics.dimensions.sm}
            textAlign="left"
          >
            By joining, I agree to Stellar&rsquo;s Privacy Policy, Terms of Use,
            Payment Authorization, and Electronic Communications Concent.
          </TextStyled>
        </ViewStyled>
      </ViewStyled>
    </WrapperContent>
  )
}

export default SignUpPage
