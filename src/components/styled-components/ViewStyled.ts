import styled, { keyframes } from 'styled-components'

// Props type
import {
  ViewProps,
  ShadowTypeProps,
  DividerProps,
  BackDropProps,
} from '@self-types/components/View.props'

// Themes
import Metrics from '@themes/Metrics'

// Utils
import { pxToRem } from '@utils/theme'

// Constants
import { MENU_STATUS } from '@constants/variables'

export const ViewStyled = styled.div<ViewProps>`
  ${(props) => props.position && `position: ${props.position}`};
  ${(props) => props.bgColor && `background-color: ${props.bgColor}`};
  ${(props) =>
    props.width &&
    `width: ${
      typeof props.width === 'string' ? props.width : pxToRem(props.width)
    }`};
  ${(props) => props.height && `height: ${pxToRem(props.height)}`};
  ${(props) =>
    props.minWidth &&
    `min-width: ${
      typeof props.minWidth === 'string'
        ? props.minWidth
        : pxToRem(props.minWidth)
    }`};
  ${(props) =>
    props.maxWidth &&
    `max-width: ${
      typeof props.maxWidth === 'string'
        ? props.maxWidth
        : pxToRem(props.maxWidth)
    }`};
  ${(props) =>
    props.minHeight &&
    `min-height: ${
      typeof props.minHeight === 'string'
        ? props.minHeight
        : pxToRem(props.minHeight)
    }`};
  ${(props) =>
    props.maxHeight &&
    `max-height: ${
      typeof props.maxHeight === 'string'
        ? props.maxHeight
        : pxToRem(props.maxHeight)
    }`};
  ${(props) =>
    props.padding &&
    `padding: ${
      typeof props.padding === 'string' ? props.padding : pxToRem(props.padding)
    }`};
  ${(props) => props.pTop && `padding-top: ${pxToRem(props.pTop)}`};
  ${(props) => props.pBottom && `padding-bottom: ${pxToRem(props.pBottom)}`};
  ${(props) => props.pLeft && `padding-left: ${pxToRem(props.pLeft)}`};
  ${(props) => props.pRight && `padding-right: ${pxToRem(props.pRight)}`};

  ${(props) =>
    props.margin &&
    `margin: ${
      typeof props.margin === 'string' ? props.margin : pxToRem(props.margin)
    }`};
  ${(props) => props.mTop && `margin-top: ${pxToRem(props.mTop)}`};
  ${(props) => props.mBottom && `margin-bottom: ${pxToRem(props.mBottom)}`};
  ${(props) => props.mLeft && `margin-left: ${pxToRem(props.mLeft)}`};
  ${(props) => props.mRight && `margin-right: ${pxToRem(props.mRight)}`};

  ${(props) => props.top && `top: ${pxToRem(props.top)}`};
  ${(props) => props.bottom && `bottom: ${pxToRem(props.bottom)}`};
  ${(props) => props.left && `left: ${pxToRem(props.left)}`};
  ${(props) => props.right && `right: ${pxToRem(props.right)}`};

  ${(props) => props.display && `display: ${props.display}`};
  ${(props) => props.flex && `flex: ${props.flex}`};
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection}`};
  ${(props) => props.gap && `gap: ${pxToRem(props.gap)}`};
  align-items: ${(props) => props.alignItems || 'center'};
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf};`}
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent};`};
  ${(props) =>
    props.flexDirection && `flex-direction: ${props.flexDirection};`};
  ${(props) => props.flexWrap && `flex-wrap: ${props.flexWrap};`};
  ${(props) =>
    props.borderRadius && `border-radius: ${pxToRem(props.borderRadius)}`};
  ${(props) => props.cursor && `cursor: ${props.cursor};`}
  ${(props) => props.border && `border: ${props.border};`};
  ${(props) => props.textAlign && `text-align: ${props.textAlign};`};
  ${(props) => props.overflow && `overflow: ${props.overflow};`};
  ${(props) => props.zIndex && `z-index: ${props.zIndex};`};
  ${(props) => props.lineHeight && pxToRem(props.lineHeight)};
  ${(props) => props.columnGap && `column-gap: ${pxToRem(props.columnGap)};`}
  ${(props) =>
    props.borderBottom &&
    `border-bottom: ${
      typeof props.borderBottom === 'string'
        ? props.borderBottom
        : `${pxToRem(props.borderBottom)} solid ${props.theme.colors.silver}`
    };`};
  ${(props) =>
    props.borderTop &&
    `border-top: ${
      typeof props.borderTop === 'string'
        ? props.borderTop
        : `${pxToRem(props.borderTop)} solid ${props.theme.colors.silver}`
    };`};
  &.disable {
    background-color: ${({ theme }) => theme.colors.silver};
    opacity: 0.5;
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    ${(props) =>
      props.mTopMobile && `margin-top: ${pxToRem(props.mTopMobile)}`};
  }
