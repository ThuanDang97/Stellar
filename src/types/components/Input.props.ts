import { ChangeEvent } from 'react'
import { DefaultTheme } from 'styled-components'

export type InputTypeProps = 'password' | 'text' | 'email' | 'tel'

export type InputLevelProps = 'weak' | 'medium' | 'strong'

export type InputWrapperProps = {
  sizeLine: number
  lineColor?: string | undefined
  theme: DefaultTheme
  lineTop?: number
}

export type InputLineBottomProps = {
  level: InputLevelProps
  borderColor?: string
  mLeft?: number
  mRight?: number
}

export type InputProps = {
  color?: string
  fontSize?: number
  height?: number
  width?: number | undefined
  flex?: string
  bgColor?: string
  borderRadius?: number
  borderWidth?: number
  borderColor?: string
  minHeight?: string
  textAlign?: string
  mTop?: number
  mBottom?: number
  mLeft?: number
  mRight?: number
  pTop?: number
  pBottom?: number
  borderBottomWidth?: number
  borderTopWidth?: number
  borderLeftWidth?: number
  borderRightWidth?: number
  pLeft?: number
  pRight?: number
  fontFamily?: string
  lineHeight?: string
  placeholderColor?: string
  letterSpacing?: number
  borderStyle?: string
  type?: InputTypeProps
  error?: string
  value?: string
  name?: string
  iconUrl?: string
  statusPassword?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  isStraightLine?: boolean
  isLogin?: boolean
  lineTop?: number
  readOnly?: boolean
  maxLength?: number
  autocomplete?: 'on' | 'off'
  mTopIcon?: number
}
