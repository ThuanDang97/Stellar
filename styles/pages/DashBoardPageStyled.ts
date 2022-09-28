import styled, { keyframes, css } from 'styled-components'

// Components
import { ViewStyled } from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import { TextAnimatedProps } from '@self-types/components/TextAnimated.props'

// Themes
import Metrics from '@themes/Metrics'

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(${pxToRem(-50)});
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
`

const fadeInTop = keyframes`
    from {
      opacity: 0;
      transform: translateY(${pxToRem(50)});
    }
    to {
      opacity: 1;
      transform: translateY(${pxToRem(0)});
    }
`

const slideInTop = keyframes`
    from {
      transform: translateY(${pxToRem(50)});
    }
    to {
      transform: translateY(${pxToRem(0)});
    }
`

const holdOnTop = keyframes`
    0% {
      transform: translate(0, ${pxToRem(-170)});
    }
    100% {
      transform: translate(0, ${pxToRem(-170)});
    }
`

const fadeInBottom = keyframes`
    0% {
      transform: translate(0, ${pxToRem(-170)});
    }
    100% {
      transform: translate(0, -0);
    }
`

const buttonFadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`

export const AnimatedButtonUnlock = styled(ViewStyled)<TextAnimatedProps>`
  animation: ${buttonFadeIn} 0.1s both linear 2s;
`

export const WrapperMainContent = styled(ViewStyled)`
  @media (min-width: ${pxToRem(Metrics.breakPoints.xxl)}) {
    max-width: ${pxToRem(Metrics.breakPoints.xxl)};
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.xxl)}) {
    max-width: ${pxToRem(Metrics.breakPoints.xl)};
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.xl)}) {
    max-width: ${pxToRem(Metrics.breakPoints.lg)};
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.lg)}) {
    max-width: ${pxToRem(Metrics.breakPoints.md)};
    flex-direction: column;
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.md)}) {
    max-width: ${pxToRem(Metrics.breakPoints.sm)};
  }
`
export const WrapperTableContent = styled(ViewStyled)`
  width: 74%;
  @media (max-width: ${pxToRem(Metrics.breakPoints.xl)}) {
    width: 64%;
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.lg)}) {
    width: ${Metrics.width.full};
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.xs)}) {
    margin-top: ${pxToRem(Metrics.dimensions.xmd)};
  }
`

export const WrapperPointContent = styled(ViewStyled)`
  @media (min-width: ${pxToRem(Metrics.breakPoints.lg)}) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.lg)}) {
    display: none;
  }
`

export const AnimatedBanner = styled(ViewStyled)<TextAnimatedProps>`
  ${(props) =>
    props.isLocked
      ? css`
          animation: ${fadeIn} 0.8s forwards 0s;
        `
      : css`
          animation: ${fadeInTop} 1.5s linear both
            ${props.delay ? `${props.delay}s` : '0s'};
        `}
`

export const AnimatedPointContent = styled(ViewStyled)<TextAnimatedProps>`
  ${(props) =>
    props.isLocked
      ? css`
          animation: ${fadeIn} 0.5s linear both 1s;
        `
      : css`
          animation: ${slideInTop} 0.3s linear both 0.3s;
        `}

  display: flex;
  max-width: ${Metrics.width.full};
  flex-direction: column;
  gap: ${pxToRem(Metrics.dimensions.md)};
  align-items: flex-start;

  @media (max-width: ${pxToRem(Metrics.breakPoints.lg)}) {
    flex-direction: row;
    justify-content: space-between;

    ${(props) =>
      props.isLocked
        ? css`
            animation: ${fadeIn} 0.5s linear both 1s;
          `
        : css`
            ${props.isLinkedBills
              ? css`
                  animation: ${holdOnTop} 3s both 0s,
                    ${fadeInBottom} 2.5s both
                      ${props.delay ? `${props.delay}s` : '0s'};
                `
              : css`
                  animation: ${slideInTop} 0.3s linear both 0.3s;
                `}
          `}
  }

  @media (max-width: ${pxToRem(Metrics.breakPoints.md)}) {
    flex-direction: column;
    gap: ${pxToRem(Metrics.dimensions.xmd)};
    align-items: center;
    min-width: ${Metrics.width.full};
  }
`

export const AnimatedLayoutMain = styled(ViewStyled)<TextAnimatedProps>`
  ${(props) =>
    props.isLocked
      ? css`
          animation: ${fadeIn} 0.5s linear both 1s;
        `
      : css`
          ${props.isLinkedBills
            ? css`
                animation: none;
              `
            : css`
                animation: ${holdOnTop} 3s both 0s,
                  ${fadeInBottom} 1.5s both
                    ${props.delay ? `${props.delay}s` : '0s'};
              `}
        `}
`

export const WrapperPointContentMobile = styled(ViewStyled)`
  @media (min-width: ${pxToRem(Metrics.breakPoints.lg)}) {
    display: none;
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.lg)}) {
    min-width: ${Metrics.width.full};
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.md)}) {
    flex-direction: column;
    gap: ${pxToRem(Metrics.dimensions.xmd)};
    align-items: center;
  }
`

export const SubBackgroundHeader = styled(ViewStyled)`
  @media (max-width: ${pxToRem(Metrics.breakPoints.xs)}) {
    display: none;
  }
`
