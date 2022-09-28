import { ChangeEvent, FormEvent } from 'react'

export interface IdentityFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeDayOfBirth: (date: Date) => void
  isEnableButton?: boolean
  firstName: string
  lastName: string
  error?: string
}
