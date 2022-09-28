import { memo } from 'react'

// Components
import { ViewStyled } from '@components/styled-components'
import Ticker from '@components/Ticker'
import LinkComponent from '@components/Link'

// Themes
import { useTheme } from 'styled-components'

// Props type
import { AnimationComponentProps } from '@self-types/components/Animation.props'

// Constants
import { DEFAULT_HEADER_URL } from '@constants/routes'
import { ANIMATION_TICKER_TITLE } from '@constants/animation'

// Styles
import { ContentWrapper, TitleWrapperStyled } from './AnimatedTickerStyled'
import { TitleLandingPageStyled } from '../../../styles/pages/LandingPageStyled'

const AnimatedTicker = ({ delay = 0 }: AnimationComponentProps) => {
  const theme = useTheme()

  return (
    <ContentWrapper delay={delay}>
      {/* Ticker animation */}
      <ViewStyled display="flex" flexDirection="column">
        <TitleWrapperStyled delay={delay}>
          {ANIMATION_TICKER_TITLE.map((title) => (
            <TitleLandingPageStyled
              key={title}
              fontSize={theme.typography.fontSize.xlg}
              fontWeight={theme.typography.fontWeight.bold}
              color={theme.colors.white}
              letterSpacing={theme.typography.letterSpacing.xxl}
              lineHeight={theme.typography.lineHeight.lg}
              as="h1"
            >
              {title}
            </TitleLandingPageStyled>
          ))}
        </TitleWrapperStyled>

        <Ticker
          size={70}
          firstNumber={679}
          secondNumber={752}
          duration={2}
          delay={delay}
        />
      </ViewStyled>

      {/* Switch Off animation */}
      <ViewStyled display="flex" flexDirection="column">
        <TitleLandingPageStyled
          fontSize={theme.typography.fontSize.xlg}
          fontWeight={theme.typography.fontWeight.bold}
          color={theme.colors.white}
          letterSpacing={theme.typography.letterSpacing.xxl}
          lineHeight={theme.typography.lineHeight.lg}
          as="h1"
        >
          Switch off the gravity holding down your score.
        </TitleLandingPageStyled>

        <LinkComponent
          href={DEFAULT_HEADER_URL.SIGN_UP.URL}
          linkTypes="continueLink"
          text="Continue"
          width={315}
          mTop={theme.metrics.dimensions.xxl}
        />
      </ViewStyled>
    </ContentWrapper>
  )
}

export default memo(AnimatedTicker)
