import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useMemo,
  useLayoutEffect,
  useEffect,
} from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'

// Components
import LoginForm from '@components/LoginForm'
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
import { clearLocalStorageItem, setLocalStorage } from '@utils/localStorage'

// Constants
import {
  CONNECT_BANK_ENDPOINT,
  DEFAULT_HEADER_URL,
  GOAL_ENDPOINT,
  LOCAL_STORAGE_KEY,
  MARKETING_ENDPOINT,
  PRIMARY_HEADER_URL,
  SECONDARY_URL,
  USER_ENDPOINT,
} from '@constants/index'

// Services
import { loginUser } from '@services/authentication'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { useLoadingContext } from '@hooks/useLoadingContext'
import useSWR, { useSWRConfig } from 'swr'

// Types
import { multiFetcher } from '@services/index'
import {
  BankAccount,
  GoalList,
  MarketingList,
  UserInfo,
} from '@self-types/pages/Login.props'
import { CacheSWRProps } from '@self-types/swr'

const LoginPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const { userId, setUserId } = useAuthContext()
  const { setLoading } = useLoadingContext()
  const { cache } = useSWRConfig()
  const cacheFetchingData = cache as CacheSWRProps

  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
  })
  const [loginAccount, setLoginAccount] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (userId) {
      clearLocalStorageItem(LOCAL_STORAGE_KEY.USER_ID)
      setUserId('')
      cacheFetchingData.clear()
    }
  }, [])

  const { data, error } = useSWR(
    userId
      ? [
          MARKETING_ENDPOINT(userId),
          USER_ENDPOINT(userId),
          GOAL_ENDPOINT(userId),
          CONNECT_BANK_ENDPOINT(userId),
        ]
      : null,
    multiFetcher,
  )

  useLayoutEffect(() => {
    if (!userId || error || !data) {
      return
    }
    const [marketingList, userInfo, goalList, bankAccount]: [
      MarketingList,
      UserInfo,
      GoalList,
      BankAccount,
    ] = data as unknown as [MarketingList, UserInfo, GoalList, BankAccount]
    switch (true) {
      case marketingList.value.marketings.length === 0:
        router.push(DEFAULT_HEADER_URL.MARKETING.URL)
        break
      case goalList.value.length === 0:
        router.push(DEFAULT_HEADER_URL.GOAL.URL)
        break
      case !!bankAccount.reason:
        router.push(DEFAULT_HEADER_URL.CONNECT_BANK.URL)
        break
      case userInfo.value.subscriptionPlan === undefined:
        router.push(SECONDARY_URL.SUBSCRIPTION.URL)
        break
      default:
        router.push(PRIMARY_HEADER_URL.DASHBOARD.URL)
        break
    }
  }, [error, userId, data])

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage({
      email: '',
      password: '',
    })
    setLoginAccount({ ...loginAccount, [e.target.name]: e.target.value })
  }

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    try {
      setLoading(true)
      const user = await loginUser(loginAccount)
      setUserId(user.userId)

      setLocalStorage(LOCAL_STORAGE_KEY.USER_ID, user.userId)
      setLocalStorage(LOCAL_STORAGE_KEY.IS_TOKEN, `${user.userId}-LP`)
    } catch (err) {
      enum ErrorField {
        Email = 'email',
        Password = 'password',
      }

      const responseError = err as {
        field: ErrorField
        message: string
      }

      if (responseError.field === ErrorField.Email) {
        setErrorMessage((prev) => ({
          ...prev,
          email: responseError.message,
          password: responseError.message,
        }))
      } else if (responseError.field === ErrorField.Password) {
        setErrorMessage((prev) => ({
          ...prev,
          password: responseError.message,
        }))
      }
    } finally {
      setLoading(false)
    }
  }

  // Check re-render login in login page
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
  }, [])

  // Check re-render link to sign up page
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
          alignItems="initial"
          flexDirection="column"
          justifyContent="center"
          flex={`1 1 ${pxToRem(250)}`}
        >
          <Title
            color={theme.colors.black}
            fontFamily="AdobeCleanExtraBold"
            pBottom={theme.metrics.dimensions.md}
            title="Login"
          />
          <LoginForm
            email={loginAccount.email}
            password={loginAccount.password}
            handleChangeEmail={handleChangeValue}
            handleChangePassword={handleChangeValue}
            onSubmit={handleSubmitForm}
            errorMessage={errorMessage}
          />
          {renderTextLink}
        </ViewStyled>
      </ViewStyled>
    </WrapperContent>
  )
}

export default LoginPage
