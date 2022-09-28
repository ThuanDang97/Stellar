import styled, { keyframes } from 'styled-components'

// Props type
import { AnimatedWrapperProps } from '@self-types/components/Animation.props'

// Components
import { ViewStyled } from './ViewStyled'

const fadeIn = keyframes`
from {
  opacity: 0
}
to {
  opacity: 1
}
`

const fadeOut = keyframes`
from {
  opacity: 0.8
}
to {
  opacity: 0.4
}
`

export const PageFadeIn = styled(ViewStyled)<AnimatedWrapperProps>`
  animation: ${fadeIn}
    ${(props) => (props.duration ? `${props.duration}s` : '0s')} forwards
    ${(props) => (props.delay ? `${props.delay}s` : 'none')};
`

export const PageFadeOut = styled(ViewStyled)<AnimatedWrapperProps>`
  animation: ${fadeOut}
    ${(props) => (props.duration ? `${props.duration}s` : '0s')} forwards
    ${(props) => (props.delay ? `${props.delay}s` : 'none')};
`
