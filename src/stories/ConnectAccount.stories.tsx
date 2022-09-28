import React, { ChangeEvent, useState, FormEvent } from 'react'
import { Story } from '@storybook/react'

// Components
import ConnectAccountForm from '@components/ConnectAccountForm'
import { ViewStyled } from '@components/styled-components'

// Props type
import { ConnectAccountProps } from '@self-types/components/ConnectAccount.props'

// Mocks
import { ACCOUNT_LOGIN } from '@mocks/mockData'

// Constants
import { EMAIL_NOT_EXIST, INVALID_PASSWORD } from '@constants/errorMessage'

export default {
  title: 'Components/ConnectAccountForm',
  component: ConnectAccountForm,
}

const Template: Story<ConnectAccountProps> = () => {
  const [errorMess, setErrorMessage] = useState({
    email: '',
    password: '',
  })
  const [loginAccount, setLoginAccount] = useState({
    email: '',
    password: '',
  })

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage({
      email: '',
      password: '',
    })
    setLoginAccount({ ...loginAccount, [e.target.name]: e.target.value })
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    const account = ACCOUNT_LOGIN.find(
      (item) => item.email === loginAccount.email,
    )

    if (!account) {
      setErrorMessage((prev) => ({
        ...prev,
        email: EMAIL_NOT_EXIST,
        password: INVALID_PASSWORD,
      }))
    } else if (account.password !== loginAccount.password) {
      setErrorMessage((prev) => ({
        ...prev,
        password: INVALID_PASSWORD,
      }))
    } else {
      alert('Successfully !')
    }
  }

  return (
    <ViewStyled maxWidth={375}>
      <ConnectAccountForm
        email={loginAccount.email}
        password={loginAccount.password}
        handleChangeEmail={handleChangeValue}
        handleChangePassword={handleChangeValue}
        handleSubmit={handleSubmitForm}
        errorMessage={errorMess}
        nameApplication="Netflix"
        imageApplication="/images/netflix.png"
      />
    </ViewStyled>
  )
}

export const ConnectAccountComponent = Template.bind({})
