import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import AnimatedLineBill from '@components/AnimatedLineBill'
import { ViewStyled } from '@components/styled-components'

// Layouts
import { SecondaryLayout } from '@layouts/LayoutStyled'

export default {
  title: 'Components/AnimatedLineBill',
  component: AnimatedLineBill,
  decorators: [
    (Story) => (
      <SecondaryLayout>
        <ViewStyled width="50%">
          <Story />
        </ViewStyled>
      </SecondaryLayout>
    ),
  ],
} as ComponentMeta<typeof AnimatedLineBill>

const Template: ComponentStory<typeof AnimatedLineBill> = (args) => (
  <AnimatedLineBill {...args} />
)

export const DefaultAnimatedLineBill = Template.bind({})
DefaultAnimatedLineBill.args = {
  delay: 0,
}

export const DelayAnimatedLineBill = Template.bind({})
DelayAnimatedLineBill.args = {
  delay: 2,
}
