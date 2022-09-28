import React from 'react'
import { useTheme } from 'styled-components'

// Prop type
import { InputGroupPropType } from '@self-types/components/InputGroup.props'

// Components
import { ViewStyled } from '@components/styled-components'
import Input from '@components/Input'
import { Label } from '@components/InputGroup/InputGroupStyled'

const InputGroup = ({
  error,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  statusPassword,
  label,
  iconUrl,
  isLogin,
  isStraightLine,
  name,
  ...props
}: InputGroupPropType) => {
  const theme = useTheme()

  return (
    <ViewStyled {...props}>
      {label && <Label data-testid="label">{label}</Label>}
      <Input
        lineTop={theme.metrics.dimensions.lg}
        height={theme.metrics.dimensions.lg}
        pBottom={theme.metrics.dimensions.base}
        name={name}
        error={error}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        iconUrl={iconUrl}
        isStraightLine={isStraightLine}
        onBlur={onBlur}
        isLogin={isLogin}
        statusPassword={statusPassword}
        autocomplete="off"
      />
    </ViewStyled>
  )
}

export default React.memo(InputGroup)
