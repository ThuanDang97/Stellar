import styled, { keyframes } from 'styled-components'

// Props type
import { TextAnimatedProps } from '@self-types/components/TextAnimated.props'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import { ViewStyled } from '@components/styled-components'

const fadeOut = keyframes`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateX(${pxToRem(-180)});
    }
`
export const AnimatedPopupSuccess = styled(ViewStyled)<TextAnimatedProps>`
  animation: ${fadeOut} 0.35s linear both 4.65s;
`
