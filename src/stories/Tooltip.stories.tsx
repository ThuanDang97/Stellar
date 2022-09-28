import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Tooltip from '../components/Tooltip'
import { TOOLTIP_LOREM } from '../__mocks__/mockData'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div
        style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const DefaultTooltip = Template.bind({})
DefaultTooltip.args = {
  children: <img src="icons/question-circle-fill.svg" />,
  title: TOOLTIP_LOREM,
}
