import React from 'react'
import { Story } from '@storybook/react'

// Components
import AnimatedText from '@components/AnimatedText'

// Layouts
import { SecondaryLayout } from '@layouts/LayoutStyled'

export default {
  title: 'Components/AnimatedText',
  component: AnimatedText,
}

const Template: Story = () => (
  <SecondaryLayout overflow="hidden">
    <AnimatedText />
  </SecondaryLayout>
)
export const DefaultAnimatedText = Template.bind({})
