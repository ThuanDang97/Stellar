import { ChangeEvent, FormEvent } from 'react'

export interface ResetPasswordFormProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void
  handleChangePassword?: (e: ChangeEvent<HTMLInputElement>) => void
  newPassword: string
  confirmPassword: string
  errorMessage?: string
  isNewPassword: boolean
  statusNewPassword?: string
}

export interface ResetPassword {
  newPassword: string
  confirmPassword: string
}
