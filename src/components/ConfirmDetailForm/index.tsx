import React, { memo, FC, useMemo } from 'react'
import { useTheme } from 'styled-components'

// Props type
import { ConfirmDetailProps } from '@self-types/components/ConfirmDetail.props'

// Components
import Button from '@components/Button'
import Input from '@components/Input'
import Avatar from '@components/Avatar'
import Picker from '@components/Picker'
import Select from '@components/Select'
import { BoxShadowStyled, ViewStyled } from '@components/styled-components'
import { TitlePopupStyled } from '@components/Title/TitleStyled'

// Constants
import { LIST_PAYMENTS_BY_MONTH, MAX_LENGTH_INPUT } from '@constants/index'

// Utils
import { formatStringToCurrency } from '@utils/index'

const ConfirmDetailForm: FC<ConfirmDetailProps> = ({
  confirmDetailForm,
  appName,
  appImage,
  listBankNumber,
  handleChangeAmount,
  handleChangeBankNumber,
  handleChangePayByDay,
  handleChangePayByMonth,
  handleSubmit,
}) => {
  const theme = useTheme()

  // Render avatar and title confirm detail form
  const renderHeaderForm = useMemo(() => {
    return (
      <ViewStyled
        display="flex"
        justifyContent="center"
        flexDirection="column"
        pLeft={50}
        pRight={50}
      >
        <Avatar imageUrl={appImage} width={80} height={80} />
        <TitlePopupStyled
          fontSize={theme.typography.fontSize.md}
          color={theme.colors.black}
          lineHeight={theme.typography.lineHeight.md}
          fontWeight={theme.typography.fontWeight.bold}
          mBottom={theme.metrics.dimensions.lg}
        >
          {`${appName} Account`}
        </TitlePopupStyled>
      </ViewStyled>
    )
  }, [
    appImage,
    appName,
    theme.colors.black,
    theme.metrics.dimensions.lg,
    theme.typography.fontSize.md,
    theme.typography.fontWeight.bold,
    theme.typography.lineHeight.md,
  ])

  return (
    <BoxShadowStyled
      data-testid="confirmDetailForm"
      as="form"
      onSubmit={handleSubmit}
      noValidate
      shadowType="small"
      padding={theme.metrics.dimensions.lg}
      textAlign="center"
      bgColor={theme.colors.white}
      mLeft={theme.metrics.dimensions.md}
      mRight={theme.metrics.dimensions.md}
      minWidth={theme.metrics.width.xxl}
      maxWidth={theme.metrics.width.xxxl}
    >
      {renderHeaderForm}
      <Input
        placeholder="&nbsp;Amount"
        type="text"
        name="amount"
        mTopIcon={theme.metrics.dimensions.tiny}
        width={13}
        mRight={-1}
        value={formatStringToCurrency(confirmDetailForm.amount)}
        onChange={handleChangeAmount}
        iconUrl="/icons/currency-dollar"
        maxLength={MAX_LENGTH_INPUT}
      />
      <Select
        fontSize={theme.typography.fontSize.base}
        defaultValue={confirmDetailForm.bankName}
        width={theme.metrics.width.full}
        handleSelect={handleChangeBankNumber}
        listOption={listBankNumber}
      />
      <Picker
        onChange={handleChangePayByDay}
        isMinDate
        isMaxDate
        mTop={theme.metrics.dimensions.lg}
        defaultDate={confirmDetailForm.draftDate}
        mBottom={theme.metrics.dimensions.sm}
      />
      <Select
        fontSize={theme.typography.fontSize.base}
        defaultValue={confirmDetailForm.payPeriod}
        width={theme.metrics.width.full}
        handleSelect={handleChangePayByMonth}
        listOption={LIST_PAYMENTS_BY_MONTH}
      />

      <Button
        mTop={theme.metrics.dimensions.xxl}
        {...{ cursor: 'pointer' }}
        type="submit"
        title="Confirm & Link Bill"
        btnWidth={theme.metrics.width.full}
        size="large"
        disabled={!confirmDetailForm.amount}
      />
    </BoxShadowStyled>
  )
}

export default memo(ConfirmDetailForm)
