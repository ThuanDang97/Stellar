import styled, { keyframes } from 'styled-components'

// Components
import { ViewStyled } from '@components/styled-components'

// Props type
import { ViewProps } from '@self-types/components/View.props'

// Utils
import { pxToRem } from '@utils/theme'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingBackdrop = styled(ViewStyled)`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: ${({ theme }) => pxToRem(theme.metrics.dimensions.xxl)};
  background-color: ${({ theme }) => theme.colors.backdrop};
  backdrop-filter: blur(${pxToRem(3)});
  z-index: ${({ theme }) => theme.metrics.zIndex.top};
`

export const LoadingIndicatorStyled = styled(ViewStyled)<ViewProps>`
  display: inline-block;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: ${({ theme }) =>
    `${pxToRem(theme.metrics.borderWidth.base)} solid
      ${theme.colors.caribbeanGreen}`};
  border-right: ${({ theme }) =>
    `${pxToRem(theme.metrics.borderWidth.base)} solid
    ${theme.colors.caribbeanGreen}`};
  border-bottom: ${({ theme }) =>
    `${pxToRem(theme.metrics.borderWidth.base)} solid
    ${theme.colors.caribbeanGreen}`};
  border-left: ${({ theme }) =>
    `${pxToRem(theme.metrics.dimensions.xs)} solid
    ${theme.colors.caribbeanGreen}`};
  background: transparent;
  width: ${pxToRem(24)};
  height: ${pxToRem(24)};
  border-radius: ${({ theme }) => `${theme.metrics.borderRadius.circle}%`};
`
