import React from 'react'
import { useTheme } from 'styled-components'

// Props type
import { ResetPasswordFormProps } from '@self-types/components/ResetPasswordForm.props'

// Components
import Button from '@components/Button'
import { BoxShadowStyled } from '@components/styled-components'
import Input from '@components/Input'
import ErrorMessage from '@components/ErrorMessage'
import LinkComponent from '@components/Link'

// Constants
import { DEFAULT_HEADER_URL } from '@constants/index'

const ResetPasswordForm = ({
  errorMessage,
  handleChangePassword,
  newPassword,
  confirmPassword,
  isNewPassword = true,
  statusNewPassword,
  onSubmit,
}: ResetPasswordFormProps) => {
  const theme = useTheme()

  return (
    <BoxShadowStyled
      as="form"
      data-testid="resetPasswordForm"
      onSubmit={onSubmit}
      display="flex"
      id="formResetPassword"
      flexDirection="column"
      alignItems="stretch"
      padding={theme.metrics.dimensions.xmd}
      textAlign="center"
    >
      <Input
        type="password"
        name="newPassword"
        placeholder="New Password"
        iconUrl="/icons/icon-lock"
        value={newPassword}
        isLogin={isNewPassword}
        statusPassword={statusNewPassword}
        onChange={handleChangePassword}
      />

      <Input
        mTop={theme.metrics.dimensions.lg}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        iconUrl="/icons/confirm-password"
        value={confirmPassword}
        isLogin
        error={errorMessage}
        onChange={handleChangePassword}
      />
      {errorMessage && <ErrorMessage error={errorMessage} />}
      <Button
        mTop={theme.metrics.dimensions.xlg}
        title="Reset Password"
        type="submit"
        disabled={newPassword.length < 8 || confirmPassword === ''}
      />
      <LinkComponent
        text="Cancel"
        href={DEFAULT_HEADER_URL.LOGIN.URL}
        linkTypes="forgotPasswordLink"
        fontFamily="AdobeCleanLight"
        mRight={theme.metrics.dimensions.sm}
        pTop={theme.metrics.dimensions.sm}
        pBottom={theme.metrics.dimensions.tiny}
      />
    </BoxShadowStyled>
  )
}

export default React.memo(ResetPasswordForm)
