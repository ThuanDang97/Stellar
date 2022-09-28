import styled from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import { TextStyled } from '@components/styled-components'

export const ArrowStyled = styled(TextStyled)`
  border-top: ${({ theme }) => pxToRem(theme.metrics.borderWidth.base)} solid
    transparent;
  border-bottom: ${({ theme }) => pxToRem(theme.metrics.borderWidth.base)} solid
    transparent;
  border-left: ${({ theme }) => pxToRem(theme.metrics.borderWidth.lg)} solid
    ${({ theme }) => theme.colors.pomegranate};
  margin-left: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)};
  margin-right: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)};
`
