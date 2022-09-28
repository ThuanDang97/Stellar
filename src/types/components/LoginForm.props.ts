import { ChangeEvent, FormEvent } from 'react'

export interface LoginFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  handleChangeEmail?: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangePassword?: (e: ChangeEvent<HTMLInputElement>) => void
  email: string
  password: string
  errorMessage?: {
    email: string
    password: string
  }
}
