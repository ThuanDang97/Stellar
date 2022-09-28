import React, { ChangeEvent, useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import { formatStringToCurrency } from '@utils/index'
import AddBillModal from '../components/AddBillModal'

export default {
  title: 'Components/AddBillModal',
  component: AddBillModal,
} as ComponentMeta<typeof AddBillModal>

const Template: ComponentStory<typeof AddBillModal> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [amount, setAmount] = useState('')
  const [billerItem, setBillerItem] = useState('')
  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(formatStringToCurrency(e.target.value))
  }

  return (
    <>
      <button type="submit" onClick={() => setIsOpen(true)}>
        Click to open modal
      </button>
      <AddBillModal
        handleChangeValue={handleChangeValue}
        amount={amount}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        billerItem={billerItem}
        setBillerItem={setBillerItem}
      />
    </>
  )
}

export const DefaultModal = Template.bind({})
