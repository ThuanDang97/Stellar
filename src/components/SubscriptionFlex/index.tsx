import { memo } from 'react'
import { useTheme } from 'styled-components'

// Props Type
import { SubscriptionFlexProps } from '@self-types/components/SubscriptionFlex.props'

// Utils
import { pxToRem } from '@utils/theme'

// Constants
import { SUBSCRIPTION_FLEX_DESCRIPTION } from '@constants/text'
import { FLEX_LIST_FEATURE } from '@constants/variables'

// Components
import Button from '@components/Button'
import { TextStyled, ViewStyled } from '@components/styled-components'
import Title from '@components/Title'
import {
  ListItemStyled,
  ListStyled,
} from '@components/styled-components/ListStyled'
import PlanFeature from '@components/PlanFeature'

const SubscriptionFlex = ({ handleClickChooseFlex }: SubscriptionFlexProps) => {
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
        lineHeight={theme.typography.fontSize.xlg}
        color={theme.colors.shark}
        fontFamily="AdobeCleanExtraBold"
        title="Flex"
      />
      <TextStyled
        fontSize={theme.typography.fontSize.md}
        lineHeight={theme.typography.fontSize.md}
        color={theme.colors.shark}
        pBottom={theme.metrics.dimensions.md}
        pTop={theme.metrics.dimensions.sm}
      >
        Pro Features
      </TextStyled>
      <TextStyled
        fontSize={theme.typography.fontSize.xss}
        lineHeight={theme.typography.fontSize.common}
        color={theme.colors.cello}
        pBottom={theme.metrics.dimensions.xl}
        letterSpacing={theme.typography.letterSpacing.xxl}
        maxWidth={260}
      >
        {SUBSCRIPTION_FLEX_DESCRIPTION}
      </TextStyled>
      <Title
        headingLevel="p"
        title="$24.99"
        fontSize={theme.typography.fontSize.xl}
        lineHeight={theme.typography.fontSize.xl}
        color={theme.colors.frenchRose}
        fontFamily="AdobeCleanExtraBold"
        letterSpacing={theme.typography.letterSpacing.xl}
      />
      <TextStyled
        fontSize={theme.typography.fontSize.xss}
        lineHeight={theme.typography.fontSize.xss}
        color={theme.colors.shark}
        pTop={theme.metrics.dimensions.sm}
      >
        per month
      </TextStyled>
      <ListStyled
        pTop={theme.metrics.dimensions.md}
        pBottom={theme.metrics.dimensions.lg}
        width={theme.metrics.width.full}
      >
        {FLEX_LIST_FEATURE.map((item) => (
          <ListItemStyled
            key={`subscription-flex-${item.feature}`}
            bgColor="none"
          >
            <PlanFeature
              title={item.feature}
              type={item.isActive ? 'bold' : 'normal'}
            />
          </ListItemStyled>
        ))}
      </ListStyled>
      <Button
        mBottom={theme.metrics.dimensions.md}
        onClick={handleClickChooseFlex}
        title="Choose Flex"
      />
    </ViewStyled>
  )
}

export default memo(SubscriptionFlex)
