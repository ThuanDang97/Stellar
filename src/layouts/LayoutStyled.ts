// Library
import styled from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'
import { ViewStyled } from '@components/styled-components'

export const PrimaryLayout = styled(ViewStyled)`
  display: flex;
  ${(props) => props.pBottom && `padding-bottom: ${pxToRem(props.pBottom)}`};
`

export const SecondaryLayout = styled(ViewStyled)`
  display: flex;
  justify-content: center;
  min-height: ${({ theme }) => theme.metrics.layout.default};
  width: ${({ theme }) => theme.metrics.width.full};
  background-image: url(/images/layout.png);
  background-repeat: repeat;
`

export const PrimaryContainer = styled(ViewStyled)`
  padding: 0 ${({ theme }) => pxToRem(theme.metrics.dimensions.md)};
`

export const SecondaryContainer = styled(ViewStyled)`
  padding: 0 ${({ theme }) => pxToRem(theme.metrics.width.xmd)};
`
