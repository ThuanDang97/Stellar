import React, { memo } from 'react'

// Components
import { TitleStyled } from '@components/Title/TitleStyled'

// Props type
import { TitleProps } from '@self-types/components/Title.props'

const Title = ({
  color,
  fontSize,
  fontWeight,
  title,
  lineHeight,
  headingLevel = 'h1',
  titleHover,
  ...props
}: TitleProps) => (
  <TitleStyled
    as={headingLevel}
    color={color}
    fontSize={fontSize}
    fontWeight={fontWeight}
    lineHeight={lineHeight}
    title={titleHover}
    {...props}
  >
    {title}
  </TitleStyled>
)

export default memo(Title)
