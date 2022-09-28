import { ChangeEvent, FormEvent } from 'react'

// Props types
import { OptionSelectProps } from './Select.props'

export interface EditLinkedBillFormProps {
  id: string
  amount: string
  bankName: string
  draftDate: number
  payPeriod: string
}

export interface ConnectAccount {
  email: string
  password: string
}

export interface EditLinkedBillProps {
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void
  handleChangeAmount?: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangeBankNumber: (item: string) => void
  handleChangePayByDay: (date: Date) => void
  handleChangePayByMonth: (item: string) => void
  editLinkedBillForm: EditLinkedBillFormProps
  appName?: string
  appImage?: string
  listBankNumber: OptionSelectProps[]
  status?: string
  isOpen: boolean
  onClose?: () => void
  billItem: string
  setBillItem: (active: string) => void
  onSubmitBill: (e: FormEvent<HTMLFormElement>) => Promise<void>
  isConnectAccount: boolean
  setIsConnectAccount: (isConnectAccount: boolean) => void
  loginConnectAccount: ConnectAccount
  handleChangeEmail?: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangePassword?: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmitConnectAccount: (e: FormEvent<HTMLFormElement>) => void
  newAppImage?: string
  newAppName?: string
  errorMessageConnectAccount?: ConnectAccount
}
