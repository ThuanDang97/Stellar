import styled from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import { TextProps } from '@self-types/components/Text.props'

export const TextStyled = styled.span<TextProps>`
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color || props.theme.colors.shark};
  font-size: ${(props) =>
    pxToRem(props.fontSize || props.theme.typography.fontSize.sm)};
  text-align: ${(props) => props.textAlign || 'center'};
  ${(props) => props.display && `display: ${props.display}`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
  line-height: ${(props) =>
    pxToRem(props.lineHeight || props.theme.typography.lineHeight.md)};
  letter-spacing: ${(props) =>
    pxToRem(props.letterSpacing || props.theme.typography.letterSpacing.sm)};

  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`};
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration}`}
  ${(props) => props.height && `height: ${pxToRem(props.height)}`};

  ${(props) => props.pTop && `padding-top: ${pxToRem(props.pTop)}`};
  ${(props) => props.pBottom && `padding-bottom: ${pxToRem(props.pBottom)}`};
  ${(props) => props.pLeft && `padding-left: ${pxToRem(props.pLeft)}`};
  ${(props) => props.pRight && `padding-right: ${pxToRem(props.pRight)}`};
  ${(props) => props.padding && `padding: ${pxToRem(props.padding)}`};

  ${(props) => props.mTop && `margin-top: ${pxToRem(props.mTop)}`};
  ${(props) => props.mBottom && `margin-bottom: ${pxToRem(props.mBottom)}`};
  ${(props) => props.mLeft && `margin-left: ${pxToRem(props.mLeft)}`};
  ${(props) => props.mRight && `margin-right: ${pxToRem(props.mRight)}`};

  ${(props) => props.flex && `flex: ${props.flex}`};

  ${(props) =>
    props.width &&
    `width: ${
      typeof props.width === 'string' ? props.width : pxToRem(props.width)
    }`};

  ${(props) =>
    props.maxWidth &&
    `max-width: ${
      typeof props.maxWidth === 'string'
        ? props.maxWidth
        : pxToRem(props.maxWidth)
    }`};
  ${(props) =>
    props.webkitLineClamp && `-webkit-line-clamp: ${props.webkitLineClamp}`};
  ${(props) =>
    props.webkitBoxOrient && `-webkit-box-orient: ${props.webkitBoxOrient}`};
  ${(props) => props.overflow && `overflow: ${props.overflow}`};
  ${(props) => props.whiteSpace && `white-space: ${props.whiteSpace}`};
  ${(props) =>
    props.left &&
    `left: ${
      typeof props.left === 'string' ? props.left : pxToRem(props.left)
    }`};
  ${(props) => props.position && `position: ${props.position}`};
  ${(props) => props.opacity && `opacity: ${props.opacity}`};
  ${(props) => props.textOverflow && `text-overflow: ${props.textOverflow}`};

  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    ${(props) =>
      props.paddingMobile && `padding: ${pxToRem(props.paddingMobile)}`};
    font-size: ${(props) => pxToRem(props.theme.typography.fontSize.base)};
    line-height: ${(props) => pxToRem(props.theme.typography.lineHeight.md)};
  }
`

export const TitleSecSionStyled = styled(TextStyled)`
  font-size: ${(props) =>
    pxToRem(props.fontSize || props.theme.typography.fontSize.common)};
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    font-size: ${(props) => pxToRem(props.theme.typography.fontSize.sm)};
  }
`
export const TextDescriptionStyled = styled(TextStyled)`
  font-size: ${(props) =>
    pxToRem(props.fontSize || props.theme.typography.fontSize.xss)};
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    font-size: ${(props) =>
      props.nameComponent === 'banner'
        ? pxToRem(props.theme.typography.fontSize.xss)
        : pxToRem(props.theme.typography.fontSize.xs)};
  }
`

export const TextErrorStyled = styled(TextStyled)`
  color: ${(props) => props.theme.colors.pomegranate};
  font-size: ${(props) =>
    pxToRem(props.fontSize || props.theme.typography.fontSize.xs)};
  text-align: ${(props) => props.textAlign || 'left'};
`

export const BadgeStyled = styled.p<TextProps>`
  font-family: AdobeCleanBold;
  font-size: ${(props) =>
    pxToRem(props.fontSize || props.theme.typography.fontSize.base)};
  line-height: ${(props) => pxToRem(props.theme.typography.lineHeight.sm)};
  letter-spacing: ${(props) =>
    pxToRem(props.theme.typography.letterSpacing.input)};
  color: ${(props) => props.color || props.theme.colors.pizzaz};
  text-transform: uppercase;
`

export const BadgeNotifStyled = styled(TextStyled)`
  display: flex;
  align-items: center;
  position: absolute;
  top: ${({ theme }) => pxToRem(-theme.metrics.dimensions.xs)};
  right: ${({ theme }) => pxToRem(-theme.metrics.dimensions.tiny)};

  width: ${({ theme }) => pxToRem(theme.metrics.dimensions.md)};
  height: ${({ theme }) => pxToRem(theme.metrics.dimensions.md)};
  padding: 0 ${pxToRem(6)};
  border-radius: ${({ theme }) => pxToRem(theme.metrics.borderRadius.default)};
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;

  font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.base)};
  background-color: ${({ theme }) => theme.colors.frenchRose};
  color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.metrics.zIndex.top};
`

export const BreakPointTextStyled = styled(TextStyled)`
  @media (min-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.lg)}) {
    max-width: 48%;
  }
  @media (min-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.md)}) {
    max-width: 48%;
  }
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.sm)}) {
    max-width: 97%;
  }
`
export const BreakPointTextStyledPageConnectBank = styled(TextStyled)`
  @media (min-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.sm)}) {
    max-width: 50%;
  }
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.sm)}) {
    max-width: 80%;
  }
`
