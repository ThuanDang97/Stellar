import { ChangeEvent, FormEvent } from 'react'
import { AutoCompleteProps } from './AutoComplete.props'

export interface AddBillModalProps extends AutoCompleteProps {
  isOpen: boolean
  onClose?: () => void
  onClick?: () => void
  amount: string
  handleChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}
