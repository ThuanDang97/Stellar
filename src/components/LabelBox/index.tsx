import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Props type
import { LabelBoxProps } from '@self-types/components/LabelBox.props'

// Components
import { ViewStyled, TextStyled } from '@components/styled-components'

const LabelBox = ({
  title,
  isActive = false,
  handleOnClick,
  padding,
}: LabelBoxProps) => {
  const theme = useTheme()

  return (
    <ViewStyled
      onClick={handleOnClick}
      data-testid="label-box"
      bgColor={isActive ? theme.colors.frenchRose : theme.colors.silverLight}
      padding={padding}
      textAlign="center"
      cursor="pointer"
    >
      <TextStyled
        fontSize={theme.typography.fontSize.base}
        color={isActive ? theme.colors.white : theme.colors.shark}
      >
        {title}
      </TextStyled>
    </ViewStyled>
  )
}

export default memo(LabelBox)
