import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import AnimatedLineScore from '@components/AnimatedLineScore'
import { ViewStyled } from '@components/styled-components'

// Layouts
import { SecondaryLayout } from '@layouts/LayoutStyled'

export default {
  title: 'Components/AnimatedLineScore',
  component: AnimatedLineScore,
  decorators: [
    (Story) => (
      <SecondaryLayout>
        <ViewStyled width="60%">
          <Story />
        </ViewStyled>
      </SecondaryLayout>
    ),
  ],
} as ComponentMeta<typeof AnimatedLineScore>

const Template: ComponentStory<typeof AnimatedLineScore> = (args) => (
  <AnimatedLineScore {...args} />
)

export const DefaultAnimatedLineScore = Template.bind({})
DefaultAnimatedLineScore.args = {
  delay: 0,
}

export const DelayAnimatedLineScore = Template.bind({})
DelayAnimatedLineScore.args = {
  delay: 2,
}
