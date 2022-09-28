import styled, { keyframes } from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import { TableHeadStyledProps } from '@self-types/components/Table.props'
import { TextAnimatedProps } from '@self-types/components/TextAnimated.props'

// Themes
import Metrics from '@themes/Metrics'

// Styles
import { ViewStyled } from './ViewStyled'

const displayBorderBottom = keyframes`
0% {
  border-bottom-width: 0
}
10% {
  border-bottom-width: thin
}
`

const fadeIn = keyframes`
  0% {
    max-height: 0;
    padding: 0 ${pxToRem(Metrics.dimensions.sm)};
    overflow: hidden
  }
  50% {
    padding: ${pxToRem(Metrics.dimensions.sm)};
  }
  100% {
    max-height: ${pxToRem(150)};
    overflow: visible;
    padding: ${pxToRem(Metrics.dimensions.sm)};
  }
`

export const TableStyled = styled.table<{ isLocked?: boolean }>`
  border-collapse: collapse;
  width: ${({ theme }) => theme.metrics.width.full};
  @media (max-width: ${pxToRem(Metrics.breakPoints.xs)}) {
    width: ${(props) =>
      props.isLocked ? props.theme.metrics.width.full : pxToRem(550)};
  }
`

export const TableHeadStyled = styled.th<TableHeadStyledProps>`
  position: relative;
  border-bottom: thin solid ${({ theme }) => theme.colors.silver};
  padding: ${({ theme }) =>
    `${pxToRem(theme.metrics.dimensions.sm)} ${pxToRem(
      theme.metrics.dimensions.base,
    )}`};

  ${(props) => props.fontSize && `font-size: ${pxToRem(props.fontSize)}`};
  font-weight: ${({ theme }) => theme.typography.fontWeight.base};
  color: ${({ theme }) => theme.colors.rollingStone};

  &:nth-child(1) {
    text-align: left;
    padding-left: ${({ theme }) => pxToRem(theme.metrics.dimensions.xmd)};

    ${({ isEmptyData }) => isEmptyData && 'width: 46.1%;'}
    @media (max-width: ${pxToRem(Metrics.breakPoints.md)}) {
      ${({ isEmptyData }) => isEmptyData && 'width: 30%;'}
      ${({ isEmptyData, tableId }) =>
        isEmptyData && tableId === 'addBill' && 'width: 39.3%;'}
    }

    @media (max-width: ${pxToRem(Metrics.breakPoints.xs)}) {
      ${({ isEmptyData, tableId }) =>
        isEmptyData && tableId === 'addBill' ? 'width: 40%;' : 'width: 30%;'}
    }
  }

  &:nth-child(2) {
    ${({ isEmptyData }) => isEmptyData && 'text-align: left;'}
  }

  ${({ sortable }) => sortable && 'cursor: pointer;'}

  &:hover {
    ${(props) =>
      props.bgColorHover && `background-color: ${props.bgColorHover};`}
  }

  @media (max-width: ${pxToRem(Metrics.breakPoints.xs)}) {
    font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.base)};
    width: 25%;
  }
`

export const TableCellStyled = styled.td.attrs<{
  colSpan?: number
}>((props) => ({
  colSpan: props.colSpan || 1,
}))<{ delay?: number; fontSize?: number }>`
  width: ${pxToRem(220)};
  word-wrap: break-word;
  border-bottom: thin solid ${({ theme }) => theme.colors.silver};

  animation: ${displayBorderBottom} 1s linear
    ${(props) => (props.delay ? `${props.delay}s` : '0s')} both;

  text-align: center;

  &:nth-child(1) {
    text-align: ${({ colSpan }) => (colSpan !== 1 ? 'center' : 'left')};
    padding-left: ${({ theme }) => pxToRem(theme.metrics.dimensions.base)};
  }

  &:nth-child(2) {
    width: ${pxToRem(350)};
  }

  &:nth-last-child(1) {
    width: ${pxToRem(200)};
  }

  ${(props) => props.fontSize && `font-size: ${pxToRem(props.fontSize)}`};
`

export const CellAnimatedStyled = styled(ViewStyled)<TextAnimatedProps>`
  animation: ${fadeIn} 1.3s linear
    ${(props) => (props.delay ? `${props.delay}s` : '0s')} both;

  @media (max-width: ${pxToRem(Metrics.breakPoints.xs)}) {
    animation: ${fadeIn} 1s linear
      ${(props) => (props.delay ? `${props.delay}s` : '0s')} both;
  }
`
