import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import { ViewStyled } from '@components/styled-components'

// Props type
import { AnimationComponentProps } from '@self-types/components/Animation.props'

// Utils
import { pxToRem } from '@utils/theme'
import {
  EndLineBillStyled,
  LineColorWrapper,
  MiddleLineBillStyled,
  Shim,
  StartLineBillStyled,
} from './AnimatedLineBillStyled'

const AnimatedLineBill = ({ delay = 0 }: AnimationComponentProps) => {
  const theme = useTheme()

  return (
    <ViewStyled
      position="relative"
      display="flex"
      width={`min(100%, ${pxToRem(700)})`}
      alignItems="flex-start"
      mLeft={theme.metrics.dimensions.xl}
    >
      {/* List of color lines */}
      <LineColorWrapper delay={delay}>
        {/* The layer for five color lines */}
        <StartLineBillStyled
          width={100}
          lineColor={theme.colors.frenchRose}
          delay={delay}
        />

        {/* Five color lines */}
        <StartLineBillStyled
          width={20}
          delay={0.5 + delay}
          nextDelay={3 + delay}
        />
        <MiddleLineBillStyled
          width={20}
          delay={1 + delay}
          nextDelay={3 + delay}
        />
        <MiddleLineBillStyled
          width={20}
          delay={1.5 + delay}
          nextDelay={3 + delay}
        />
        <MiddleLineBillStyled
          width={20}
          delay={2 + delay}
          nextDelay={3 + delay}
        />
        <MiddleLineBillStyled
          width={20}
          delay={2.5 + delay}
          nextDelay={3 + delay}
        />
      </LineColorWrapper>

      <Shim />

      <EndLineBillStyled width={80} delay={4 + delay} />
    </ViewStyled>
  )
}

export default memo(AnimatedLineBill)
