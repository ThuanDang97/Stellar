import { ChangeEvent, FormEvent } from 'react'

export interface AddressFormProps {
  errorMessage?: string
  handleChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void
  address: string
  phone: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}
