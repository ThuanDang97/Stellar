import React, { ChangeEvent, FormEvent, useState } from 'react'
import Storybook from '@storybook/react'
import { useRouter } from 'next/router'

// Components
import AddressForm from '@components/AddressForm'

// Constants
import { REGEX_REMOVE_BRACKETS } from '@constants/regex'
import { PRIMARY_HEADER_URL } from '@constants/routes'
import { PHONE_ERROR_LENGTH } from '@constants/errorMessage'

// Utils
import { formatPhoneNumber } from '@utils/index'

export default {
  title: 'Components/AddressForm',
  component: AddressForm,
} as Storybook.ComponentMeta<typeof AddressForm>

const Template: Storybook.ComponentStory<typeof AddressForm> = (args) => {
  const router = useRouter()
  const [addressAccount, setAddressAccount] = useState({
    address: '',
    phone: '',
  })

  const [errorMessage, setErrorMessage] = useState('')

  const [currentPhoneNumber, setCurrentPhoneNumber] = useState('')

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('')
    const nameInput = e.target.name
    const valueInput = e.target.value
    setAddressAccount({ ...addressAccount, [nameInput]: valueInput })
    if (nameInput === 'phone') {
      setCurrentPhoneNumber(
        formatPhoneNumber(valueInput).replace(REGEX_REMOVE_BRACKETS, ''),
      )
      setAddressAccount((prev) => ({
        ...prev,
        phone: formatPhoneNumber(valueInput),
      }))
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    if (currentPhoneNumber.length !== 10) {
      setErrorMessage(PHONE_ERROR_LENGTH)
    } else {
      router.push(PRIMARY_HEADER_URL.DASHBOARD.URL)
    }
  }

  return (
    <AddressForm
      {...args}
      address={addressAccount.address}
      phone={addressAccount.phone}
      handleChangeValue={handleChangeValue}
      onSubmit={onSubmit}
      errorMessage={errorMessage}
    />
  )
}

export const Default = Template.bind({})
