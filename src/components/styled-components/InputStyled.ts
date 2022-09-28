import styled from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import { InputProps } from '@self-types/components/Input.props'

export const InputStyled = styled.input<InputProps>`
  color: ${(props) => props.color || props.theme.colors.shark};
  font-size: ${(props) =>
    pxToRem(props.fontSize || props.theme.typography.fontSize.sm)};
  background-color: ${(props) => props.bgColor || props.theme.colors.white};

  width: ${(props) => (props.width ? pxToRem(props.width) : '100%')};
  ${(props) => props.flex && `flex: ${props.flex}`};
  height: ${(props) =>
    pxToRem(props.height || props.theme.metrics.height.base)};
  font-weight: ${(props) => pxToRem(props.theme.metrics.input.fontWeight)};
  letter-spacing: ${pxToRem(0.8)};
  border-radius: ${(props) => pxToRem(props.borderRadius || 0)};

  border-width: ${(props) => pxToRem(props.borderWidth || 0)};
  border-color: ${(props) => props.borderColor || props.theme.colors.cello};
  border-style: ${(props) => props.borderStyle || 'solid'};

  border-bottom-width: ${(props) => pxToRem(props.borderBottomWidth || 0)};
  border-top-width: ${(props) => pxToRem(props.borderTopWidth || 0)};
  border-left-width: ${(props) => pxToRem(props.borderLeftWidth || 0)};
  border-right-width: ${(props) => pxToRem(props.borderRightWidth || 0)};

  ${(props) => props.minHeight && `min-height: ${props.minHeight}`};
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};

  ${(props) => props.mTop && `margin-top: ${pxToRem(props.mTop)}`};
  ${(props) => props.mBottom && `margin-bottom: ${pxToRem(props.mBottom)}`};
  ${(props) => props.mLeft && `margin-left: ${pxToRem(props.mLeft)}`};
  ${(props) => props.mRight && `margin-right: ${pxToRem(props.mRight)}`};

  ${(props) => props.pTop && `padding-top: ${pxToRem(props.pTop)}`};
  ${(props) => props.pBottom && `padding-bottom: ${pxToRem(props.pBottom)}`};
  ${(props) => props.pLeft && `padding-left: ${pxToRem(props.pLeft)}`};
  ${(props) => props.pRight && `padding-right: ${pxToRem(props.pRight)}`};

  ${(props) => props.fontFamily && `font-family: ${props.fontFamily}`};
  ${(props) => props.lineHeight && `line-height: ${props.lineHeight}`};
  ${(props) =>
    props.letterSpacing && `letter-spacing: ${pxToRem(props.letterSpacing)}`};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) =>
      props.placeholderColor || props.theme.colors.spanishGray};
  }
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.xss)};
  }
`
