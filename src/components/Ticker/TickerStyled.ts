import styled, { keyframes } from 'styled-components'

// Components
import { ViewStyled } from '@components/styled-components'

// Props type
import {
  TickerColumnProps,
  TickerDigitProps,
} from '@self-types/components/Ticker.props'

// Utils
import { pxToRem } from '@utils/theme'

const slideFirst = (to: number) => keyframes`
  to {
    transform: translateY(${pxToRem(to)})
  }
`

const slideNext = (from: number, to: number) => keyframes`
  from {
    transform: translateY(${pxToRem(from)})
  }

  to {
    transform:  translateY(${pxToRem(to)})
  }
`

export const TickerWrapperStyled = styled(ViewStyled)`
  position: relative;
  display: flex;
  align-items: flex-start;

  gap: ${pxToRem(3)};
  line-height: inherit;
  overflow: hidden;

  color: ${({ color }) => color};
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    margin-top: -8px;
  }
`

export const TickerColumn = styled.div<TickerColumnProps>`
  animation-name: ${({ slideSecondNumber, firstPosition, secondPosition }) =>
    slideSecondNumber && secondPosition
      ? slideNext(firstPosition, secondPosition)
      : slideFirst(firstPosition)};

  animation-duration: ${({ duration }) => `${duration}s`};
  animation-fill-mode: both;
  animation-delay: ${({ slideSecondNumber, delay }) =>
    !slideSecondNumber ? (delay ? `${delay + 1}s` : '0s') : '1s'};
`

export const TickerColumnOne = styled(TickerColumn)`
  max-height: ${({ theme }) => pxToRem(theme.metrics.height.sm)};
  animation-timing-function: ${({ secondPosition }) =>
    !secondPosition ? 'linear' : 'cubic-bezier(.15,.68,.17,1.28)'};
`
export const TickerColumnTwo = styled(TickerColumn)`
  max-height: ${({ theme }) => pxToRem(theme.metrics.height.sm)};

  animation-timing-function: ${({ secondPosition }) =>
    !secondPosition ? 'linear' : 'cubic-bezier(0.6, 0.23, 0.53, 1.1)'};
`
export const TickerColumnThree = styled(TickerColumn)`
  max-height: ${({ theme }) => pxToRem(theme.metrics.height.sm)};

  animation-timing-function: ${({ slideSecondNumber, secondPosition }) =>
    !secondPosition
      ? 'linear'
      : !slideSecondNumber
      ? 'cubic-bezier(0.4, 0.47, 0.36, 1.15)'
      : 'cubic-bezier(0.6, 0.23, 0.53, 1.12)'};
`

export const TickerDigit = styled.h2<TickerDigitProps>`
  font-size: ${({ fontSize }) => `${pxToRem(fontSize)}`};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;
`

export const TickerSimulator = styled.div<TickerDigitProps>`
  position: absolute;
  top: -1000rem;

  font-size: ${({ fontSize }) => `${pxToRem(fontSize)}`};
`
