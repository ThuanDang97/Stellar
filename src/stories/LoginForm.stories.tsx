import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import Storybook from '@storybook/react'

// Components
import LoginForm from '@components/LoginForm'

// Constants
import { INVALID_EMAIL_OR_PASSWORD, PRIMARY_HEADER_URL } from '@constants/index'
import { ACCOUNT_LOGIN } from '@mocks/mockData'

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
} as Storybook.ComponentMeta<typeof LoginForm>

const Template: Storybook.ComponentStory<typeof LoginForm> = (args) => {
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
  })
  const [loginAccount, setLoginAccount] = useState({
    email: '',
    password: '',
  })
  const router = useRouter()

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage({
      email: '',
      password: '',
    })
    setLoginAccount({ ...loginAccount, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    const account = ACCOUNT_LOGIN.find(
      (item) => item.email === loginAccount.email,
    )

    if (!account) {
      setErrorMessage((prev) => ({
        ...prev,
        email: INVALID_EMAIL_OR_PASSWORD,
        password: INVALID_EMAIL_OR_PASSWORD,
      }))
    } else if (account.password !== loginAccount.password) {
      setErrorMessage((prev) => ({
        ...prev,
        password: INVALID_EMAIL_OR_PASSWORD,
      }))
    } else {
      router.push(PRIMARY_HEADER_URL.DASHBOARD.URL)
    }
  }

  return (
    <LoginForm
      {...args}
      email={loginAccount.email}
      password={loginAccount.password}
      handleChangeEmail={handleChangeValue}
      handleChangePassword={handleChangeValue}
      onSubmit={onSubmit}
      errorMessage={errorMessage}
    />
  )
}

export const Default = Template.bind({})
