import { ChangeEvent, FormEvent } from 'react'

export interface ConnectAccountProps {
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void
  handleChangeEmail?: (e: ChangeEvent<HTMLInputElement>) => void
  handleChangePassword?: (e: ChangeEvent<HTMLInputElement>) => void
  onCloseConnectAccountForm?: () => void
  email: string
  password: string
  errorMessage?: {
    email: string
    password: string
  }
  nameApplication?: string
  imageApplication?: string
  isShadowType?: boolean
  isEditModal?: boolean
}
