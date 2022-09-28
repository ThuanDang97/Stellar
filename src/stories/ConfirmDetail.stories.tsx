import React, {
  ChangeEvent,
  useState,
  FormEvent,
  useCallback,
  useMemo,
} from 'react'
import { Story } from '@storybook/react'

// Components
import ConfirmDetailForm from '@components/ConfirmDetailForm'

// Utils
import { getLastFourDigitsString } from '@utils/index'

// Props type
import { ConfirmDetailProps } from '@self-types/components/ConfirmDetail.props'

// Mocks
import { INFO_PAYMENTS, LIST_BANKS_NUMBER } from '@mocks/mockData'

export default {
  title: 'Components/ConfirmDetailForm',
  component: ConfirmDetailForm,
}

const Template: Story<ConfirmDetailProps> = () => {
  const [confirmDetailData, setConfirmDetailFrom] = useState({
    amount: INFO_PAYMENTS.money,
    bankName: INFO_PAYMENTS.bankName,
    draftDate: INFO_PAYMENTS.payDate.getDate(),
    payPeriod: INFO_PAYMENTS.numberPaymentsMonth,
  })

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmDetailFrom((prev) => {
      return { ...prev, money: e.target.value }
    })
  }

  const handleChangeBankNumber = (value: string) => {
    setConfirmDetailFrom((prev) => {
      return { ...prev, bankNumber: value }
    })
  }

  const handleChangePayByMonth = (value: string) => {
    setConfirmDetailFrom((prev) => {
      return { ...prev, numberPaymentsMoth: value }
    })
  }

  const handleChangePayByDay = useCallback((date: Date) => {
    setConfirmDetailFrom((prev) => {
      return { ...prev, payDate: date.getDate() }
    })
  }, [])
  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (confirmDetailData) {
      alert('Confirm Successfully !')
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

  return (
    <ConfirmDetailForm
      confirmDetailForm={confirmDetailData}
      handleChangeAmount={handleChangeAmount}
      handleChangeBankNumber={handleChangeBankNumber}
      handleChangePayByMonth={handleChangePayByMonth}
      handleSubmit={handleSubmitForm}
      handleChangePayByDay={handleChangePayByDay}
      listBankNumber={listBankAccountUpdate}
      appName="Netflix"
      appImage="/images/netflix.png"
    />
  )
}

export const ConfirmDetailFormComponent = Template.bind({})
