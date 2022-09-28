import React, { ChangeEvent, useState } from 'react'
import Storybook from '@storybook/react'

// Components
import Input from '@components/Input'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/Input',
  component: Input,
} as Storybook.ComponentMeta<typeof Input>

const iconLock = '/icons/lock'

const Template: Storybook.ComponentStory<typeof Input> = (args) => {
  const [valueInput, setValueInput] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
  }

  return (
    <ViewStyled maxWidth={400}>
      <Input {...args} onChange={handleChange} value={valueInput} />
    </ViewStyled>
  )
}

export const InputNoIconComponent = Template.bind({})
InputNoIconComponent.args = {
  type: 'text',
  placeholder: 'Money',
  value: '$15.99',
}

export const InputEmailIconComponent = Template.bind({})
InputEmailIconComponent.args = {
  type: 'email',
  placeholder: 'Enter your email address',
  iconUrl: '/icons/envelope',
}

export const InputFullNameIconComponent = Template.bind({})
InputFullNameIconComponent.args = {
  type: 'text',
  placeholder: 'Full Name',
  iconUrl: '/icons/person',
}

export const InputNoAfter = Template.bind({})
InputNoAfter.args = {
  type: 'text',
  placeholder: 'Last Name',
  value: 'Cooper',
  iconUrl: '/icons/person',
}

export const InputCheckPassword = Template.bind({})
InputCheckPassword.args = {
  type: 'password',
  placeholder: 'Password',
  iconUrl: iconLock,
}

export const GroupInputCheckPasswordWeak = Template.bind({})
GroupInputCheckPasswordWeak.args = {
  type: 'password',
  placeholder: 'Password',
  statusPassword: 'weak',
  value: '123123',
  iconUrl: iconLock,
}

export const GroupInputCheckPasswordMedium = Template.bind({})
GroupInputCheckPasswordMedium.args = {
  type: 'password',
  placeholder: 'Password',
  statusPassword: 'medium',
  value: '123123',
  iconUrl: iconLock,
}

export const GroupInputCheckPasswordStrong = Template.bind({})
GroupInputCheckPasswordStrong.args = {
  type: 'password',
  placeholder: 'Password',
  statusPassword: 'strong',
  value: '123123',
  iconUrl: iconLock,
}

export const GroupInputPasswodLogin = Template.bind({})
GroupInputPasswodLogin.args = {
  type: 'password',
  isLogin: true,
  placeholder: 'Password',
  value: '123123',
  iconUrl: '/icons/lock',
}
