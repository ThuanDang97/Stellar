import React from 'react'
import { Story } from '@storybook/react'

// Themes
import { theme } from '@themes/index'

// Components
import SubscriptionLaunch from '@components/SubscriptionLaunch'

// Utils
import { pxToRem } from '@utils/theme'

// Type prop
import { SubscriptionLaunchProps } from '@self-types/components/SubscriptionLaunch.props'

// Components
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/SubscriptionLauch',
  component: SubscriptionLaunch,
}

const Template: Story<SubscriptionLaunchProps> = (args) => {
  return (
    <ViewStyled
      display="flex"
      bgColor={theme.colors.black}
      justifyContent="center"
      padding={pxToRem(theme.metrics.dimensions.md)}
      maxWidth={360}
    >
      <SubscriptionLaunch {...args} />
    </ViewStyled>
  )
}

export const Default = Template.bind({})
