import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Constants
import { SCORE_LABELS, ANIMATION_SCORE_TITLE } from '@constants/index'

// Components
import AnimatedLineScore from '@components/AnimatedLineScore'
import { ViewStyled } from '@components/styled-components'

// Props type
import { AnimationComponentProps } from '@self-types/components/Animation.props'

// Utils
import { pxToRem } from '@utils/theme'
import {
  LabelWrapperStyled,
  ScoreLabelStyled,
  TitleWrapperStyled,
} from './AnimatedScoreGroupStyled'
import { TitleLandingPageStyled } from '../../../styles/pages/LandingPageStyled'

const AnimatedScoreGroup = ({ delay }: AnimationComponentProps) => {
  const theme = useTheme()

  return (
    <ViewStyled
      width={theme.metrics.width.full}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <ViewStyled width={`min(90%, ${pxToRem(700)})`}>
        {/* Title */}
        <TitleWrapperStyled delay={delay}>
          {ANIMATION_SCORE_TITLE.map((title) => (
            <TitleLandingPageStyled
              key={title}
              fontWeight={theme.typography.fontWeight.bold}
              color={theme.colors.white}
              as="h1"
            >
              {title}
            </TitleLandingPageStyled>
          ))}
        </TitleWrapperStyled>

        {/* Animated score */}
        <AnimatedLineScore delay={delay} />
      </ViewStyled>

      {/* Labels */}
      <LabelWrapperStyled delay={delay}>
        {SCORE_LABELS.map((label, index) => (
          <ScoreLabelStyled
            key={`${label + index}`}
            data-icon={label === '+' ? 'true' : 'false'}
            color={theme.colors.white}
            letterSpacing={theme.typography.letterSpacing.xxl}
          >
            {label}
          </ScoreLabelStyled>
        ))}
      </LabelWrapperStyled>
    </ViewStyled>
  )
}

export default memo(AnimatedScoreGroup)
