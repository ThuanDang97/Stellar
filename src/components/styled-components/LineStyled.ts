import styled, { keyframes } from 'styled-components'

// Props type
import { LineStyledProps } from '@self-types/components/Line.props'

// Utils
import { pxToRem } from '@utils/theme'

const BaseLineStyled = styled.div<LineStyledProps>`
  width: ${({ width }) => `${width}%`};
  margin-left: ${({ mLeft }) => pxToRem(mLeft || 0)};
  height: 0;
  ${(props) => props.opacity && `opacity: ${props.opacity}`};
  ${(props) => props.position && `position: ${props.position}`};
`

export const StartBaseLineStyled = styled(BaseLineStyled)`
  border-right: ${({ border, theme }) =>
      pxToRem(border || theme.metrics.borderWidth.xl)}
    solid ${({ bgColor, theme }) => bgColor || theme.colors.bigStone};

  border-top: ${({ height, theme }) =>
      pxToRem(height || theme.metrics.borderWidth.xl)}
    solid ${({ lineColor, theme }) => lineColor || theme.colors.white};
`

export const MiddleBaseLineStyled = styled(BaseLineStyled)`
  border-bottom: ${({ height, theme }) =>
      pxToRem(height ?? theme.metrics.borderWidth.xl)}
    solid ${({ lineColor, theme }) => lineColor || theme.colors.white};

  border-left: ${({ border, theme }) =>
      pxToRem(border || theme.metrics.borderWidth.xl)}
    solid transparent;

  &::after {
    content: '';
    display: block;

    border-right: ${({ border, theme }) =>
        pxToRem(border || theme.metrics.borderWidth.xl)}
      solid ${({ bgColor, theme }) => bgColor || theme.colors.bigStone};

    border-top: ${({ height, theme }) =>
        pxToRem(height ?? theme.metrics.borderWidth.xl)}
      solid ${({ lineColor, theme }) => lineColor || theme.colors.white};
  }
`

export const EndBaseLineStyled = styled(BaseLineStyled)`
  border-bottom: ${({ height, theme }) =>
      pxToRem(height || theme.metrics.borderWidth.xl)}
    solid ${({ lineColor, theme }) => lineColor || theme.colors.white};

  border-left: ${({ border, theme }) =>
      pxToRem(border || theme.metrics.borderWidth.xl)}
    solid transparent;
`

const fadeIn = (
  lineColor: string,
  left: string,
  border: number,
  lineColorDefault: string,
) => keyframes`
  0% {
    left: 0;
    border-top:${pxToRem(border)} solid ${lineColorDefault};
  }

  100% {
    left:  ${left};
    border-top: ${pxToRem(border)} solid ${lineColor};
  }
`

export const LineScoreStyled = styled(BaseLineStyled)`
  position: absolute;
  z-index: 3;
  right: 0;
  background-color: white;
  height: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)};
`
export const ArrowDownStyled = styled.div<LineStyledProps>`
    width: 0;
    height: 0;
    border-left:  ${({ theme }) =>
      pxToRem(theme.metrics.borderWidth.md)} solid transparent;
    border-right: ${({ theme }) =>
      pxToRem(theme.metrics.borderWidth.md)} solid transparent;
    position: absolute;
    top: -14px;
    border-top: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)} solid
      ${({ lineColor, theme }) => lineColor || theme.colors.white};
    left: ${({ left }) => `${left}`};
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    animation: ${({ left, lineColor, theme }) =>
      lineColor &&
      left &&
      fadeIn(
        lineColor,
        left,
        theme.metrics.dimensions.sm,
        theme.colors.pomegranate,
      )} 1s linear ${({ delay }) => `${delay}s`} both;
  }
`
