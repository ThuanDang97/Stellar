import React, { useMemo } from 'react'
import { useTheme } from 'styled-components'

// Prop type
import { SSNFormProps } from '@self-types/components/SSNForm.props'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import Image from 'next/image'
import Button from '@components/Button'
import ErrorMessage from '@components/ErrorMessage'
import InputGroup from '@components/InputGroup'
import { BoxShadowStyled } from '@components/styled-components'
import { WrapperIconStyled } from './SSNFormStyled'

const SSNForm = ({
  errorMessage,
  handleChangeValue,
  securityNumber,
  onSubmit,
}: SSNFormProps) => {
  const theme = useTheme()
  const renderIcon = useMemo(() => {
    return (
      <WrapperIconStyled>
        <Image
          src="/icons/icon-lock-active.svg"
          width={theme.metrics.dimensions.base}
          height={theme.metrics.dimensions.base}
          alt="icon"
          layout="fixed"
        />
      </WrapperIconStyled>
    )
  }, [theme.metrics.dimensions.base])

  return (
    <BoxShadowStyled
      border={`solid ${pxToRem(theme.metrics.dimensions.tiny)} ${
        theme.colors.shamrock
      }`}
      position="relative"
      data-testid="ssnForm"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      as="form"
      noValidate
      onSubmit={onSubmit}
      padding={theme.metrics.dimensions.md}
      maxWidth={theme.metrics.width.xxxl}
      mLeft={50}
      mRight={50}
    >
      {renderIcon}
      <InputGroup
        mTop={theme.metrics.dimensions.sm}
        mBottom={errorMessage ? 0 : theme.metrics.dimensions.sm}
        name="SSN"
        type="text"
        placeholder="000-00-0000"
        value={securityNumber}
        label="SSN"
        onChange={handleChangeValue}
        error={errorMessage}
      />
      {errorMessage && (
        <ErrorMessage
          mBottom={theme.metrics.dimensions.sm}
          error={errorMessage}
        />
      )}
      <Button
        title="Submit"
        type="submit"
        disabled={!securityNumber}
        mTop={theme.metrics.dimensions.xlg}
      />
    </BoxShadowStyled>
  )
}

export default React.memo(SSNForm)
