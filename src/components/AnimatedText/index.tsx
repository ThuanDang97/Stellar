import { memo } from 'react'

// Components
import { ViewStyled } from '@components/styled-components'
import Image from 'next/image'

// Themes
import { useTheme } from 'styled-components'

// Styles
import {
  TextFadeInTopStyled,
  TextFadeInBottomStyled,
  TextFadeOutStyled,
  ImageSlideInStyled,
  LogoResponsiveLandingPage,
} from './AnimatedTextStyled'
import { TitleLandingPageStyled } from '../../../styles/pages/LandingPageStyled'

const AnimatedText = () => {
  const theme = useTheme()
  return (
    <>
      <ViewStyled
        position="absolute"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <TextFadeOutStyled>
          <LogoResponsiveLandingPage
            position="relative
          "
          >
            <Image layout="fill" src="/images/stellar.png" alt="stellar-logo" />
          </LogoResponsiveLandingPage>
        </TextFadeOutStyled>
        <TextFadeInBottomStyled delay={8}>
          <TextFadeOutStyled delay={11} duration={1}>
            <TitleLandingPageStyled
              fontWeight={theme.typography.fontWeight.bold}
              color={theme.colors.white}
              as="h1"
            >
              Bad credit weighs you down.
            </TitleLandingPageStyled>
          </TextFadeOutStyled>
        </TextFadeInBottomStyled>
        <TextFadeInTopStyled delay={4}>
          <TextFadeOutStyled delay={7} duration={1}>
            <TitleLandingPageStyled
              fontWeight={theme.typography.fontWeight.bold}
              color={theme.colors.white}
              as="h1"
            >
              Good credit lifts you up.
            </TitleLandingPageStyled>
          </TextFadeOutStyled>
        </TextFadeInTopStyled>
      </ViewStyled>
      <ImageSlideInStyled delay={1}>
        <Image
          src="/images/earth.png"
          layout="fill"
          objectFit="contain"
          alt="earth"
        />
      </ImageSlideInStyled>
    </>
  )
}

export default memo(AnimatedText)
