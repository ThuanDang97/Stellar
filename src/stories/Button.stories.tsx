// Library
import React from 'react'
import Storybook from '@storybook/react'

// Components
import Button from '@components/Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Storybook.ComponentMeta<typeof Button>

const Template: Storybook.ComponentStory<typeof Button> = (args) => (
  <Button title="Submit" {...args} />
)

export const Default = Template.bind({})
Default.args = {
  size: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'danger',
  size: 'medium',
}

export const LightThemed = Template.bind({})
LightThemed.args = {
  variant: 'light',
  size: 'medium',
}

export const DarkThemed = Template.bind({})
DarkThemed.args = {
  variant: 'dark',
  size: 'medium',
}

export const Disabled = Template.bind({})
Disabled.args = {
  size: 'medium',
  disabled: true,
}

export const IconButtonPlus = Template.bind({})
IconButtonPlus.args = {
  variant: 'danger',
  size: 'medium',
  imgUrl: '/icons/plus.svg',
}
