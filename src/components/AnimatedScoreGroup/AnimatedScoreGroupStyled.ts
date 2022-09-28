import styled, { keyframes } from 'styled-components'

// Components
import { TextStyled, ViewStyled } from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import { AnimatedWrapperProps } from '@self-types/components/Animation.props'

// Theme
import Colors from '@themes/Colors'
import { TitleStyled } from '@components/Title/TitleStyled'
import { TextProps } from '@self-types/components/Text.props'

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

const fadeAndSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(${pxToRem(20)})
  }
  60%, 100% {
    opacity: 1;
    transform: translateX(0)
  }
`

const changeTextColor = keyframes`
to {
  color: ${Colors.caribbeanGreen}
}
`

// Title
export const TitleWrapperStyled = styled(ViewStyled)<AnimatedWrapperProps>`
  display: flex;
  width: 80%;
  margin-left: 10%;
  margin-bottom: ${({ theme }) => pxToRem(theme.metrics.dimensions.xxl)};

  overflow: hidden;

  ${TextStyled} {
    flex: 0 0 100%;

    &:nth-child(1) {
      animation: ${fadeOut} 0.4s linear both
          ${({ delay }) => `${(delay ?? 0) + 7.8}s`},
        ${slide} 0s linear forwards ${({ delay }) => `${(delay ?? 0) + 8.2}s`};
    }

    &:nth-child(2) {
      animation: ${slide} 0s linear both
          ${({ delay }) => `${(delay ?? 0) + 7.75}s`},
        ${fadeIn} 1s ease-out both ${({ delay }) => `${(delay ?? 0) + 7.8}s`};
    }
  }
`

// Labels
export const LabelWrapperStyled = styled(ViewStyled)<AnimatedWrapperProps>`
  display: flex;
  margin-top: ${({ theme }) => pxToRem(theme.metrics.dimensions.lg)};
  gap: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)};

  /* Set color of plus icons always white */
  & > [data-icon='true'] {
    color: ${({ theme }) => theme.colors.white};
  }

  ${TextStyled} {
    &:nth-child(1) {
      animation: ${fadeAndSlideIn} 0.6s both
          ${({ delay }) => `${(delay ?? 0) + 0.5}s`},
        ${changeTextColor} 1s forwards
          ${({ delay }) => `${(delay ?? 0) + 7.8}s`};
    }

    &:nth-child(2) {
      animation: ${fadeAndSlideIn} 0.6s both
        ${({ delay }) => `${(delay ?? 0) + 1.3}s`};
    }
    &:nth-child(3) {
      animation: ${fadeAndSlideIn} 0.6s both
          ${({ delay }) => `${(delay ?? 0) + 1.3}s`},
        ${changeTextColor} 1s forwards
          ${({ delay }) => `${(delay ?? 0) + 7.8}s`};
    }

    &:nth-child(4) {
      animation: ${fadeAndSlideIn} 0.6s both
        ${({ delay }) => `${(delay ?? 0) + 2.1}s`};
    }
    &:nth-child(5) {
      animation: ${fadeAndSlideIn} 0.6s both
          ${({ delay }) => `${(delay ?? 0) + 2.1}s`},
        ${changeTextColor} 1s forwards
          ${({ delay }) => `${(delay ?? 0) + 7.8}s`};
    }

    &:nth-child(6),
    &:nth-child(7) {
      animation: ${fadeAndSlideIn} 0.6s both
        ${({ delay }) => `${(delay ?? 0) + 2.9}s`};
    }

    &:nth-child(8),
    &:nth-child(9) {
      animation: ${fadeAndSlideIn} 0.6s both
        ${({ delay }) => `${(delay ?? 0) + 3.7}s`};
    }
  }
`

export const ScoreLabelStyled = styled(TitleStyled)<TextProps>`
  font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.sm)};
  line-height: ${({ theme }) => pxToRem(theme.typography.lineHeight.md)};

  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.base)};
    line-height: ${({ theme }) => pxToRem(theme.typography.lineHeight.md)};
  }
`
