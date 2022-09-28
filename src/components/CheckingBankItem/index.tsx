import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import Image from 'next/image'
import {
  BoxShadowStyled,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'

// Props type
import { CheckingBankItemProps } from '@self-types/components/CheckingBankItem.props'

// Utils
import { generateSecretBankAccount } from '@utils/index'

const CheckingBankItem = ({
  bankNumber,
  handleAddBankAccount,
  isDisable,
  ...props
}: CheckingBankItemProps) => {
  const theme = useTheme()

  return (
    <BoxShadowStyled
      display="flex"
      padding={theme.metrics.dimensions.base}
      width={theme.metrics.width.full}
      {...(!bankNumber && {
        onClick: handleAddBankAccount,
        cursor: 'pointer',
      })}
      className={isDisable ? 'disable' : ''}
      {...props}
      data-testid="addBankNumbers"
    >
      <Image
        src="/icons/bank.svg"
        alt="bank-icon"
        width={theme.metrics.dimensions.md}
        height={theme.metrics.dimensions.md}
      />
      {/* Status of banking number */}
      <TextStyled
        mLeft={theme.metrics.dimensions.sm}
        width={160}
        textAlign="left"
        flex={1}
      >
        {bankNumber
          ? `Checking ${generateSecretBankAccount(bankNumber)}`
          : 'Add Checking Account'}
      </TextStyled>
      <ViewStyled
        position="relative"
        width={theme.metrics.dimensions.md}
        height={theme.metrics.dimensions.md}
        borderRadius={theme.metrics.borderRadius.circle}
        mLeft={80}
        bgColor={
          bankNumber ? theme.colors.caribbeanGreen : theme.colors.pomegranate
        }
      >
        <Image
          src={bankNumber ? '/icons/check-white.svg' : '/icons/plus-circle.svg'}
          layout="fill"
        />
      </ViewStyled>
    </BoxShadowStyled>
  )
}

export default memo(CheckingBankItem)
