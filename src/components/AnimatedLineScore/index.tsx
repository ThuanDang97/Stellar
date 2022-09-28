import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import { ViewStyled } from '@components/styled-components'
import {
  StartLineScoreStyled,
  MiddleLineScoreStyled,
  EndLineScoreStyled,
  LayerLineStyled,
  Shim,
} from '@components/AnimatedLineScore/AnimatedLineScoreStyled'

// Utils
import { pxToRem } from '@utils/theme'

// Props type
import { AnimationComponentProps } from '@self-types/components/Animation.props'

const AnimatedLineScore = ({ delay = 0 }: AnimationComponentProps) => {
  const theme = useTheme()

  return (
    <ViewStyled
      position="relative"
      display="flex"
      width={theme.metrics.width.full}
      alignItems="flex-start"
      overflow="hidden"
      mLeft={theme.metrics.dimensions.base}
    >
      {/* Five white lines */}
      <StartLineScoreStyled width={35} delay={0.5 + delay} />
      <MiddleLineScoreStyled width={30} delay={1.3 + delay} />
      <MiddleLineScoreStyled width={15} delay={2.1 + delay} />
      <MiddleLineScoreStyled width={10} delay={2.9 + delay} />
      <EndLineScoreStyled width={10} delay={3.7 + delay} />

      {/* CaribbeanGreen line */}
      <LayerLineStyled width={`80% - ${pxToRem(14)}`} delay={delay} />

      {/* Shim between lines */}
      <Shim left="35%" />
      <Shim left={`65% - ${pxToRem(7)}`} />
      <Shim left={`80% - ${pxToRem(14)}`} />
      <Shim left={`90% - ${pxToRem(21)}`} />
    </ViewStyled>
  )
}

export default memo(AnimatedLineScore)
