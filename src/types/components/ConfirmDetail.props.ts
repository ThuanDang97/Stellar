import { ChangeEvent, FormEvent } from 'react'
import { OptionSelectProps } from './Select.props'

export interface ConfirmDetailFormProps {
  amount: string
  bankName: string
  draftDate: number
  payPeriod: string
}

export interface ConfirmDetailProps {
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void
  handleChangeAmount?: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeBankNumber: (item: string) => void
  handleChangePayByDay: (date: Date) => void
  handleChangePayByMonth: (item: string) => void
  confirmDetailForm: ConfirmDetailFormProps
  appName?: string
  appImage?: string
  listBankNumber: OptionSelectProps[]
}
