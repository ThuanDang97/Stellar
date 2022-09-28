import styled from 'styled-components'

// Components
import { BoxShadowStyled, ViewStyled } from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

export const ModalStyled = styled(BoxShadowStyled)`
  position: relative;

  display: flex;
  flex-direction: column;

  min-height: ${({ theme }) => pxToRem(theme.metrics.modal.base)};
  padding: ${({ theme }) => pxToRem(theme.metrics.dimensions.base)};
  border-radius: ${({ theme }) => pxToRem(theme.metrics.borderRadius.default)};

  background-color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.xs)}) {
    min-height: ${pxToRem(170)};
    padding: ${({ theme }) => pxToRem(theme.metrics.dimensions.xs)};
  }
`

export const BackDropStyled = styled(ViewStyled)`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.backdrop};
  backdrop-filter: blur(${pxToRem(3)});
  z-index: ${({ theme }) => theme.metrics.zIndex.top};

  @media (max-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.md)}) {
    ${(props) => props.pBottom && `padding-bottom: 0px`};
  }
  @media (min-width: ${({ theme }) => pxToRem(theme.metrics.breakPoints.lg)}) {
    ${(props) => props.pBottom && `padding-bottom: ${pxToRem(props.pBottom)}`};
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  align-self: end;

  width: ${({ theme }) => pxToRem(theme.metrics.dimensions.xmd)};
  height: ${({ theme }) => pxToRem(theme.metrics.dimensions.xmd)};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.ironLight};
  }
`
