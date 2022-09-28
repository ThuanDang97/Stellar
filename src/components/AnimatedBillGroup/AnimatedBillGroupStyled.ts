import styled, { keyframes } from 'styled-components'

// Components
import { TextStyled, ViewStyled } from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import { AnimatedWrapperProps } from '@self-types/components/Animation.props'

const slide = (x: number) => keyframes`
to {
  transform: translateX(${x}%)
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

const increaseWidth = keyframes`
from {
  width: 70%
}
to {
  width: 85%
}
`

// Title
export const TitleWrapperStyled = styled(ViewStyled)<AnimatedWrapperProps>`
  display: flex;
  min-height: ${pxToRem(140)};
  margin-bottom: ${({ theme }) => pxToRem(theme.metrics.dimensions.xl)};
  overflow: hidden;

  animation: ${increaseWidth} 0s linear both
    ${({ delay }) => `${(delay ?? 0) + 8.99}s`};

  & > ${TextStyled} {
    flex: 0 0 100%;

    &:nth-child(1) {
      animation: ${fadeOut} 0.5s linear both
          ${({ delay }) => `${(delay ?? 0) + 4}s`},
        ${slide(-100)} 0s linear forwards
          ${({ delay }) => `${(delay ?? 0) + 4.5}s`};
    }

    &:nth-child(2) {
      animation: ${slide(-100)} 0s linear forwards
          ${({ delay }) => `${(delay ?? 0) + 3.75}s`},
        ${fadeIn} 0.5s ease both ${({ delay }) => `${(delay ?? 0) + 4}s`},
        ${fadeOut} 0s linear forwards
          ${({ delay }) => `${(delay ?? 0) + 8.99}s`},
        ${slide(-200)} 0s linear forwards
          ${({ delay }) => `${(delay ?? 0) + 9}s`};
    }

    &:nth-child(3) {
      animation: ${slide(-200)} 0s linear forwards
          ${({ delay }) => `${(delay ?? 0) + 8.75}s`},
        ${fadeIn} 1s ease-in-out both ${({ delay }) => `${(delay ?? 0) + 9}s`};
    }
  }
`

// Labels
export const LabelWrapperStyled = styled(ViewStyled)<AnimatedWrapperProps>`
  position: relative;
  display: flex;

  width: ${({ theme }) => pxToRem(theme.metrics.width.xl)};
  height: ${({ theme }) => pxToRem(theme.metrics.height.base)};
  margin-top: ${({ theme }) => pxToRem(theme.metrics.dimensions.lg)};
  overflow: hidden;

  ${TextStyled} {
    --cubic: cubic-bezier(0.23, 1.06, 0.08, 1.03);

    flex: 0 0 100%;

    &:nth-child(1) {
      transform: translateX(100%);

      animation: ${slide(0)} 0.3s var(--cubic) both
          ${({ delay }) => `${(delay ?? 0) + 0.5}s`},
        ${fadeIn} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 0.4}s`},
        ${slide(-100)} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 1}s`},
        ${fadeOut} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 0.9}s`};
    }

    &:nth-child(2) {
      animation: ${slide(-100)} 0.3s var(--cubic) both
          ${({ delay }) => `${(delay ?? 0) + 1}s`},
        ${fadeIn} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 0.9}s`},
        ${slide(-200)} 0.3s linear both
          ${({ delay }) => `${(delay ?? 0) + 1.5}s`},
        ${fadeOut} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 1.4}s`};
    }

    &:nth-child(3) {
      animation: ${slide(-200)} 0.3s var(--cubic) both
          ${({ delay }) => `${(delay ?? 0) + 1.5}s`},
        ${fadeIn} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 1.4}s`},
        ${slide(-300)} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 2}s`},
        ${fadeOut} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 1.9}s`};
    }

    &:nth-child(4) {
      animation: ${slide(-300)} 0.3s var(--cubic) both
          ${({ delay }) => `${(delay ?? 0) + 2}s`},
        ${fadeIn} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 1.9}s`},
        ${slide(-400)} 0.3s linear both
          ${({ delay }) => `${(delay ?? 0) + 2.5}s`},
        ${fadeOut} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 2.4}s`};
    }

    &:nth-child(5) {
      animation: ${slide(-400)} 0.3s var(--cubic) both
          ${({ delay }) => `${(delay ?? 0) + 2.5}s`},
        ${fadeIn} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 2.4}s`},
        ${slide(-500)} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 3}s`},
        ${fadeOut} 0.3s linear both ${({ delay }) => `${(delay ?? 0) + 2.9}s`};
    }
  }
`
