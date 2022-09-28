import styled from 'styled-components'

// Themes
import { theme } from '@themes/index'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import { TextProps } from '@self-types/components/Text.props'

// Components
import { TextStyled } from '../styled-components/TextStyled'

export const TitleStyled = styled(TextStyled)<TextProps>`
  color: ${(props) => props.color || theme.colors.white};
  font-size: ${(props) =>
    (props.fontSize && pxToRem(props.fontSize)) ||
    pxToRem(theme.typography.fontSize.xlg)};
  text-align: ${(props) => props.textAlign || 'center'};
  font-weight: ${(props) =>
    props.fontWeight || theme.typography.fontWeight.bold};
  line-height: ${(props) =>
    (props.lineHeight && pxToRem(props.lineHeight)) ||
    pxToRem(theme.typography.lineHeight.xl)};
  margin: ${(props) => (props.margin && pxToRem(props.margin)) || 0};
  @media (max-width: ${pxToRem(theme.metrics.breakPoints.sm)}) {
    font-size: ${pxToRem(theme.typography.fontSize.default)};
    line-height: ${pxToRem(theme.typography.lineHeight.xmd)};
  }
`

export const TitlePageStyled = styled(TitleStyled)<TextProps>`
  @media (max-width: ${pxToRem(theme.metrics.breakPoints.sm)}) {
    font-size: ${pxToRem(theme.typography.fontSize.default)};
    line-height: ${pxToRem(theme.typography.lineHeight.xmd)};
    padding-top: ${pxToRem(theme.metrics.dimensions.md)};
  }
`

export const TitlePopupStyled = styled(TitleStyled)<TextProps>`
  @media (max-width: ${pxToRem(theme.metrics.breakPoints.xs)}) {
    font-size: ${pxToRem(theme.typography.fontSize.md)};
    line-height: ${pxToRem(theme.typography.lineHeight.md)};
  }
`
