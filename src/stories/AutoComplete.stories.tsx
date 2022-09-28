import React, { useState } from 'react'
import { ComponentStory } from '@storybook/react'

// Components
import AutoComplete from '../components/AutoComplete'

export default {
  title: 'Components/AutoComplete',
  component: AutoComplete,
}

const Template: ComponentStory<typeof AutoComplete> = () => {
  const [billerItem, setBillerItem] = useState('')

  return <AutoComplete billerItem={billerItem} setBillerItem={setBillerItem} />
}

export const Default = Template.bind({})
