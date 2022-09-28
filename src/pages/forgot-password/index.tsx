import React, { ChangeEvent, FormEvent, useState, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

// Components
import Image from 'next/image'
import ForgotPasswordForm from '@components/ForgotPassword'
import {
  TextStyled,
  ViewStyled,
  WrapperContent,
} from '@components/styled-components'
import Title from '@components/Title'
import LinkComponent from '@components/Link'

// Props type
import { ValidateProps } from '@self-types/components/Validate.props'

// Utils
import { pxToRem } from '@utils/theme'
import { checkValidate } from '@utils/validation'

// Constants
import {
  INVALID_EMAIL,
  REGEX_EMAIL,
  DEFAULT_HEADER_URL,
  EMAIL_NOT_EXIST,
} from '@constants/index'

// Services
import { sendEmailForgotPwd } from '@services/authentication'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'

const ForgotPassword = () => {
  const theme = useTheme()
  const router = useRouter()
  const { setLoading } = useLoadingContext()

  const [emailValue, setEmailValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value

    if (email === '') {
      setEmailValue('')
      setErrorMessage('')
    } else {
      setEmailValue(email)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const param: ValidateProps = {
      value: emailValue,
      regex: REGEX_EMAIL,
      errorMess: INVALID_EMAIL,
    }
    const invalidEmail = checkValidate(param)

    if (invalidEmail) {
      // Show error when invalid email
      setErrorMessage(checkValidate(param))
    } else {
      // Handle success when valid email
      try {
        setLoading(true)
        const { userId } = await sendEmailForgotPwd(emailValue)

        router.push(`${DEFAULT_HEADER_URL.EMAIL_SENT.URL}/${userId}`)
      } catch (err) {
        const responseError = err as { message: string }

        if (responseError.message === EMAIL_NOT_EXIST)
          setErrorMessage(responseError.message)
      } finally {
        setLoading(false)
      }
    }
  }

  // Check re-render image sign up page
  const renderLogoPage = useMemo(() => {
    return (
      <ViewStyled width={250} height={60} position="relative" margin="0 auto">
        <Image
          src="/images/stellar-dark.png"
          layout="fill"
          alt="stellar-logo"
          objectFit="contain"
        />
      </ViewStyled>
    )
  }, [])

  // Check re-render image sign up page
  const renderImagePage = useMemo(() => {
    return (
      <ViewStyled position="relative" height={400} flex={`1 1 ${pxToRem(250)}`}>
        <Image
          src="/images/jumping-man.png"
          layout="fill"
          alt="jumping-man"
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
            title="Forgot Password"
            fontFamily="AdobeCleanExtraBold"
          />
          <ForgotPasswordForm
            textEmail={emailValue}
            errorMessage={errorMessage}
            handleChangeEmail={handleChangeEmail}
            handleSubmit={handleSubmit}
          />
          {renderTextLink}
        </ViewStyled>
      </ViewStyled>
    </WrapperContent>
  )
}

export default ForgotPassword
