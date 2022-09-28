import React, { memo, FC, useMemo } from 'react'
import { useTheme } from 'styled-components'

// Components
import Button from '@components/Button'
import Input from '@components/Input'
import ErrorMessage from '@components/ErrorMessage'
import { BoxShadowStyled, ViewStyled } from '@components/styled-components'
import Avatar from '@components/Avatar'
import { TitlePopupStyled } from '@components/Title/TitleStyled'

// Props type
import { ConnectAccountProps } from '@self-types/components/ConnectAccount.props'

const ConnectAccountForm: FC<ConnectAccountProps> = ({
  email,
  password,
  errorMessage,
  nameApplication,
  imageApplication,
  isShadowType,
  isEditModal,
  handleChangeEmail,
  handleChangePassword,
  handleSubmit,
  onCloseConnectAccountForm,
}) => {
  const theme = useTheme()

  // Render title connect account form
  const renderTitleForm = useMemo(() => {
    return (
      <ViewStyled
        display="flex"
        justifyContent="center"
        flexDirection="column"
        pLeft={50}
        pRight={50}
      >
        <Avatar imageUrl={imageApplication} width={80} height={80} />
        <TitlePopupStyled
          fontSize={theme.typography.fontSize.md}
          color={theme.colors.black}
          lineHeight={theme.typography.lineHeight.md}
          fontWeight={theme.typography.fontWeight.bold}
          mBottom={theme.metrics.dimensions.lg}
        >
          {`${nameApplication} Account`}
        </TitlePopupStyled>
      </ViewStyled>
    )
  }, [
    imageApplication,
    nameApplication,
    theme.colors.black,
    theme.metrics.dimensions.lg,
    theme.typography.fontSize.md,
    theme.typography.fontWeight.bold,
    theme.typography.lineHeight.md,
  ])

  return (
    <BoxShadowStyled
      data-testid="connectAccountForm"
      as="form"
      onSubmit={handleSubmit}
      noValidate
      shadowType={isShadowType ? 'regular' : 'none'}
      padding={isEditModal ? 0 : theme.metrics.dimensions.lg}
      textAlign="center"
      mLeft={theme.metrics.dimensions.md}
      mRight={theme.metrics.dimensions.md}
      minWidth={theme.metrics.width.xxl}
      maxWidth={400}
      bgColor={theme.colors.white}
    >
      {renderTitleForm}
      <Input
        placeholder="Email Address"
        type="email"
        name="email"
        iconUrl="/icons/envelope"
        value={email}
        onChange={handleChangeEmail}
        error={errorMessage?.email}
        mTop={theme.metrics.dimensions.xs}
      />
      <Input
        placeholder="Password"
        mTop={theme.metrics.dimensions.lg}
        isLogin
        type="password"
        name="password"
        iconUrl="/icons/icon-lock"
        value={password}
        onChange={handleChangePassword}
        error={errorMessage?.password}
      />
      {(errorMessage?.email || errorMessage?.password) && (
        <ErrorMessage error={errorMessage?.email || errorMessage?.password} />
      )}

      {isEditModal ? (
        <ViewStyled
          width={theme.metrics.width.full}
          display="flex"
          justifyContent="flex-end"
          gap={theme.metrics.dimensions.base}
          mTop={theme.metrics.dimensions.xxl}
          mBottom={theme.metrics.dimensions.md}
        >
          <Button
            bgColorHover={theme.colors.ironLight}
            onClick={onCloseConnectAccountForm}
            title="Cancel"
            color={theme.colors.shark}
            variant="dark"
          />
          <Button
            type="submit"
            title="Connect Account"
            disabled={!(email && password)}
          />
        </ViewStyled>
      ) : (
        <Button
          mTop={theme.metrics.dimensions.xxl}
          {...(email && { cursor: 'pointer' })}
          type="submit"
          title={`Connect ${nameApplication} Account`}
          disabled={!(email && password)}
          btnWidth={theme.metrics.width.full}
        />
      )}
    </BoxShadowStyled>
  )
}

export default memo(ConnectAccountForm)
