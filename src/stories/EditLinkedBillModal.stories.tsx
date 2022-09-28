import React, {
  ChangeEvent,
  useState,
  FormEvent,
  useCallback,
  useMemo,
} from 'react'
import { Story } from '@storybook/react'

// Components
import EditLinkedBillModal from '@components/EditLinkedBillModal'

// Utils
import { getLastFourDigitsString } from '@utils/index'

// Props type
import { EditLinkedBillProps } from '@self-types/components/EditLinkedBillModal.props'

// Mocks
import {
  APPLICATION_CONNECT_ACCOUNT,
  INFO_PAYMENTS,
  LIST_BANKS_NUMBER,
} from '@mocks/mockData'

export default {
  title: 'Components/EditLinkedBillModal',
  component: EditLinkedBillModal,
}

const Template: Story<EditLinkedBillProps> = () => {
  const [editLinkedBillForm, setEditLinkedBillForm] = useState({
    id: INFO_PAYMENTS.id,
    amount: INFO_PAYMENTS.money,
    bankName: INFO_PAYMENTS.bankName,
    draftDate: INFO_PAYMENTS.payDate.getDate(),
    payPeriod: INFO_PAYMENTS.numberPaymentsMonth,
    email: '',
    password: '',
    imgUrl: '',
    description: '',
  })
  const [isOpen, setIsOpen] = useState(false)
  const [editBill, setEditBill] = useState('')
  const [isConnectAccount, setIsConnectAccount] = useState<boolean>(false)

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setEditLinkedBillForm((prev) => {
      return { ...prev, money: e.target.value }
    })
  }

  const handleChangeBankNumber = (value: string) => {
    setEditLinkedBillForm((prev) => {
      return { ...prev, bankNumber: value }
    })
  }

  const handleChangePayByMonth = (value: string) => {
    setEditLinkedBillForm((prev) => {
      return { ...prev, numberPaymentsMonth: value }
    })
  }

  const handleChangePayByDay = useCallback((date: Date) => {
    setEditLinkedBillForm((prev) => {
      return { ...prev, payDate: date.getDate() }
    })
  }, [])
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (editLinkedBillForm) {
      alert('Edit Linked Bill Successfully !')
    }
  }

  const listBankAccountUpdate = useMemo(() => {
    return LIST_BANKS_NUMBER.map((item) => {
      const subBankNumber = getLastFourDigitsString(item.bankNumber)
      return {
        value: item.bankNumber,
        name: `${item.id} Checking *${subBankNumber}`,
      }
    })
  }, [])

  const handleSubmitBill = async (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (editBill) {
      setIsConnectAccount(true)
    }
  }

  const handleSubmitEditConnectAccount = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()
    setIsConnectAccount(false)
  }

  return (
    <>
      <button type="submit" onClick={() => setIsOpen(true)}>
        Edit Linked Bill
      </button>
      <EditLinkedBillModal
        editLinkedBillForm={editLinkedBillForm}
        handleChangeAmount={handleChangeAmount}
        handleChangeBankNumber={handleChangeBankNumber}
        handleChangePayByMonth={handleChangePayByMonth}
        handleSubmit={handleSubmitForm}
        handleChangePayByDay={handleChangePayByDay}
        listBankNumber={listBankAccountUpdate}
        appName="Netflix"
        appImage="/images/netflix.png"
        status="PAID"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        billItem={editBill}
        setBillItem={setEditBill}
        onSubmitBill={handleSubmitBill}
        isConnectAccount={isConnectAccount}
        setIsConnectAccount={setIsConnectAccount}
        handleSubmitConnectAccount={handleSubmitEditConnectAccount}
        newAppImage="/images/netflix.png"
        newAppName="Netflix"
        loginConnectAccount={APPLICATION_CONNECT_ACCOUNT}
      />
    </>
  )
}

export const EditLinkedBillFormComponent = Template.bind({})
