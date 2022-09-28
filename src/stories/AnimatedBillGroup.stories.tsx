import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import AnimatedBillGroup from '@components/AnimatedBillGroup'
import { ViewStyled } from '@components/styled-components'

// Layouts
import { SecondaryLayout } from '@layouts/LayoutStyled'

export default {
  title: 'Components/AnimatedBillGroup',
  component: AnimatedBillGroup,
  decorators: [
    (Story) => (
      <SecondaryLayout>
        <ViewStyled width="60%" display="flex" justifyContent="center">
          <Story />
        </ViewStyled>
      </SecondaryLayout>
    ),
  ],
} as ComponentMeta<typeof AnimatedBillGroup>

const Template: ComponentStory<typeof AnimatedBillGroup> = (args) => (
  <AnimatedBillGroup {...args} />
)

export const DefaultAnimatedBillGroup = Template.bind({})
DefaultAnimatedBillGroup.args = {
  delay: 0,
}

export const DelayAnimatedBillGroup = Template.bind({})
DelayAnimatedBillGroup.args = {
  delay: 2,
}
