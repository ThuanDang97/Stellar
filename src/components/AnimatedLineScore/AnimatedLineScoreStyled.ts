import styled, { keyframes } from 'styled-components'

// Components
import {
  EndBaseLineStyled,
  MiddleBaseLineStyled,
  StartBaseLineStyled,
} from '@components/styled-components/LineStyled'

// Utils
import { pxToRem } from '@utils/theme'

const fadeIn = keyframes`
  0% {
    opacity: 0.3;
  }
  30%, 100% {
    opacity: 1;
  }
`

const showLayer = (width: string, left: number) => keyframes`
  0% {
    width: 0;
    left: -${pxToRem(left)};
  }
  100% {
    width: calc(${width});
    left: 0
  }
`

export const StartLineScoreStyled = styled(StartBaseLineStyled)`
  animation: ${fadeIn} 0.6s linear ${({ delay }) => `${delay}s`} both;
`
export const MiddleLineScoreStyled = styled(MiddleBaseLineStyled)`
  margin-left: -${({ theme }) => pxToRem(theme.metrics.borderWidth.xl)};

  animation: ${fadeIn} 0.6s linear ${({ delay }) => `${delay}s`} both;

  &:nth-child(4) {
    position: relative;
    z-index: 10;
  }
`
export const EndLineScoreStyled = styled(EndBaseLineStyled)`
  position: relative;
  margin-left: -${({ theme }) => pxToRem(theme.metrics.borderWidth.xl)};

  animation: ${fadeIn} 0.6s linear ${({ delay }) => `${delay}s`} both;
  z-index: 10;
`

export const LayerLineStyled = styled(StartBaseLineStyled)`
  position: absolute;
  width: ${({ width }) => `calc(${width})`};
  height: ${({ theme }) => pxToRem(theme.metrics.borderWidth.xl)};

  border-top-color: ${({ theme }) => theme.colors.caribbeanGreen};
  border-right-color: ${({ theme }) => theme.colors.caribbeanGreen};
  background: ${({ theme }) => theme.colors.caribbeanGreen};

  animation: ${({ width, theme }) =>
      typeof width === 'string' &&
      showLayer(width, theme.metrics.borderWidth.xl)}
    1s ease-out both ${({ delay }) => `${(delay ?? 0) + 7.8}s`};
  z-index: 1;
`

export const Shim = styled.div<{ left: string }>`
  position: absolute;
  left: ${({ left }) => `calc(${left})`};

  width: ${({ theme }) => pxToRem(theme.metrics.dimensions.xs)};
  height: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)};
  transform: translateX(-7px) skew(-45deg);

  background-color: ${({ theme }) => theme.colors.bigStone};
  z-index: 100;
`
