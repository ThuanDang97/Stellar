import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import Storybook from '@storybook/react'

// Components
import ResetPasswordForm from '@components/ResetPasswordForm'

// Constants
import { PASS_NOT_MATCH } from '@constants/errorMessage'

// Utils
import { checkPasswordRules, checkStatusPassword } from '@utils/validation'

// Props type
import { ResetPassword } from '@self-types/components/ResetPasswordForm.props'

export default {
  title: 'Components/ResetPasswordForm',
  component: ResetPasswordForm,
} as Storybook.ComponentMeta<typeof ResetPasswordForm>

const resetPass: ResetPassword = {
  newPassword: '',
  confirmPassword: '',
}

const Template: Storybook.ComponentStory<typeof ResetPasswordForm> = (args) => {
  const [password, setPassword] = useState(resetPass)
  const [statusPassword, setStatusPassword] = useState('')
  const [isNewPassword, setIsNewPassword] = useState(true)
  const [errorMess, setErrorMessage] = useState('')

  /**
   * Get input value and check rules password
   */
  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const inputValues = { [e.target.name]: e.target.value }
      setPassword((prev) => ({
        ...prev,
        ...inputValues,
      }))

      if (inputValues.newPassword) {
        const errorCase = checkPasswordRules(inputValues.newPassword)
        const statusPass = checkStatusPassword(errorCase)
        if (statusPass.status) {
          setStatusPassword(statusPass.status)
          setIsNewPassword(false)
        } else {
          setIsNewPassword(true)
        }
      } else if (
        inputValues.newPassword === '' ||
        inputValues.confirmPassword === ''
      ) {
        setIsNewPassword(true)
        setErrorMessage('')
      }
    },
    [],
  )

  /**
   * Handle password when changed completed
   */
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (password.newPassword !== password.confirmPassword) {
        setErrorMessage(PASS_NOT_MATCH)
      } else {
        setErrorMessage('')
        setTimeout(() => {
          alert('Successfully !')
        }, 1000)
      }
    },
    [password],
  )

  return (
    <ResetPasswordForm
      {...args}
      isNewPassword={isNewPassword}
      statusNewPassword={statusPassword}
      newPassword={password.newPassword}
      confirmPassword={password.confirmPassword}
      handleChangePassword={handleChangePassword}
      errorMessage={errorMess}
      onSubmit={handleSubmit}
    />
  )
}

export const FormResetPassword = Template.bind({})
