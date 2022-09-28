import styled from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.shark};
  font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.xss)};
`
