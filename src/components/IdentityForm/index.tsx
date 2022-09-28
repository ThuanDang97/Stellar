import { memo } from 'react'

// Themes
import { useTheme } from 'styled-components'

// Props types
import { IdentityFormProps } from '@self-types/components/IdentityForm.props'

// Components
import {
  BoxShadowStyled,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'
import Input from '@components/Input'
import Button from '@components/Button'
import Picker from '@components/Picker'
import ErrorMessage from '@components/ErrorMessage'

const IdentityForm = ({
  onSubmit,
  onChangeInput,
  onChangeDayOfBirth,
  isEnableButton,
  firstName,
  lastName,
  error,
}: IdentityFormProps) => {
  const theme = useTheme()

  return (
    <BoxShadowStyled
      as="form"
      noValidate
      onSubmit={onSubmit}
      padding={theme.metrics.dimensions.lg}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="initial"
    >
      <ViewStyled
        display="flex"
        gap={theme.metrics.dimensions.md}
        pBottom={theme.metrics.dimensions.base}
      >
        <Input
          name="firstName"
          iconUrl="/icons/person"
          onChange={onChangeInput}
          placeholder="First Name"
          type="text"
          value={firstName}
        />
        <Input
          name="lastName"
          onChange={onChangeInput}
          placeholder="Last Name"
          type="text"
          value={lastName}
          isStraightLine
        />
      </ViewStyled>
      <TextStyled
        fontSize={theme.typography.fontSize.xss}
        lineHeight={theme.typography.fontSize.xss}
        color={theme.colors.shark}
        textAlign="left"
        mBottom={theme.metrics.dimensions.xs}
      >
        DOB
      </TextStyled>
      <Picker
        lineColor={error && theme.colors.pomegranate}
        onChange={onChangeDayOfBirth}
        isMonthDropdown
        isYearDropdown
        isMaxDate
      />
      {error && (
        <ErrorMessage mTop={theme.metrics.dimensions.base} error={error} />
      )}
      <Button
        mTop={theme.metrics.dimensions.xxl}
        type="submit"
        title="Confirm"
        variant="colorDefault"
        disabled={!isEnableButton}
      />
    </BoxShadowStyled>
  )
}

export default memo(IdentityForm)
