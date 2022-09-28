import styled, { css } from 'styled-components'

// Props type
import { ButtonProps } from '@self-types/components/Button.props'

// Utils
import { pxToRem } from '@utils/theme'

// Constants
import { SIZE_BUTTON, VARIANT_BUTTON } from '@constants/index'

export const ButtonStyled = styled.button<ButtonProps>`
  ${({ btnWidth, theme }) =>
    btnWidth &&
    `width: ${
      typeof btnWidth === 'string'
        ? btnWidth
        : pxToRem(btnWidth || theme.metrics.icons.sm)
    }`};
  ${({ btnHeight, theme }) =>
    btnHeight && `height: ${pxToRem(btnHeight || theme.metrics.icons.sm)}`};
  ${(props) => props.mTop && `margin-top: ${pxToRem(props.mTop)}`};
  ${(props) => props.mLeft && `margin-left: ${pxToRem(props.mLeft)}`};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
  ${(props) => props.mBottom && `margin-bottom: ${pxToRem(props.mBottom)}`};
  ${(props) => props.borderColor && `border-color: ${props.borderColor};`}
  ${(props) =>
    props.letterSpacing && `letter-spacing: ${pxToRem(props.letterSpacing)};`}
    cursor: pointer;
  &:disabled {
    cursor: no-drop;
  }
  &:hover {
    ${(props) =>
      props.bgColorHover && `background-color: ${props.bgColorHover};`}
  }

  ${(props) => {
    switch (props.variant) {
      case VARIANT_BUTTON.PRIMARY:
        return css`
          color: ${({ theme }) => theme.colors.tangaroa};
          background-color: ${({ theme }) => theme.colors.white};
          border-width: ${({ theme }) =>
            pxToRem(theme.metrics.dimensions.tiny)};
          border-radius: ${({ theme }) =>
            pxToRem(theme.metrics.borderRadius.default)};
          width: ${pxToRem(85)};
          border: ${({ theme }) => pxToRem(theme.metrics.dimensions.tiny)} solid
            ${({ theme }) => theme.colors.black};
          @media (max-width: ${({ theme }) =>
              pxToRem(theme.metrics.breakPoints.xs)}) {
            width: ${({ theme }) => pxToRem(theme.metrics.width.md)};
            padding: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)} 0;
          }
        `
      case VARIANT_BUTTON.NO_BORDER:
        return css`
          color: ${({ theme }) => theme.colors.cello};
          background-color: ${({ theme }) => theme.colors.white};
          border: none;
        `
      case VARIANT_BUTTON.DARK:
        return css`
          color: ${({ theme }) =>
            props.color ? props.color : theme.colors.cello};
          background: none;
          border: none;
        `
      case VARIANT_BUTTON.DANGER:
        return css`
          color: ${({ theme }) => theme.colors.pomegranate};
          background-color: transparent;
          border: none;
        `
      case VARIANT_BUTTON.LIGHT:
        return css`
          color: ${({ theme }) => theme.colors.white};
          background: none;
          border: none;
        `
      case VARIANT_BUTTON.DISABLED:
        return css`
          color: ${({ theme }) =>
            props.color ? props.color : theme.colors.white};
          background-color: ${({ theme }) =>
            props.bgColor ? props.bgColor : theme.colors.silver};
          border: none;
          border-radius: ${({ theme }) => pxToRem(theme.metrics.dimensions.xs)};
        `
      case VARIANT_BUTTON.ICON:
        return css`
          position: relative;
          background-color: transparent;
          border: none;

          @media (max-width: ${({ theme }) =>
              pxToRem(theme.metrics.breakPoints.xs)}) {
            margin-left: ${props.mLeftMobile
              ? pxToRem(props.mLeftMobile)
              : props.theme.metrics.dimensions.tiny};
          }
        `
      case VARIANT_BUTTON.WARNING:
        return css`
          border: none;
          color: ${({ theme }) =>
            props.color ? props.color : theme.colors.white};
          background-color: ${({ theme }) =>
            props.bgColor ? props.bgColor : theme.colors.pomegranate};
          border-radius: ${({ theme }) => pxToRem(theme.metrics.dimensions.xs)};
        `
      case VARIANT_BUTTON.HALF_CIRCLE:
        return css`
          border: none;
          color: ${({ theme }) =>
            props.color ? props.color : theme.colors.white};
          background-color: ${({ theme }) =>
            props.bgColor ? props.bgColor : theme.colors.cello};
          border-radius: ${({ theme }) => pxToRem(theme.metrics.dimensions.lg)};
        `
      default:
        return css`
          color: ${({ theme }) => theme.colors.mercury};
          background-color: ${({ theme }) => theme.colors.shark};
          border-radius: ${({ theme }) => pxToRem(theme.metrics.dimensions.xs)};
          border: none;
        `
    }
  }}

  ${(props) => {
    switch (props.size) {
      case SIZE_BUTTON.NO_PADDING:
        return css`
          font-size: ${({ theme }) =>
            pxToRem(theme.typography.fontSize.common)};
          padding: 0;
        `
      case SIZE_BUTTON.MEDIUM:
        return css`
          font-size: ${({ theme }) =>
            pxToRem(theme.typography.fontSize.common)};
          padding: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)}
            ${({ theme }) => pxToRem(theme.metrics.dimensions.md)};
          @media (max-width: ${({ theme }) =>
              pxToRem(theme.metrics.breakPoints.xs)}) {
            font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.sm)};
          }
        `
      case SIZE_BUTTON.LARGE:
        return css`
          font-size: ${({ theme }) =>
            pxToRem(theme.typography.fontSize.common)};
          padding: ${({ theme }) => pxToRem(theme.metrics.dimensions.base)}
            ${pxToRem(50)};
          @media (max-width: ${({ theme }) =>
              pxToRem(theme.metrics.breakPoints.xs)}) {
            font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.sm)};
          }
        `
      default:
        return css`
          font-size: ${({ theme }) =>
            props.fontSize
              ? pxToRem(props.fontSize)
              : pxToRem(theme.typography.fontSize.sm)};
          font-weight: ${({ theme }) =>
            props.fontWeight
              ? props.fontWeight
              : theme.typography.fontWeight.base};
          padding: ${({ theme }) =>
            props.padding
              ? `${pxToRem(theme.metrics.dimensions.sm)} ${pxToRem(
                  props.padding,
                )}`
              : pxToRem(theme.metrics.dimensions.sm)};
          @media (max-width: ${({ theme }) =>
              pxToRem(theme.metrics.breakPoints.xs)}) {
            font-size: ${({ theme }) =>
              pxToRem(theme.typography.fontSize.base)};
          }
        `
    }
  }}
`

export const ButtonIconStyled = styled.span`
  padding-right: ${({ theme }) => pxToRem(theme.metrics.dimensions.tiny)};
`
