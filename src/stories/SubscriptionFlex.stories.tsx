import { Story } from '@storybook/react'

// Themes
import { theme } from '@themes/index'

// Props type
import { SubscriptionFlexProps } from '@self-types/components/SubscriptionFlex.props'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import { ViewStyled } from '@components/styled-components'
import SubscriptionFlex from '@components/SubscriptionFlex'

export default {
  title: 'Components/SubscriptionFlex',
  component: SubscriptionFlex,
}

const Template: Story<SubscriptionFlexProps> = (args) => (
  <ViewStyled
    display="flex"
    justifyContent="center"
    bgColor={theme.colors.black}
    padding={pxToRem(theme.metrics.dimensions.md)}
    maxWidth={360}
  >
    <SubscriptionFlex {...args} />
  </ViewStyled>
)

export const Default = Template.bind({})