`

export const RowStyled = styled(ViewStyled)`
  margin-top: ${pxToRem(Metrics.dimensions.lg)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const fadeOut = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`

const slideOut = keyframes`
    0% {
      transform: translateY(${pxToRem(0)});
    }
    99% {
      transform: translateY(${pxToRem(-15)});
    }
    100% {
      transform: translateY(${pxToRem(-600)});
    }
`

const slideIn = keyframes`
    0% {
      transform: translateY(${pxToRem(-15)});
    }
    100% {
      transform: translateY(${pxToRem(0)});
    }
`

export const BoxShadowStyled = styled(ViewStyled)`
  ${(props) =>
    props.padding &&
    `padding: ${
      typeof props.padding === 'number' ? pxToRem(props.padding) : props.padding
    }`};
  box-shadow: ${(props) =>
    props.shadowType
      ? props.theme.shadow[props.shadowType as ShadowTypeProps]
      : `${props.theme.shadow.small}`};

  &.disable-item {
    filter: opacity(0.8);
    pointer-events: none;
  }

  @media (max-width: ${pxToRem(Metrics.breakPoints.xs)}) {
    top: ${(props) => props.nameTable === 'linkedBill' && pxToRem(-25)};
  }
`

export const BoxShadowAnimationStyled = styled(BoxShadowStyled)`
  animation: ${(props) =>
        props.fadeInOut === MENU_STATUS.FADE_IN
          ? ''
          : props.fadeInOut === MENU_STATUS.FADE_OUT && fadeOut}
      ${(props) => (props.duration ? `${props.duration}s` : '0s')} linear
      ${(props) => (props.fadeInOut ? '0.1s' : '0s')}
      ${(props) => (props.fadeInOut ? 'both' : 'forwards')},
    ${(props) =>
        props.fadeInOut === MENU_STATUS.FADE_IN
          ? slideIn
          : props.fadeInOut === MENU_STATUS.FADE_OUT && slideOut}
      0.2s linear ${(props) => (props.fadeInOut ? '0s' : '0.1s')}
      ${(props) => (props.fadeInOut ? 'forwards' : 'both')};
  ${(props) =>
    props.fadeInOut === MENU_STATUS.NONE &&
    `animation: none; transform: translateY(${pxToRem(-1000)});`}
  @media (max-width: ${pxToRem(Metrics.breakPoints.xs)}) {
    max-width: ${pxToRem(250)};
  }
`

export const BorderWrapperStyled = styled(ViewStyled)`
  & {
    width: ${(props) =>
      typeof props.width === 'string'
        ? props.width
        : pxToRem(props.width || 315)};
  }
  ${(props) => props.pointerEvents && `pointer-events: ${props.pointerEvents}`};
`

export const DividerStyled = styled.div<DividerProps>`
  border-bottom: ${pxToRem(Metrics.borderWidth.tiny)} solid
    ${({ theme }) => theme.colors.regentGray};
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding-right: ${pxToRem(Metrics.dimensions.sm)};
  ${(props) => props.pBottom && `padding-bottom: ${pxToRem(props.pBottom)}`};
  & {
    ${(props) =>
      props.width &&
      `width: ${
        typeof props.width === 'string'
          ? props.width
          : pxToRem(props.width || 0)
      }`};
  }
`

export const WrapperContent = styled(ViewStyled)`
  flex: 1;
  width: min(90%, ${pxToRem(800)});
`

export const BackDropPointLocker = styled(ViewStyled)<BackDropProps>`
  inset: 0;
  min-width: 100%;
  ${(props) => props.isLocked && `opacity: 0.5 ;   pointer-events: none;`}
  @media (max-width: ${pxToRem(Metrics.breakPoints.lg)}) {
    min-width: 40%;
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.md)}) {
    min-width: 100%;
  }
`
export const BackDropTableLocker = styled(ViewStyled)<BackDropProps>`
  inset: 0;
  max-width: 100%;
  ${(props) => props.isLocked && `opacity: 0.5 ;   pointer-events: none;`}
`

export const Container = styled(ViewStyled)`
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
  }
  @media (max-width: ${pxToRem(Metrics.breakPoints.md)}) {
    max-width: ${pxToRem(Metrics.breakPoints.sm)};
  }
`
