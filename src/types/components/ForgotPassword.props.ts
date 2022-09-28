import { ChangeEvent, FormEvent } from 'react'

export interface ForgotPasswordProps {
  textEmail: string
  errorMessage: string
  handleChangeEmail?: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void
}
