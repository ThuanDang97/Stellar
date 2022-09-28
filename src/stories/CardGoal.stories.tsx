import React from 'react'
import { Story } from '@storybook/react'

// Components
import CardGoal from '@components/CardGoal'

// Props type
import { CardGoalProps } from '@self-types/components/CardGold.props'

// Mock data
import { GOAL_ITEM } from '../__mocks__/mockData'

export default {
  title: 'Components/CardGoal',
  component: CardGoal,
}

const Template: Story<CardGoalProps> = (args) => <CardGoal {...args} />

export const CardGoalBase = Template.bind({})
CardGoalBase.args = {
  iconUrl: GOAL_ITEM.iconUrl,
  title: GOAL_ITEM.title,
}

export const CardGoalActive = Template.bind({})
CardGoalActive.args = {
  iconUrl: GOAL_ITEM.iconUrl,
  title: GOAL_ITEM.title,
  isActive: true,
}
