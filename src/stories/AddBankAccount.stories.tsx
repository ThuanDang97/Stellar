import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { useRouter } from 'next/router'

// Components
import AddBankAccount from '@components/AddBankAccount'
import { SECONDARY_URL } from '@constants/routes'

// Props type
import {
  AddBankAccountProps,
  BankNumberType,
} from '@self-types/components/AddBankAccount.props'

// Mocks
import { NUMBER_BANK } from '@mocks/mockData'

export default {
  title: 'Components/AddBankAccount',
  component: AddBankAccount,
}

const Template: Story<AddBankAccountProps> = (args) => {
  const router = useRouter()
  const [bankNumbers, setBankNumbers] = useState<BankNumberType[]>([])

  const handleAddBankAccount = () => {
    const listBankAcc: BankNumberType[] = []
    listBankAcc.push(NUMBER_BANK[0])
    setBankNumbers(listBankAcc)
  }
  const handleSubmitContinue = () => {
    setTimeout(() => {
      router.push(SECONDARY_URL.SUBSCRIPTION.URL)
    }, 1000)
  }
  return (
    <AddBankAccount
      {...args}
      handleAddBankAccount={handleAddBankAccount}
      bankNumbers={bankNumbers}
      handleSubmitContinue={handleSubmitContinue}
    />
  )
}

export const AddBankComponent = Template.bind({})
