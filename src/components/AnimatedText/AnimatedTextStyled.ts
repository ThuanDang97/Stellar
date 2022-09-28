import styled, { keyframes } from 'styled-components'

// Components
import { TextStyled, ViewStyled } from '@components/styled-components'

// Props type
import { TextAnimatedProps } from '@self-types/components/TextAnimated.props'

// Utils
import { pxToRem } from '@utils/theme'
import { ViewProps } from '@self-types/components/View.props'

const fadeInTop = keyframes`
    from {
      opacity: 0;
      transform: translate(0);
    }
    to {
      opacity: 1;
      transform: translateY(${pxToRem(-150)});

    }
`
const fadeInBottom = keyframes`
    from {
      opacity: 0;
      transform: translateY(${pxToRem(-100)});
    }
    to {
      opacity: 1;
      transform: translateY(${pxToRem(30)});
    }
`

const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(${pxToRem(-70)});
    }
    to {
      opacity: 1;
      transform: translateY(${pxToRem(-70)});

    }
`

const fadeOut = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`

const slideUpImage = keyframes`
    from {
      transform: translateY(-35vh);
    }
    to {
      transform: translateY(-55vh);
    }
`

const fadeInScore = keyframes`
    0%, 80% { opacity: 0;}
    100% { opacity: 1; }
`
export const TextFadeOutStyled = styled(ViewStyled)<TextAnimatedProps>`
  animation: ${fadeOut}
    ${(props) => (props.duration ? `${props.duration}s` : '3.5s')} forwards;
  animation-delay: ${(props) => (props.delay ? `${props.delay}s` : '0s')};
`

export const TextFadeInStyled = styled(ViewStyled)<TextAnimatedProps>`
  display: flex;
  opacity: 0;
  animation: ${fadeIn} 3s forwards
    ${(props) => (props.delay ? `${props.delay}s` : '0s')};
`

export const TextFadeInTopStyled = styled(ViewStyled)<TextAnimatedProps>`
  opacity: 0;
  animation: ${fadeInTop} 2s forwards
    ${(props) => (props.delay ? `${props.delay}s` : '0s')};
`

export const TextFadeInBottomStyled = styled(ViewStyled)<TextAnimatedProps>`
  opacity: 0;
  animation: ${fadeInBottom} 2s forwards
    ${(props) => (props.delay ? `${props.delay}s` : '0s')};
`

export const ImageSlideInStyled = styled(ViewStyled)<TextAnimatedProps>`
  position: relative;
  bottom: -100vh;

  width: min(90%, ${pxToRem(800)});
  height: ${pxToRem(400)};

  filter: brightness(1) drop-shadow(10px 20px 50px rgba(255, 255, 255, 1))
    opacity(0.6);
  animation: ${slideUpImage} 2s both
    ${(props) => (props.delay ? `${props.delay}s` : '0s')};
`
export const TextFadeInScoreStyled = styled(TextStyled)<TextAnimatedProps>`
  opacity: 1;
  animation: ${fadeInScore}
    ${(props) => (props.duration ? `${props.duration}s` : '3.5s')} both linear
    0.5s;
`

export const LogoResponsiveLandingPage = styled(ViewStyled)<ViewProps>`
  width: ${pxToRem(405)};
  height: ${pxToRem(75)};
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    width: ${pxToRem(350)};
    height: ${pxToRem(65)};
  }
`
