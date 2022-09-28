import styled from 'styled-components'

// Props type
import { SelectToggle } from '@self-types/components/Select.props'
import { InputWrapperProps } from '@self-types/components/Input.props'

// Components
import { ViewStyled } from '@components/styled-components'

// Themes
import Metrics from '@themes/Metrics'

// Utils
import { pxToRem } from '@utils/theme'

export const SelectIconStyled = styled.span<SelectToggle>`
  border-style: solid;
  border-color: ${(props) =>
    props.borderColor ? props.borderColor : props.theme.colors.cello};
  border-width: 0 ${pxToRem(Metrics.borderWidth.base)}
    ${pxToRem(Metrics.borderWidth.base)} 0;
  padding: ${pxToRem(3)};
  transform: ${(props) =>
    props.isEnable ? `rotate(225deg)` : `rotate(45deg)`};
  ${(props) => props.mBottom && `margin-bottom: ${pxToRem(props.mBottom)}`};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
`

export const WrapperSelectStyled = styled(ViewStyled)<InputWrapperProps>`
  display: flex;
  width: ${({ theme }) => theme.metrics.width.full};
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
