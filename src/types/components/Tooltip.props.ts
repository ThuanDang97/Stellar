import { ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
  bgColor?: string
  title: string
  titleColor?: string
}

export interface TooltipStyledProps {
  bgColor?: string
  titleColor?: string
}
