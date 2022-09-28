import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { Story } from '@storybook/react'

// Props Type
import {
  ErrorMsgs,
  SignUpAccount,
  SignUpFormProps,
} from '@self-types/components/SignUpForm.props'

// Utils
import {
  checkPasswordRules,
  checkStatusPassword,
  signUpValidate,
} from '@utils/validation'

// Components
import SignUpForm from '@components/SignUpForm'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/SignUpForm',
  component: SignUpForm,
}

const signUp: SignUpAccount = {
  userName: '',
  email: '',
  password: '',
}

const errorMsgs: ErrorMsgs = {
  email: '',
  password: '',
}

const Template: Story<SignUpFormProps> = () => {
  const [signUpAccount, setSignUpAccount] = useState(signUp)
  const [passwordStatus, setPasswordStatus] = useState<string>('')
  const [error, setError] = useState<ErrorMsgs>(errorMsgs)

  /**
   * Check enable button SignUp
   * @returns true/false
   */
  const isEnableButton = !!(
    signUpAccount.userName &&
    signUpAccount.email &&
    signUpAccount.password
  )

  /**
   * Get input value and check rules password
   */
  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const inputValues = { [e.target.name]: e.target.value }
      const errorCase = checkPasswordRules(inputValues.password)
      const statusPassword = checkStatusPassword(errorCase)

      setSignUpAccount((prev) => ({
        ...prev,
        ...inputValues,
      }))

      if (inputValues.password && statusPassword.status) {
        setPasswordStatus(statusPassword.status)
      }

      if (inputValues.password === '') {
        setPasswordStatus('')
      }

      setError(errorMsgs)
    },
    [],
  )

  /**
   * Function submit form SignUp
   */
  const onSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e?.preventDefault()
      const signUpFormValidate = signUpValidate(signUpAccount)

      if (!signUpFormValidate.isValid && signUpFormValidate.error) {
        setError(signUpFormValidate.error)
      } else {
        alert('Successfully !')
      }
    },
    [signUpAccount],
  )

  return (
    <ViewStyled width={380}>
      <SignUpForm
        userName={signUpAccount.userName}
        email={signUpAccount.email}
        password={signUpAccount.password}
        isEnableButton={isEnableButton}
        emailError={error.email}
        passwordError={error.password}
        passwordStatus={passwordStatus}
        handleChangeInput={handleChangeInput}
        handleSubmit={onSubmitForm}
      />
    </ViewStyled>
  )
}

export const SignUp = Template.bind({})
