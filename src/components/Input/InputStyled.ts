import styled from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import { ViewStyled } from '@components/styled-components/ViewStyled'
import { InputStyled } from '@components/styled-components/InputStyled'

// Themes
import { lineStatus } from '@themes/LineStatus'

// Props types
import {
  InputWrapperProps,
  InputLineBottomProps,
} from '@self-types/components/Input.props'

export const InputItemStyled = styled(InputStyled)`
  border: none;
  width: 100%;
  background-color: transparent;
  font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.base)};
  color: ${(props) =>
    props.readOnly ? props.theme.colors.spanishGray : props.theme.colors.shark};
`

export const WrapperInputStyled = styled(ViewStyled)<InputWrapperProps>`
  display: flex;
  width: 100%;
  position: relative;
  border-bottom: ${({ sizeLine, lineColor, theme }) =>
    `${pxToRem(sizeLine)} solid ${lineColor || theme.colors.cello}`};

  &::after {
    content: '';
    width: 15%;
    min-width: ${pxToRem(55)};
    border-top: ${({ theme }) => pxToRem(theme.metrics.borderWidth.md)} solid
      ${({ color, theme }) => color || theme.colors.cello};
    border-right: ${({ theme }) => pxToRem(theme.metrics.borderWidth.md)} solid
      transparent;
    position: absolute;
    top: ${(props) => (props.lineTop ? pxToRem(props.lineTop) : pxToRem(41))};
    display: ${({ display }: { display?: string | false }) =>
      display || 'block'};
  }
`

export const WrapperIconStyled = styled(ViewStyled)`
  width: ${({ theme, width }) =>
    width && typeof width === 'string'
      ? width
      : pxToRem(Number(width) || theme.metrics.dimensions.md)};
  height: ${({ theme, height }) =>
    height ? pxToRem(height) : pxToRem(theme.metrics.dimensions.md)};
  position: relative;
  margin-top: ${(props) => (props.mTop ? pxToRem(props.mTop) : 0)};
  margin-right: ${(props) =>
    props.mRight
      ? pxToRem(props.mRight)
      : pxToRem(props.theme.metrics.dimensions.xs)};
  &.disable-item {
    pointer-events: none;
  }
`

export const PasswordStrength = styled.span`
  display: ${({ display }: { display?: string }) => display || 'none'};
  color: ${({ color, theme }) => color || theme.colors.cello};
  font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.base)};
`

export const GroupLine = styled.div`
  display: flex;
  span {
    border-top: transparent;
  }
`

export const LineBottomInputStyled = styled.span<InputLineBottomProps>`
  width: 40%;
  clip-path: ${(props) => (props.level ? lineStatus[props.level] : '')};
  border-bottom: ${(props) =>
    `${pxToRem(props.theme.metrics.dimensions.xs)} solid ${
      props.borderColor || props.theme.colors.cello
    }`};
  ${(props) => props.mLeft && `margin-left: ${pxToRem(props.mLeft)}`};
  ${(props) => props.mRight && `margin-right: ${pxToRem(props.mRight)}`};
`
