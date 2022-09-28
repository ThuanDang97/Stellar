import { ViewStyled } from '@components/styled-components'
import { pxToRem } from '@utils/theme'
import styled from 'styled-components'

export const WrapperIconStyled = styled(ViewStyled)`
  width: ${({ theme }) => pxToRem(theme.metrics.dimensions.xmd)};
  height: ${({ theme }) => pxToRem(theme.metrics.dimensions.xmd)};
  top: ${() => pxToRem(-18)};
  left: auto;
  right: 50%;
  transform: translateX(50%);
  position: absolute;
  background-color: ${({ theme }) => theme.colors.shamrock};
  border-radius: ${({ theme }) => pxToRem(theme.metrics.dimensions.xlg)};
  padding-top: ${() => pxToRem(7)};
  padding-left: ${({ theme }) => pxToRem(theme.metrics.dimensions.base)};
  padding-right: ${({ theme }) => pxToRem(theme.metrics.dimensions.lg)};
  padding-bottom: ${({ theme }) => pxToRem(theme.metrics.dimensions.xmd)};
`
