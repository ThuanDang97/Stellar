import styled, { keyframes } from 'styled-components'

// Components
import { TextStyled, ViewStyled } from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Themes
import Metrics from '@themes/Metrics'
import { TextProps } from '@self-types/components/Text.props'

const fadeIn = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`

const fadeOut = keyframes`
  to {
    opacity: 0
  }
`

const slide = (x: number) => keyframes`
to {
  transform: translateX(${x}%)
}
`

export const AnimatedLineStyled = styled(ViewStyled)`
  position: absolute;
  top: 25%;
  display: flex;

  width: min(90%, ${pxToRem(800)});
  min-height: ${pxToRem(300)};
  overflow: hidden;

  & > ${ViewStyled} {
    flex: 0 0 100%;

    &:nth-child(1) {
      animation: ${fadeIn} 1s linear both 12s, ${fadeOut} 1s ease forwards 23s,
        ${slide(-100)} 0s linear forwards 24s;
    }

    &:nth-child(2) {
      animation: ${slide(-100)} 0s linear forwards 23s,
        ${fadeIn} 1s linear both 24s, ${fadeOut} 1s ease forwards 36s,
        ${slide(-200)} 0s linear forwards 37s;
    }

    &:nth-child(3) {
      animation: ${slide(-200)} 0s linear forwards 37s;
    }
  }
`

export const ButtonWrapperStyled = styled(ViewStyled)`
  position: absolute;
  bottom: ${({ theme }) => pxToRem(theme.metrics.dimensions.xlg)};
  right: ${({ theme }) => pxToRem(theme.metrics.dimensions.xlg)};
  width: ${pxToRem(150)};
  animation: ${fadeIn} 0.3s linear both 12s, ${fadeOut} 1s ease forwards 48s;

  @media (max-width: ${pxToRem(Metrics.breakPoints.md)}) {
    bottom: ${({ theme }) => pxToRem(theme.metrics.dimensions.xmd)};
    right: ${({ theme }) => pxToRem(theme.metrics.dimensions.base)};
    width: ${pxToRem(110)};
    height: ${pxToRem(45)};
  }
`

export const TitleLandingPageStyled = styled(TextStyled)<TextProps>`
  font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.xlg)};
  line-height: ${({ theme }) => pxToRem(theme.typography.lineHeight.lg)};

  @media (max-width: ${pxToRem(Metrics.breakPoints.xs)}) {
    font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.lg)};
    line-height: ${pxToRem(30)};
  }
`
