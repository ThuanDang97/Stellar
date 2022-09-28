import { ChangeEvent, FormEvent } from 'react'

export interface SSNFormProps {
  errorMessage?: string
  handleChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void
  securityNumber: string
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
}
