import styled from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Themes
import Metrics from '@themes/Metrics'
import { theme } from '@themes/index'

// Props type
import { ViewProps } from '@self-types/components/View.props'
import { TextProps } from '@self-types/components/Text.props'

export const ListStyled = styled.ul<ViewProps>`
  display: ${(props) => props.flex || 'flex'};
  list-style: ${(props) => props.listStyle || 'none'};

  width: ${(props) =>
    typeof props.width === 'string'
      ? props.width
      : pxToRem(props.width || 315)};
  padding-top: ${(props) => (props.pTop && pxToRem(props.pTop)) || '0'};
  padding-bottom: ${(props) =>
    props.pBottom && pxToRem(props.pBottom || theme.metrics.dimensions.sm)};
  padding-left: ${(props) => (props.pLeft && pxToRem(props.pLeft)) || '0'};
  padding-right: ${(props) => (props.pRight && pxToRem(props.pRight)) || '0'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  z-index: ${(props) => props.zIndex || '1'};
  ${(props) => props.alignItems && `align-items: ${props.alignItems}`};
  ${(props) => props.position && `position: ${props.position}`};
  ${(props) => props.bgColor && `background-color: ${props.bgColor}`};
  ${(props) => props.overflowY && `overflow-y: ${props.overflowY}`};
  ${(props) => props.maxHeight && `max-height: ${pxToRem(props.maxHeight)}`};
  ${(props) =>
    props.borderRadius && `border-radius: ${pxToRem(props.borderRadius)}`};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  &::-webkit-scrollbar {
    ${(props) => props.display && `display: ${props.display}`};
  }
`
export const ListItemStyled = styled.li<TextProps>`
  & {
    color: ${(props) => props.color || props.theme.colors.shark};
    ${(props) => props.mTop && `margin-top: ${props.mTop}`};
    font-size: ${(props) =>
      (props.fontSize && pxToRem(props.fontSize)) ||
      pxToRem(theme.typography.fontSize.sm)};
    padding-top: ${(props) =>
      (props.pTop && pxToRem(props.pTop)) ?? pxToRem(Metrics.dimensions.sm)};
    ${(props) => props.pLeft && `padding-left: ${pxToRem(props.pLeft)}`};
    padding-bottom: ${(props) =>
      (props.pBottom && pxToRem(props.pBottom)) ??
      pxToRem(Metrics.dimensions.sm)};
    cursor: ${(props) => props.color || 'pointer'};
  }
  background: ${(props) => (props.bgColor ? props.bgColor : 'none')};
  &:hover {
    background-color: ${(props) => props.bgColorHover || theme.colors.iron};
    ${(props) =>
      props.borderBottom &&
      `border-bottom: ${pxToRem(props.borderBottom)} solid ${
        theme.colors.white
      }`};
    ${(props) =>
      props.borderRadius && `border-radius: ${pxToRem(props.borderRadius)}`};
  }
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  display: ${(props) => props.flex || 'flex'};
  flex-direction: ${(props) => props.flexDirection || 'column'};
  ${(props) =>
    props.width &&
    `width: ${
      typeof props.width === 'string' ? props.width : pxToRem(props.width)
    }`};
`
