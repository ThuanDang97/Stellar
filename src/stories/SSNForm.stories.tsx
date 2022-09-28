import React, { ChangeEvent, FormEvent, useState } from 'react'
import Storybook from '@storybook/react'
import { useRouter } from 'next/router'

// Components
import SSNForm from '@components/SSNForm'

// Constants
import { REGEX_REMOVE_BRACKETS } from '@constants/regex'
import { PRIMARY_HEADER_URL } from '@constants/routes'
import { INVALID_SSN } from '@constants/errorMessage'

// Utils
import { formatSSN } from '@utils/index'

export default {
  title: 'Components/SSNForm',
  component: SSNForm,
} as Storybook.ComponentMeta<typeof SSNForm>

const Template: Storybook.ComponentStory<typeof SSNForm> = (args) => {
  const router = useRouter()
  const [securityNumber, setSecurityNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [currentSSN, setCurrentSSN] = useState('')

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')
    const valueInput = e.target.value
    setCurrentSSN(formatSSN(valueInput).replace(REGEX_REMOVE_BRACKETS, ''))
    setSecurityNumber(formatSSN(valueInput))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    if (currentSSN.length !== 9) {
      setErrorMessage(INVALID_SSN)
    } else {
      router.push(PRIMARY_HEADER_URL.DASHBOARD.URL)
    }
  }

  return (
    <SSNForm
      {...args}
      securityNumber={securityNumber}
      handleChangeValue={handleChangeValue}
      onSubmit={onSubmit}
      errorMessage={errorMessage}
    />
  )
}

export const Default = Template.bind({})
