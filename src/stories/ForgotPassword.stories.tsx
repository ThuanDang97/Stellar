import React, { ChangeEvent, useState, FormEvent } from 'react'
import { Story } from '@storybook/react'
// Components
import ForgotPassword from '@components/ForgotPassword'

// Props type
import { ValidateProps } from '@self-types/components/Validate.props'
import { ForgotPasswordProps } from '@self-types/components/ForgotPassword.props'

// Utils
import { checkValidate } from '@utils/validation'

// Constants
import { INVALID_EMAIL, REGEX_EMAIL } from '@constants/index'

// Mocks
import { EXITS_EMAIL } from '@mocks/mockData'

export default {
  title: 'Components/ForgotPassword',
  component: ForgotPassword,
}

const Template: Story<ForgotPasswordProps> = () => {
  const [valueInput, setValueInput] = useState('')
  const [errorMess, setErrorMessage] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueInput(e.target.value)
  }

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (valueInput) {
      const param: ValidateProps = {
        value: valueInput,
        regex: REGEX_EMAIL,
        errorMess: INVALID_EMAIL,
      }
      setErrorMessage(checkValidate(param))
    }
    if (valueInput !== EXITS_EMAIL) {
      setErrorMessage(INVALID_EMAIL)
    } else {
      setErrorMessage('')
      setTimeout(() => {
        alert('Successfully !')
      }, 1000)
    }
  }

  return (
    <ForgotPassword
      handleChangeEmail={handleChange}
      textEmail={valueInput}
      errorMessage={errorMess}
      handleSubmit={handleSubmitForm}
    />
  )
}

export const ForgotPasswordComponent = Template.bind({})
