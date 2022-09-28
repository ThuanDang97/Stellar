import styled, { keyframes } from 'styled-components'

// Components
import {
  ButtonLinkStyled,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'

// Props type
import { AnimatedWrapperProps } from '@self-types/components/Animation.props'

// Utils
import { pxToRem } from '@utils/theme'

const slide = keyframes`
  to {
    transform: translateX(-100%)
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
}
`

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`

export const ContentWrapper = styled(ViewStyled)<AnimatedWrapperProps>`
  display: flex;
  width: 100%;

  & > ${ViewStyled} {
    flex: 0 0 100%;

    &:nth-child(1) {
      animation: ${fadeOut} 1s linear both
          ${({ delay }) => `${(delay ?? 0) + 11}s`},
        ${slide} 0s linear forwards ${({ delay }) => `${(delay ?? 0) + 12}s`};
    }

    &:nth-child(2) {
      animation: ${slide} 0s linear both
          ${({ delay }) => `${(delay ?? 0) + 12}s`},
        ${fadeIn} 1s ease-out both ${({ delay }) => `${(delay ?? 0) + 13}s`};

      & > ${TextStyled} {
        width: min(90%, ${pxToRem(600)});
      }

      & > ${ButtonLinkStyled} {
        animation: ${fadeIn} 1s ease both
          ${({ delay }) => `${(delay ?? 0) + 18}s`};
      }
    }
  }
`

export const TitleWrapperStyled = styled(ViewStyled)<AnimatedWrapperProps>`
  display: flex;
  width: min(90%, ${pxToRem(550)});
  margin-bottom: ${({ theme }) => pxToRem(theme.metrics.dimensions.lg)};

  overflow: hidden;

  ${TextStyled} {
    flex: 0 0 100%;

    &:nth-child(1) {
      animation: ${fadeOut} 0.5s linear both
          ${({ delay }) => `${(delay ?? 0) + 4.8}s`},
        ${slide} 0s linear forwards ${({ delay }) => `${(delay ?? 0) + 5.2}s`};
    }

    &:nth-child(2) {
      animation: ${slide} 0s linear both
          ${({ delay }) => `${(delay ?? 0) + 4.5}s`},
        ${fadeIn} 1s ease-out both ${({ delay }) => `${(delay ?? 0) + 4.8}s`};
    }
  }
`
