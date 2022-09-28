import { ChangeEvent, FormEvent } from 'react'

export interface SignUpAccount {
  userName: string
  email: string
  password: string
  countBill?: number
}

export interface ErrorMsgs {
  email?: string
  password?: string
}
export interface SignUpFormProps {
  userName: string
  email: string
  password: string
  isEnableButton?: boolean
  passwordStatus?: string
  emailError?: string
  passwordError?: string
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void
  handleChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface ValidationResult {
  isValid?: boolean
  status?: string
  error?: {
    email?: string
    password?: string
  }
}
