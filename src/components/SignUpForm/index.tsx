import { memo } from 'react'
import { useTheme } from 'styled-components'

// Props Type
import { SignUpFormProps } from '@self-types/components/SignUpForm.props'

// Components
import { BoxShadowStyled } from '@components/styled-components'
import Input from '@components/Input'
import Button from '@components/Button'
import ErrorMessage from '@components/ErrorMessage'

const SignUpForm = ({
  userName,
  email,
  password,
  isEnableButton,
  emailError,
  passwordError,
  passwordStatus,
  handleSubmit,
  handleChangeInput,
}: SignUpFormProps) => {
  const theme = useTheme()

  return (
    <BoxShadowStyled
      as="form"
      noValidate
      onSubmit={handleSubmit}
      padding={theme.metrics.dimensions.lg}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="initial"
    >
      <Input
        iconUrl="/icons/person"
        placeholder="Full Name"
        type="text"
        value={userName}
        name="userName"
        onChange={handleChangeInput}
        mBottom={theme.metrics.dimensions.xmd}
      />
      <Input
        iconUrl="/icons/envelope"
        placeholder="Enter your email address"
        type="email"
        value={email}
        name="email"
        error={emailError}
        onChange={handleChangeInput}
        mBottom={theme.metrics.dimensions.xmd}
      />
      <Input
        iconUrl="/icons/icon-lock"
        statusPassword={passwordStatus}
        type="password"
        placeholder="Password"
        name="password"
        error={passwordError}
        value={password}
        onChange={handleChangeInput}
      />
      {(emailError || passwordError) && (
        <ErrorMessage error={emailError || passwordError || ''} />
      )}
      <Button
        mTop={theme.metrics.dimensions.xl}
        type="submit"
        title="Create My Account"
        variant="colorDefault"
        disabled={!isEnableButton}
      />
    </BoxShadowStyled>
  )
}

export default memo(SignUpForm)
