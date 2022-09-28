import React from 'react'
import { useTheme } from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import {
  ListItemStyled,
  ListStyled,
} from '@components/styled-components/ListStyled'
import Button from '@components/Button'
import PlanFeature from '@components/PlanFeature'
import { TextStyled, ViewStyled } from '@components/styled-components'
import Title from '@components/Title'

// Constants
import { LIST_LAUNCH_FEATURE } from '@constants/variables'
import { SUBSCRIPTION_LAUNCH_DESCRIPTION } from '@constants/text'

// Props type
import { SubscriptionLaunchProps } from '@self-types/components/SubscriptionLaunch.props'

const SubscriptionLaunch = ({
  handleClickChooseLaunch,
}: SubscriptionLaunchProps) => {
  const theme = useTheme()

  return (
    <ViewStyled
      as="section"
      padding={pxToRem(theme.metrics.dimensions.lg)}
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="initial"
      bgColor={theme.colors.white}
    >
      <Title
        headingLevel="h2"
        pTop={theme.metrics.dimensions.xs}
        fontSize={theme.typography.fontSize.xlg}
        color={theme.colors.shark}
        title="Launch"
        fontFamily="AdobeCleanExtraBold"
        lineHeight={theme.typography.fontSize.xlg}
      />
      <TextStyled
        pTop={theme.metrics.dimensions.sm}
        pBottom={theme.metrics.dimensions.md}
        fontSize={theme.typography.fontSize.md}
        lineHeight={theme.typography.fontSize.md}
        color={theme.colors.shark}
      >
        Basic Features
      </TextStyled>
      <TextStyled
        fontSize={theme.typography.fontSize.xss}
        lineHeight={theme.typography.fontSize.common}
        color={theme.colors.cello}
        pBottom={theme.metrics.dimensions.xl}
        maxWidth={260}
      >
        {SUBSCRIPTION_LAUNCH_DESCRIPTION}
      </TextStyled>
      <Title
        headingLevel="p"
        fontFamily="AdobeCleanExtraBold"
        fontSize={theme.typography.fontSize.xl}
        lineHeight={theme.typography.fontSize.xl}
        color={theme.colors.frenchRose}
        title="$9.99"
      />

      <TextStyled
        fontSize={theme.typography.fontSize.xss}
        lineHeight={theme.typography.fontSize.xss}
        color={theme.colors.shark}
        pTop={theme.metrics.dimensions.xs}
      >
        per month
      </TextStyled>
      <TextStyled
        color={theme.colors.frenchRose}
        mTop={theme.metrics.dimensions.sm}
        fontSize={theme.typography.fontSize.md}
      >
        First Month Free
      </TextStyled>
      <ListStyled
        pTop={theme.metrics.dimensions.md}
        pBottom={theme.metrics.dimensions.lg}
        width={theme.metrics.width.full}
      >
        {LIST_LAUNCH_FEATURE.map((item) => (
          <ListItemStyled
            bgColor="none"
            bgColorHover={theme.colors.ironLight}
            key={`subscription-launch-${item.feature}`}
          >
            <PlanFeature
              title={item.feature}
              type={item.isActive ? 'bold' : 'normal'}
            />
          </ListItemStyled>
        ))}
      </ListStyled>
      <Button title="Choose Launch" onClick={handleClickChooseLaunch} />
    </ViewStyled>
  )
}

export default React.memo(SubscriptionLaunch)
