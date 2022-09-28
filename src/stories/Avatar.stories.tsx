import React from 'react'
import { Story } from '@storybook/react'

// Components
import Avatar from '@components/Avatar'

// Props type
import { AvatarProps } from '@self-types/components/Avatar.props'

// Mocks
import { USER_FULL_NAME } from '@mocks/mockData'

export default {
  title: 'Components/Avatar',
  component: Avatar,
}

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const AvatarComponent = Template.bind({})
AvatarComponent.args = {
  fullName: USER_FULL_NAME,
}

export const AvatarImage = Template.bind({})
AvatarImage.args = {
  imageUrl: 'https://picsum.photos/20',
}
