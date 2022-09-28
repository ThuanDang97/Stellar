import { FC, memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import {
  BackDropPointLocker,
  BoxShadowStyled,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'
import {
  EndBaseLineStyled,
  MiddleBaseLineStyled,
  StartBaseLineStyled,
  LineScoreStyled,
  ArrowDownStyled,
} from '@components/styled-components/LineStyled'
import { TextFadeInScoreStyled } from '@components/AnimatedText/AnimatedTextStyled'
import Ticker from '@components/Ticker'
import Title from '@components/Title'
import Link from '@components/Link'
import PlaceholderItem from '@components/PlaceholderItem'

// Props type
import { FicoScoreProps } from '@self-types/components/FicoScoreProps.props'

// Utils
import { handleCalFicoScore } from '@utils/index'
import { pxToRem } from '@utils/theme'

// Constants
import { OPACITY_BLUR, OPACITY_BOLD } from '@constants/index'

// Styles
import { AnimatedButtonUnlock } from '../../../styles/pages/DashBoardPageStyled'

const FicoScore: FC<FicoScoreProps> = ({
  isLocked,
  currentFicoScore,
  dateUpdated,
  minScore,
  maxScore,
}) => {
  const theme = useTheme()

  const locked = isLocked ? OPACITY_BLUR : OPACITY_BOLD

  const ficoScore = handleCalFicoScore(currentFicoScore)

  return (
    <BoxShadowStyled
      shadowType="normal"
      position="relative"
      width={theme.metrics.width.full}
      bgColor={theme.colors.white}
      minHeight={150}
      padding={`${
        isLocked
          ? `${pxToRem(theme.metrics.dimensions.xl)}`
          : `${pxToRem(theme.metrics.dimensions.md)}`
      } ${pxToRem(theme.metrics.dimensions.xlg)}`}
    >
      {isLocked && (
        <>
          {isLocked && (
            <AnimatedButtonUnlock
              position="absolute"
              mLeft={8}
              zIndex={theme.metrics.zIndex.low}
            >
              <Link
                href="/free-credit-score"
                text="Unlock Credit Score"
                linkTypes="unLockLink"
                iconLeftUrl="/icons/unlock.svg"
                width={230}
              />
            </AnimatedButtonUnlock>
          )}
          <BackDropPointLocker
            isLocked
            display="flex"
            alignItems="flex-start"
            width={260}
            position="relative"
            zIndex={theme.metrics.zIndex.under}
          >
            <TextStyled
              fontSize={theme.typography.fontSize.xxl}
              lineHeight={theme.typography.lineHeight.md}
              color={theme.colors.mercury}
            >
              728
            </TextStyled>
            <ViewStyled mLeft={theme.metrics.dimensions.lg}>
              <PlaceholderItem width={90} height={15} />
              <PlaceholderItem
                width={theme.metrics.width.lg}
                height={13}
                mTop={theme.metrics.dimensions.sm}
              />
            </ViewStyled>
          </BackDropPointLocker>
        </>
      )}
      {!isLocked && (
        <ViewStyled display="flex" position="relative">
          <Ticker
            size={53}
            firstNumber={currentFicoScore}
            duration={1}
            delay={0.1}
          />
          <ViewStyled
            display="flex"
            flexDirection="column"
            alignItems="initial"
            mLeft={theme.metrics.dimensions.base}
          >
            <ViewStyled display="flex">
              <Title
                headingLevel="h2"
                fontWeight={theme.typography.fontWeight.bold}
                color={theme.colors.black}
                fontSize={theme.typography.fontSize.lg}
                lineHeight={theme.typography.lineHeight.md}
                textAlign="left"
                title="FICO"
              />
              <Title
                headingLevel="h2"
                color={theme.colors.black}
                fontSize={theme.typography.fontSize.lg}
                fontFamily="AdobeCleanLight"
                title=" SCORE 8"
                fontWeight={theme.typography.fontWeight.base}
              />
            </ViewStyled>

            <TextStyled
              color={theme.colors.cello}
              fontSize={theme.typography.fontSize.xss}
              fontFamily="AdobeCleanLight"
              textAlign="left"
              lineHeight={theme.metrics.dimensions.tiny}
              letterSpacing={theme.typography.letterSpacing.xs}
            >
              {dateUpdated}
            </TextStyled>
          </ViewStyled>
        </ViewStyled>
      )}

      <ViewStyled
        display="flex"
        mTop={theme.metrics.dimensions.xl}
        position="relative"
      >
        {!isLocked && (
          <TextStyled
            as="p"
            color={theme.colors.black}
            fontSize={theme.typography.fontSize.base}
            position="absolute"
            left={-25}
            mTop={-4}
          >
            {minScore}
          </TextStyled>
        )}
        <StartBaseLineStyled
          bgColor={theme.colors.white}
          lineColor={theme.colors.pomegranate}
          width={51}
          height={7}
          border={3}
          mLeft={4}
          opacity={locked}
        />
        <MiddleBaseLineStyled
          bgColor={theme.colors.white}
          width={16}
          lineColor={theme.colors.pizzaz}
          opacity={locked}
          height={7}
          border={3}
        />
        <MiddleBaseLineStyled
          bgColor={theme.colors.white}
          width={14}
          lineColor={theme.colors.supernova}
          position="relative"
          opacity={locked}
          height={7}
          border={3}
        />
        <EndBaseLineStyled
          bgColor={theme.colors.white}
          width={20}
          lineColor={theme.colors.caribbeanGreen}
          position="relative"
          opacity={locked}
          height={7}
          border={3}
        />

        <>
          <LineScoreStyled
            width={isLocked ? 14 : 100 - ficoScore.percentLineScore}
            opacity={0.7}
          />
          {!isLocked && (
            <>
              <TextStyled
                as="p"
                color={theme.colors.black}
                fontSize={theme.typography.fontSize.base}
                position="absolute"
                left={theme.metrics.width.full}
                mLeft={4}
                mTop={-4}
              >
                {maxScore}
              </TextStyled>
              <ArrowDownStyled
                left={ficoScore.positionFicoScore}
                lineColor={ficoScore.color}
                delay={1}
              >
                <TextFadeInScoreStyled
                  color={ficoScore.color}
                  fontSize={theme.typography.fontSize.xs}
                  mBottom={theme.metrics.dimensions.xs}
                  duration={0.3}
                >
                  {ficoScore.text}
                </TextFadeInScoreStyled>
              </ArrowDownStyled>
            </>
          )}
        </>
      </ViewStyled>
    </BoxShadowStyled>
  )
}

export default memo(FicoScore)
