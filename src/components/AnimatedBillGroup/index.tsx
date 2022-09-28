import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import { ViewStyled } from '@components/styled-components'
import {
  LabelWrapperStyled,
  TitleWrapperStyled,
} from '@components/AnimatedBillGroup/AnimatedBillGroupStyled'
import AnimatedLineBill from '@components/AnimatedLineBill'
import { ScoreLabelStyled } from '@components/AnimatedScoreGroup/AnimatedScoreGroupStyled'

// Constants
import { BILL_LABELS } from '@constants/index'

// Props type
import { AnimationComponentProps } from '@self-types/components/Animation.props'

// Styles
import { TitleLandingPageStyled } from '../../../styles/pages/LandingPageStyled'

const AnimatedBillGroup = ({ delay }: AnimationComponentProps) => {
  const theme = useTheme()

  return (
    <ViewStyled
      width="70%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {/* Title */}
      <TitleWrapperStyled delay={delay}>
        <TitleLandingPageStyled
          fontWeight={theme.typography.fontWeight.bold}
          color={theme.colors.white}
          as="h1"
        >
          We combine all your <br /> monthly bills.
        </TitleLandingPageStyled>

        <TitleLandingPageStyled
          fontWeight={theme.typography.fontWeight.bold}
          color={theme.colors.white}
          as="h1"
        >
          We give you a line of credit for a year’s worth of bills.
        </TitleLandingPageStyled>

        <TitleLandingPageStyled
          fontWeight={theme.typography.fontWeight.bold}
          color={theme.colors.white}
          as="h1"
        >
          Improving your{' '}
          <TitleLandingPageStyled
            fontWeight={theme.typography.fontWeight.bold}
            color={theme.colors.frenchRose}
          >
            credit utilization
          </TitleLandingPageStyled>{' '}
          ratio by paying off your line on time, every month.
        </TitleLandingPageStyled>
      </TitleWrapperStyled>

      {/* Animated bill */}
      <AnimatedLineBill delay={delay} />

      {/* Bill labels */}
      <LabelWrapperStyled delay={delay}>
        {BILL_LABELS.map((label) => (
          <ScoreLabelStyled
            key={label}
            color={theme.colors.white}
            fontWeight={theme.typography.fontWeight.bold}
            letterSpacing={theme.typography.letterSpacing.xxl}
          >
            {label}
          </ScoreLabelStyled>
        ))}
      </LabelWrapperStyled>
    </ViewStyled>
  )
}

export default memo(AnimatedBillGroup)
