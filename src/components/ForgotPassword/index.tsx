import React, { memo, FC, useMemo } from 'react'
import { useTheme } from 'styled-components'

// Components
import Title from '@components/Title'
import Button from '@components/Button'
import LinkComponent from '@components/Link'
import Input from '@components/Input'
import ErrorMessage from '@components/ErrorMessage'
import { TitleStyled } from '@components/Title/TitleStyled'
import { BoxShadowStyled, ViewStyled } from '@components/styled-components'

// Constants
import { TEXT_FORGOT_PASSWORD } from '@constants/index'

// Props type
import { ForgotPasswordProps } from '@self-types/components/ForgotPassword.props'

const ForgotPassword: FC<ForgotPasswordProps> = ({
  textEmail,
  errorMessage,
  handleChangeEmail,
  handleSubmit,
}) => {
  const theme = useTheme()

  // Render title forgot password form
  const renderTitleForm = useMemo(() => {
    return (
      <ViewStyled display="flex" justifyContent="center">
        <Title
          fontSize={theme.typography.fontSize.xss}
          color={theme.colors.silver}
          lineHeight={theme.typography.lineHeight.md}
          fontWeight={theme.typography.fontWeight.base}
          fontFamily="AdobeCleanLight"
          title={TEXT_FORGOT_PASSWORD}
          mBottom={theme.metrics.dimensions.lg}
          maxWidth="75%"
        />
      </ViewStyled>
    )
  }, [
    theme.colors.silver,
    theme.metrics.dimensions.lg,
    theme.typography.fontSize.xss,
    theme.typography.fontWeight.base,
    theme.typography.lineHeight.md,
  ])

  // Check re-render link to login page
  const renderTextLink = useMemo(() => {
    return (
      <ViewStyled
        mTop={theme.metrics.dimensions.xs}
        color={theme.colors.doveGray}
      >
        <TitleStyled
          color={theme.colors.doveGray}
          fontSize={theme.typography.fontSize.base}
          lineHeight={theme.typography.lineHeight.sm}
          fontFamily="AdobeCleanLight"
        >
          Back to
        </TitleStyled>
        <LinkComponent
          href="/login"
          text="Login"
          color={theme.colors.doveGray}
          display="inline"
          fontFamily="AdobeCleanLight"
          fontSize={theme.typography.fontSize.sm}
          fontWeight={theme.typography.fontWeight.bold}
          pTop={theme.metrics.dimensions.tiny}
          pBottom={theme.metrics.dimensions.tiny}
          mLeft={theme.metrics.dimensions.xs}
        />
      </ViewStyled>
    )
  }, [
    theme.colors.doveGray,
    theme.metrics.dimensions.tiny,
    theme.metrics.dimensions.xs,
    theme.typography.fontSize.base,
    theme.typography.fontSize.sm,
    theme.typography.fontWeight.bold,
    theme.typography.lineHeight.sm,
  ])

  return (
    <BoxShadowStyled
      data-testid="forgotPasswordForm"
      as="form"
      onSubmit={handleSubmit}
      noValidate
      shadowType="regular"
      padding={theme.metrics.dimensions.md}
      textAlign="center"
    >
      {renderTitleForm}
      <Input
        placeholder="Enter your email address"
        type="email"
        name="email"
        iconUrl="/icons/envelope"
        value={textEmail}
        onChange={handleChangeEmail}
      />
      {errorMessage && <ErrorMessage error={errorMessage} />}
      <ViewStyled
        mTop={theme.metrics.dimensions.xxl}
        display="flex"
        flexDirection="column"
        alignItems="initial"
      >
        <Button
          {...(textEmail && { cursor: 'pointer' })}
          type="submit"
          title="Continue"
          disabled={!textEmail}
        />
        {renderTextLink}
      </ViewStyled>
    </BoxShadowStyled>
  )
}

export default memo(ForgotPassword)
