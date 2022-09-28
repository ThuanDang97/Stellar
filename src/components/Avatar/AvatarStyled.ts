import styled, { css } from 'styled-components'

// Theme
import metrics from '@themes/Metrics'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import Image from 'next/image'

const positionCenter = css`
  position: absolute;
  margin: auto;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  top: 0;
`

export const AvatarImageStyled = styled(Image)`
  border: ${pxToRem(metrics.borderWidth.base)} solid
    ${({ theme }) => theme.colors.gallery} !important;
  border-radius: ${pxToRem(metrics.borderRadius.circle)};
  ${positionCenter}
`

export const AvatarStyled = styled.span`
  ${positionCenter}
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column-reverse;
}
`
