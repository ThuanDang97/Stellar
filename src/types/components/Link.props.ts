import { UrlObject } from 'url'

// Props types
import { TextProps } from '@self-types/components/Text.props'

export interface LinkProps {
  fontFamily?: string
  color?: string
  fontSize?: number
  textAlign?: string
  lineHeight?: number
  letterSpacing?: number
  fontWeight?: string | number
  textDecoration?: string
  height?: number
  pTop?: number
  pBottom?: number
  pLeft?: number
  pRight?: number
  mTop?: number
  mBottom?: number
  mLeft?: number
  mRight?: number
  bgColor?: string
  colorActive?: string
  mCenter?: string
}

export type LinkTypesProps =
  | 'primaryLink'
  | 'secondaryLink'
  | 'skipLink'
  | 'continueLink'
  | 'unLockLink'
  | 'supportLink'
  | 'loginLink'
  | 'forgotPasswordLink'
  | 'supportLinkUnderline'
export interface LinkStyledProps extends TextProps {
  linkTypes?: LinkTypesProps
  width?: number
  iconLeftUrl?: string
  iconRightUrl?: string
  borderRadius?: number
  onClick?: () => void
  cursor?: string
  opacity?: number
  padding?: number
}

export interface LinkComponentProps extends TextProps {
  href: string | UrlObject
  text?: string
  linkTypes?: LinkTypesProps
  iconLeftUrl?: string
  iconRightUrl?: string
  width?: number
  padding?: number
  onClick?: () => void
}
