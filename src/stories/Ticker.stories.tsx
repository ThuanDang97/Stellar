import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import Ticker from '@components/Ticker'

export default {
  title: 'Components/Ticker',
  component: Ticker,
  decorators: [
    (Story) => (
      <div
        style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Ticker>

const Template: ComponentStory<typeof Ticker> = (args) => <Ticker {...args} />

export const LandingPageTicker = Template.bind({})
LandingPageTicker.args = {
  size: 50,
  firstNumber: 679,
  secondNumber: 752,
  duration: 2,
}

export const DashboardTicker = Template.bind({})
DashboardTicker.args = {
  size: 50,
  firstNumber: 752,
  duration: 2,
}
