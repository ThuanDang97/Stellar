import styled, { keyframes } from 'styled-components'

// Components
import {
  EndBaseLineStyled,
  MiddleBaseLineStyled,
  StartBaseLineStyled,
} from '@components/styled-components/LineStyled'
import { ViewStyled } from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import { AnimatedWrapperProps } from '@self-types/components/Animation.props'

const fadeAndSlideIn = (x: number) => keyframes`
  0% {
    opacity: 0;
    transform: translateX(${x}px)
  }
  100% {
    opacity: 1;
    transform: translateX(0)
  }
`

const slideLeft = (left: number) => keyframes`
  100% {
    margin-left: -${pxToRem(left)};
  }
`

const changeBackground = (
  position: 'top' | 'bottom',
  color: string,
) => keyframes`
  100% {
    ${position === 'top' && `border-top-color: ${color}`};
    ${position === 'bottom' && `border-bottom-color: ${color}`};
    visibility: hidden;
  }
`

const showFullWidth = (width: number) => keyframes`
  0% {
    width: 0;
  };
  100% {
    width: ${width}%;
  }
`

const showBorderLeft = keyframes`
  0% {
    border-left-width: 0px;
  }
  100% {
    border-left-width: ${pxToRem(7)};
  }
`

const showLayer = keyframes`
  0% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
`

const reduceWidth = keyframes`
  0% {
    width: 20%;
  }
  100% {
    width: 12%;
  }
`

export const LineColorWrapper = styled(ViewStyled)<AnimatedWrapperProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  overflow: hidden;

  animation: ${reduceWidth} 0.3s both ${({ delay }) => `${(delay ?? 0) + 3}s`};
`

export const StartLineBillStyled = styled(StartBaseLineStyled)`
  &:nth-child(1) {
    position: absolute;
    height: ${({ theme }) => pxToRem(theme.metrics.borderWidth.xl)};
    background: ${({ theme }) => theme.colors.frenchRose};
    animation: ${showLayer} 0.1s both linear
      ${({ delay }) => `${(delay ?? 0) + 3.1}s`};
    z-index: 1;
  }

  &:nth-child(2) {
    animation: ${({ theme }) => fadeAndSlideIn(theme.metrics.dimensions.md)}
        0.3s both ${({ delay }) => `${delay}s`},
      ${({ theme }) => changeBackground('top', theme.colors.frenchRose)} 0.3s
        linear forwards ${({ nextDelay }) => `${nextDelay}s`};
  }
`

export const MiddleLineBillStyled = styled(MiddleBaseLineStyled)`
  margin-left: -${pxToRem(3)};

  animation: ${({ theme }) => fadeAndSlideIn(theme.metrics.dimensions.md)} 0.3s
      both ${({ delay }) => `${delay}s`},
    ${({ theme }) => slideLeft(theme.metrics.dimensions.base)} 0.3s linear
      forwards ${({ nextDelay }) => `${nextDelay}s`},
    ${({ theme }) => changeBackground('bottom', theme.colors.frenchRose)} 0.3s
      linear forwards ${({ nextDelay }) => `${nextDelay}s`};

  &::after {
    animation: ${({ theme }) =>
        changeBackground('top', theme.colors.frenchRose)}
      0.3s linear forwards ${({ nextDelay }) => `${nextDelay}s`};
  }
`

export const EndLineBillStyled = styled(EndBaseLineStyled)`
  position: relative;
  margin-left: -${pxToRem(9)};

  animation: ${({ width }) => typeof width === 'number' && showFullWidth(width)}
      1s both ease-out ${({ delay }) => `${delay}s`},
    ${showBorderLeft} 0s both ease-out ${({ delay }) => `${delay}s`};
  z-index: 1;
`

export const Shim = styled.div`
  width: ${({ theme }) => pxToRem(theme.metrics.dimensions.xs)};
  height: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)};
  transform: translateX(-7px) skew(-45deg);

  background-color: ${({ theme }) => theme.colors.bigStone};
`
