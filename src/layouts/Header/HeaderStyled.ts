import styled, { css, keyframes } from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import { TextStyled, ViewStyled } from '@components/styled-components'

// Props type
import { HeaderStyledProps } from '@self-types/layouts/header.props'

const fadeIn = keyframes`
from {
  opacity: 0
}

to: {
  opacity: 1
}
`

export const HeaderStyled = styled(ViewStyled)<HeaderStyledProps>`
  top: 0;

  ${({ delay }) =>
    delay &&
    css`
      animation: ${fadeIn} 2s linear both ${delay}s;
    `}

  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.lg)}) {
    padding-left: ${(theme) => pxToRem(theme.theme.metrics.dimensions.md)};
    padding-right: ${(theme) => pxToRem(theme.theme.metrics.dimensions.md)};
  }
`

export const LogoStyled = styled(TextStyled)`
  cursor: pointer;
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.lg)}) {
    margin-right: ${(theme) => pxToRem(theme.theme.metrics.dimensions.md)};
  }
`

export const WrapperAvatarStyled = styled(ViewStyled)`
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.lg)}) {
    column-gap: ${(theme) => pxToRem(theme.theme.metrics.dimensions.xs)};
  }
`
