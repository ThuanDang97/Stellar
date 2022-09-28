// Library
import React from 'react'

export interface ButtonProps {
  onClick?: () => void
  variant?:
    | 'colorDefault'
    | 'primary'
    | 'noBorder'
    | 'noBackground'
    | 'light'
    | 'disabled'
    | 'danger'
    | 'dark'
    | 'icon'
    | 'warning'
    | 'half-circle'
  title?: React.ReactNode
  label?: string
  size?: 'default' | 'medium' | 'large' | 'noPadding'
  imgUrl?: string
  disabled?: boolean
  width?: number
  height?: number
  btnWidth?: number | string
  btnHeight?: number
  letterSpacing?: number
  cursor?: string
  type?: 'button' | 'submit' | 'reset'
  mTop?: number
  borderColor?: string
  mBottom?: number
  color?: string
  bgColor?: string
  padding?: number
  fontSize?: number
  mLeft?: number
  fontWeight?: number
  textAlign?: string
  count?: number
  top?: number
  bgColorHover?: string
  mLeftMobile?: number
  titleHover?: string
}
