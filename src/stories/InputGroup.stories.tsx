import React, { ChangeEvent, useState } from 'react'
import Storybook from '@storybook/react'

// Components
import InputGroup from '@components/InputGroup'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
} as Storybook.ComponentMeta<typeof InputGroup>

const Template: Storybook.ComponentStory<typeof InputGroup> = (args) => {
  const [valueInput, setValueInput] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
  }

  return (
    <ViewStyled maxWidth={400}>
      <InputGroup {...args} onChange={handleChange} value={valueInput} />
    </ViewStyled>
  )
}

export const GroupInputWithLabel = Template.bind({})
GroupInputWithLabel.args = {
  type: 'text',
  name: 'SSN',
  label: 'SSN',
  placeholder: '000-00-000',
}
