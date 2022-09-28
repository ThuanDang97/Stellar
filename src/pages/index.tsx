import React from 'react'

// Components
import LinkComponent from '@components/Link'
import AnimatedText from '@components/AnimatedText'
import AnimatedScoreGroup from '@components/AnimatedScoreGroup'
import AnimatedBillGroup from '@components/AnimatedBillGroup'
import AnimatedTicker from '@components/AnimatedTicker'

// Layouts
import Header from '@layouts/Header'
import { SecondaryLayout } from '@layouts/LayoutStyled'

// Constants
import { DEFAULT_HEADER_URL } from '@constants/routes'

// Styles
import {
  AnimatedLineStyled,
  ButtonWrapperStyled,
} from '../../styles/pages/LandingPageStyled'

const LandingPage = () => {
  return (
    <SecondaryLayout overflow="hidden" position="relative">
      <Header
        HeaderType="defaultHeader"
        loginHref={DEFAULT_HEADER_URL.LOGIN.URL}
        isLandingPage
        position="absolute"
        top={0}
      />

      {/* Text animation */}
      <AnimatedText />

      {/* Line animation and score animation */}
      <AnimatedLineStyled>
        <AnimatedScoreGroup delay={13} />
        <AnimatedBillGroup delay={24} />
        <AnimatedTicker delay={37} />
      </AnimatedLineStyled>

      {/* Button skip this */}
      <ButtonWrapperStyled>
        <LinkComponent
          linkTypes="skipLink"
          href={DEFAULT_HEADER_URL.SIGN_UP.URL}
          text="Skip This"
          iconRightUrl="/icons/chevron-right.svg"
        />
      </ButtonWrapperStyled>
    </SecondaryLayout>
  )
}

export default LandingPage
