import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import Banner from '@components/Banner'

export default {
  title: 'Components/Banner',
  component: Banner,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          width: '40%',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Banner>

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />

export const PartyBanner = Template.bind({})
PartyBanner.args = {
  isLinkBill: true,
}

export const WellcomeBanner = Template.bind({})
WellcomeBanner.args = {
  isLinkBill: false,
}
