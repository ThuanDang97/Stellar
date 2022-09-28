import React from 'react'
import { Story } from '@storybook/react'

// Components
import FicoScore from '@components/FicoScore'

// Props type
import { FicoScoreProps } from '@self-types/components/FicoScoreProps.props'

export default {
  title: 'Components/FicoScore',
  component: FicoScore,
}

const Template: Story<FicoScoreProps> = (args) => {
  return <FicoScore {...args} />
}

export const FicoScoreComponent = Template.bind({})
FicoScoreComponent.args = {
  isLocked: true,
  currentFicoScore: 708,
  dateUpdated: 'Last Updated Aug, 12, 2021',
  minScore: 300,
  maxScore: 850,
}
