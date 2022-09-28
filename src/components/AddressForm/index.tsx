import React from 'react'
import { useTheme } from 'styled-components'

// Props type
import { AddressFormProps } from '@self-types/components/AddressForm.props'

// Components
import Button from '@components/Button'
import Input from '@components/Input'
import { BoxShadowStyled } from '@components/styled-components'
import ErrorMessage from '@components/ErrorMessage'

const AddressForm = ({
  errorMessage,
  handleChangeValue,
  address,
  phone,
  onSubmit,
}: AddressFormProps) => {
  const theme = useTheme()

  return (
    <BoxShadowStyled
      data-testid="addressForm"
      display="flex"
      flexDirection="column"
      alignItems="stretch"
      as="form"
      noValidate
      width={theme.metrics.width.full}
      onSubmit={onSubmit}
      padding={theme.metrics.dimensions.md}
    >
      <Input
        mBottom={theme.metrics.dimensions.sm}
        name="address"
        type="text"
        placeholder="Home Address"
        value={address}
        iconUrl="/icons/envelope"
        onChange={handleChangeValue}
      />
      <Input
        mTop={theme.metrics.dimensions.sm}
        mBottom={errorMessage ? 0 : theme.metrics.dimensions.md}
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={phone}
        iconUrl="/icons/telephone"
        onChange={handleChangeValue}
        error={errorMessage}
      />
      {errorMessage && (
        <ErrorMessage
          mBottom={theme.metrics.dimensions.md}
          error={errorMessage}
        />
      )}
      <Button
        title="Continue"
        type="submit"
        disabled={!(address && phone)}
        mTop={theme.metrics.dimensions.xlg}
      />
    </BoxShadowStyled>
  )
}

export default React.memo(AddressForm)
