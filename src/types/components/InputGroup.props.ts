import { ChangeEvent } from 'react'
import { InputTypeProps } from '@self-types/components/Input.props'

export interface InputGroupPropType {
  type: InputTypeProps
  name: string
  placeholder: string
  label?: string
  hasIcon?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  onBlur?: () => void
  statusPassword?: string
  error?: string
  isStraightLine?: boolean
  mTop?: number
  mBottom?: number
  isLogin?: boolean
  iconUrl?: string
}
