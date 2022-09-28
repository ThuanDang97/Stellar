import React from 'react'
import { Story } from '@storybook/react'

// Components
import AnimatedTicker from '@components/AnimatedTicker'

// Layouts
import { SecondaryLayout } from '@layouts/LayoutStyled'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/AnimatedTicker',
  component: AnimatedTicker,
}

const Template: Story = () => (
  <SecondaryLayout alignItems="center" justifyContent="center">
    <ViewStyled display="flex" justifyContent="center" alignItems="center">
      <AnimatedTicker delay={3} />
    </ViewStyled>
  </SecondaryLayout>
)
export const DefaultAnimatedTicker = Template.bind({})
