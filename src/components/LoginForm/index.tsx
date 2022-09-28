import React from 'react'
import { useTheme } from 'styled-components'

// Props type
import { LoginFormProps } from '@self-types/components/LoginForm.props'

// Components
import Button from '@components/Button'
import Input from '@components/Input'
import ErrorMessage from '@components/ErrorMessage'
import { BoxShadowStyled } from '@components/styled-components'
import LinkComponent from '@components/Link'

// Constants
import { DEFAULT_HEADER_URL } from '@constants/routes'

const LoginForm = ({
  errorMessage,
  handleChangeEmail,
  handleChangePassword,
  email,
  password,
  onSubmit,
}: LoginFormProps) => {
  const theme = useTheme()

  return (
    <BoxShadowStyled
      data-testid="loginForm"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      as="form"
      noValidate
      onSubmit={onSubmit}
      padding={theme.metrics.dimensions.md}
    >
      <Input
        mTop={theme.metrics.dimensions.md}
        mBottom={theme.metrics.dimensions.md}
        name="email"
        type="email"
        placeholder="Enter your email address"
        value={email}
        iconUrl="/icons/envelope"
        onChange={handleChangeEmail}
        error={errorMessage?.email}
      />
      <Input
        mTop={theme.metrics.dimensions.sm}
        name="password"
        type="password"
        isLogin
        iconUrl="/icons/icon-lock"
        placeholder="Password"
        value={password}
        error={errorMessage?.password}
        onChange={handleChangePassword}
      />
      {(errorMessage?.email || errorMessage?.password) && (
        <ErrorMessage error={errorMessage?.email || errorMessage?.password} />
      )}
      <Button
        title="Login"
        type="submit"
        disabled={!(email && password)}
        mTop={theme.metrics.dimensions.xlg}
      />
      <LinkComponent
        href={DEFAULT_HEADER_URL.FORGOT_PASSWORD.URL}
        linkTypes="forgotPasswordLink"
        mRight={theme.metrics.dimensions.sm}
        text="Forgot Password?"
        pTop={theme.metrics.dimensions.sm}
        pBottom={theme.metrics.dimensions.tiny}
      />
    </BoxShadowStyled>
  )
}

export default React.memo(LoginForm)
