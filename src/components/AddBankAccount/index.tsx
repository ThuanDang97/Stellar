import React, { memo, FC } from 'react'
import Image from 'next/image'
import { useTheme } from 'styled-components'

// Components
import Button from '@components/Button'
import {
  BoxShadowStyled,
  ViewStyled,
  TextStyled,
} from '@components/styled-components'
import CheckingBankItem from '@components/CheckingBankItem'
import { WrapperIconStyled } from '@components/Input/InputStyled'

// Props type
import { AddBankAccountProps } from '@self-types/components/AddBankAccount.props'

const AddBankAccount: FC<AddBankAccountProps> = ({
  handleSubmitContinue,
  bankNumbers = [],
  handleAddBankAccount,
}) => {
  const theme = useTheme()

  const isDisableAddBank = bankNumbers.length >= 10
  const isDisableButton = bankNumbers.length === 0

  return (
    <BoxShadowStyled
      data-testid="addBankAccount"
      shadowType="small"
      padding={theme.metrics.dimensions.xmd}
      textAlign="center"
      flexDirection="column"
      alignItems="initial"
      flexWrap="wrap"
    >
      {bankNumbers.map((item) => (
        <CheckingBankItem
          mTop={theme.metrics.dimensions.xs}
          key={`bank-${item.id}`}
          bankNumber={item.bankNumber}
        />
      ))}

      <CheckingBankItem
        mTop={theme.metrics.dimensions.base}
        isDisable={isDisableAddBank}
        handleAddBankAccount={handleAddBankAccount}
      />

      <ViewStyled mTop={theme.metrics.dimensions.xs} display="flex">
        <WrapperIconStyled mRight={theme.metrics.dimensions.xs}>
          <Image src="/icons/icon-lock.svg" alt="icon" layout="fill" />
        </WrapperIconStyled>

        <TextStyled
          color={theme.colors.black}
          fontSize={theme.typography.fontSize.base}
          lineHeight={theme.typography.lineHeight.md}
          fontFamily="AdobeCleanLight"
          textAlign="left"
          pTop={theme.metrics.dimensions.tiny}
          fontWeight={theme.typography.fontWeight.small}
        >
          Bank-level Security
        </TextStyled>
      </ViewStyled>

      <Button
        {...(!isDisableButton && { cursor: 'pointer' })}
        title="Continue"
        onClick={handleSubmitContinue}
        disabled={isDisableButton}
        mTop={theme.metrics.dimensions.xxxl}
        btnWidth={theme.metrics.width.full}
      />
    </BoxShadowStyled>
  )
}

export default memo(AddBankAccount)
