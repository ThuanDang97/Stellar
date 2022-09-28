import styled from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Styles
import { TooltipStyledProps } from '@self-types/components/Tooltip.props'

export const TooltipStyled = styled.div<TooltipStyledProps>`
  position: absolute;
  top: -5px;
  left: 50%;
  width: max-content;
  max-width: ${pxToRem(230)};
  padding: ${({ theme }) => pxToRem(theme.metrics.dimensions.xs)};
  border-radius: ${({ theme }) => pxToRem(theme.metrics.borderRadius.default)};

  transform: translateX(-50%) translateY(calc(-100% - 5px));

  color: ${({ theme, titleColor }) => titleColor || theme.colors.white};
  font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.xxs)};
  text-align: center;
  background: ${({ theme, bgColor }) => bgColor || theme.colors.black};

  // Tooltip arrow
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;

    transform: translateX(-50%);

    border: ${({ theme }) => pxToRem(theme.metrics.borderWidth.md)} solid
      transparent;
    border-top-color: ${({ theme, bgColor }) => bgColor || theme.colors.black};
  }
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    max-width: ${pxToRem(185)};
  }
`
