import styled from 'styled-components'

// Components
import { BoxShadowStyled } from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

export const BannerStyled = styled(BoxShadowStyled)`
  position: relative;

  display: flex;
  justify-content: space-between;

  width: 100%;
  height: ${pxToRem(150)};
  padding: ${({ theme }) => pxToRem(theme.metrics.dimensions.md)};
  background-color: ${({ theme }) => theme.colors.white};
`

export const ImageWrapper = styled.div`
  position: absolute;
  right: ${pxToRem(-4)};

  bottom: ${({ theme }) => pxToRem(-theme.metrics.dimensions.lg)};

  width: ${({ theme }) => pxToRem(theme.metrics.images.banner)};
  height: ${({ theme }) => pxToRem(theme.metrics.images.banner)};

  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    width: ${pxToRem(210)};
    height: ${pxToRem(210)};
    right: 0;
  }
`
