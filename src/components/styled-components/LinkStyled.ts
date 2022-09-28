import styled, { css } from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import {
  LinkProps,
  LinkStyledProps,
  LinkTypesProps,
} from '@self-types/components/Link.props'

// Constants
import { LINK_TYPES } from '@constants/link'

export const LinkStyled = styled.a<LinkProps>`
  color: ${(props) => props.color};
  font-size: ${(props) =>
    props.fontSize
      ? pxToRem(props.fontSize)
      : css`
          ${({ theme }) => pxToRem(theme.typography.fontSize.base)}
        `};
  font-weight: ${(props) =>
    props.fontWeight ||
    css`
      ${({ theme }) => theme.typography.fontWeight.base}
    `};
  margin-top: ${(props) => (props.mTop && pxToRem(props.mTop)) || 0};
  margin-bottom: ${(props) => (props.mBottom && pxToRem(props.mBottom)) || 0};
  margin-left: ${(props) => (props.mLeft && pxToRem(props.mLeft)) || 0};
  margin-right: ${(props) => (props.mRight && pxToRem(props.mRight)) || 0};
  text-decoration: ${(props) =>
    props.textDecoration ? props.textDecoration : 'none'};
  letter-spacing: 1px;
  &:active,
  &:hover {
    color: ${(props) =>
      props.colorActive ||
      css`
        ${({ theme }) => theme.colors.white}
      `};
  }

  &.active {
    color: ${(props) =>
      props.colorActive ||
      css`
        ${({ theme }) => theme.colors.frenchRose}
      `};
  }
`

export const ButtonLinkStyled = styled.a<LinkStyledProps>`
  width: ${(props) =>
    props.width
      ? pxToRem(props.width)
      : css`
          ${({ theme }) => theme.metrics.width.full}
        `};
  color: ${(props) =>
    props.color
      ? props.color
      : props.linkTypes
      ? LINK_TYPES[props.linkTypes as LinkTypesProps].color
      : css`
          ${({ theme }) => theme.colors.white}
        `};
  border-radius: ${(props) =>
    props.linkTypes
      ? pxToRem(LINK_TYPES[props.linkTypes as LinkTypesProps].borderRadius)
      : 0};
  background-color: ${(props) =>
    props.linkTypes
      ? LINK_TYPES[props.linkTypes as LinkTypesProps].bgColor
      : 'none'};
  font-size: ${(props) =>
    props.fontSize
      ? pxToRem(props.fontSize)
      : css`
          ${({ theme }) => pxToRem(theme.typography.fontSize.sm)};
        `};
  font-weight: ${(props) =>
    props.fontWeight ||
    css`
      ${({ theme }) => theme.typography.fontWeight.base}
    `};
  display: ${(props) => (props.display ? props.display : 'inline-flex')};
  align-items: center;
  justify-content: center;
  padding-top: ${({ theme, pTop }) =>
    (typeof pTop === 'number' && pxToRem(pTop)) ||
    pxToRem(theme.metrics.dimensions.base)};
  padding-bottom: ${({ theme, pBottom }) =>
    (typeof pBottom === 'number' && pxToRem(pBottom)) ||
    pxToRem(theme.metrics.dimensions.base)};
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
  ${(props) => props.padding && `padding: ${pxToRem(props.padding)}`};
  ${(props) => props.mRight && `margin-right: ${pxToRem(props.mRight)}`};
  ${(props) => props.mLeft && `margin-left: ${pxToRem(props.mLeft)}`};
  margin-top: ${(props) => (props.mTop && pxToRem(props.mTop)) || 0};
  margin-bottom: ${(props) => (props.mBottom && pxToRem(props.mBottom)) || 0};
  ${(props) =>
    props.textDecoration && `text-decoration: ${props.textDecoration}`};
  ${(props) => props.cursor && `cursor: ${props.cursor}`};
  ${(props) => props.opacity && `opacity: ${props.opacity}`};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.fontFamily && `font-family: ${props.fontFamily}`};
  ${(props) =>
    props.letterSpacing && `letter-spacing: ${pxToRem(props.letterSpacing)}`};
  ${(props) =>
    props.iconLeftUrl &&
    css`
      &:before {
        display: flex;
        align-items: center;
        content: '';
        background-image: url(${props.iconLeftUrl});
        background-repeat: no-repeat;
        width: ${({ theme }) => pxToRem(theme.metrics.dimensions.base)};
        height: ${({ theme }) => pxToRem(theme.metrics.dimensions.md)};
        padding-right: ${({ theme }) => pxToRem(theme.metrics.dimensions.xs)};
      }
    `}

  ${(props) =>
    props.iconRightUrl &&
    css`
      &:after {
        display: flex;
        align-items: center;
        content: '';
        background-image: url(${props.iconRightUrl});
        background-repeat: no-repeat;
        width: ${({ theme }) => pxToRem(theme.metrics.dimensions.base)};
        height: ${({ theme }) => pxToRem(theme.metrics.dimensions.md)};
        margin-left: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)};
      }
    `}

  &:hover {
    ${(props) =>
      props.bgColorHover && `background-color: ${props.bgColorHover}`};
  }

  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    font-size: ${(props) =>
      props.linkTypes
        ? pxToRem(props.theme.typography.fontSize.base)
        : pxToRem(props.theme.typography.fontSize.xs)};
  }
`
