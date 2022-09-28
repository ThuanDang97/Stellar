import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import AnimatedScoreGroup from '@components/AnimatedScoreGroup'
import { ViewStyled } from '@components/styled-components'

// Layouts
import { SecondaryLayout } from '@layouts/LayoutStyled'

export default {
  title: 'Components/AnimatedScoreGroup',
  component: AnimatedScoreGroup,
  decorators: [
    (Story) => (
      <SecondaryLayout>
        <ViewStyled width="60%">
          <Story />
        </ViewStyled>
      </SecondaryLayout>
    ),
  ],
} as ComponentMeta<typeof AnimatedScoreGroup>

const Template: ComponentStory<typeof AnimatedScoreGroup> = (args) => (
  <AnimatedScoreGroup {...args} />
)

export const DefaultAnimatedScoreGroup = Template.bind({})
DefaultAnimatedScoreGroup.args = {
  delay: 0,
}

export const DelayAnimatedScoreGroup = Template.bind({})
DelayAnimatedScoreGroup.args = {
  delay: 2,
}
