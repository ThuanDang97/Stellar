import styled from 'styled-components'
import DatePicker from 'react-datepicker'

// Utils
import { pxToRem } from '@utils/theme'

export const DateStyled = styled(DatePicker)`
  border: none;
  background-color: transparent;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.spanishGray : theme.colors.shark};
  padding-bottom: ${({ theme }) => pxToRem(theme.metrics.dimensions.sm)};
  font-size: ${({ theme }) => pxToRem(theme.typography.fontSize.base)};
  letter-spacing: ${({ theme }) => pxToRem(theme.typography.letterSpacing.xl)};
  width: ${({ theme }) => theme.metrics.width.full};
  min-width: ${pxToRem(300)};
  margin-right: 0;
  position: absolute;
  left: 0;
  top: ${pxToRem(-25)};
  height: ${pxToRem(35)};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.spanishGray};
  }

  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    min-width: ${pxToRem(258)};
  }
`
