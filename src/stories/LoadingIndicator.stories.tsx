import React from 'react'
import { Story } from '@storybook/react'

// Components
import LoadingIndicator from '@components/LoadingIndicator'

export default {
  title: 'Components/LoadingIndicator',
  component: LoadingIndicator,
}

export const LoadingIndicatorComponent: Story = (args) => (
  <LoadingIndicator {...args} />
)
