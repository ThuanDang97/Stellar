import { ViewProps } from '@self-types/components/View.props'

export type TitleProps = {
  title: string
}

export interface TickerPositions {
  firstNumberPos: {
    first: number
    second: number
    third: number
  }
  secondNumPos?: {
    first: number
    second: number
    third: number
  }
}

export type HeaderTypeProps = 'defaultHeader' | 'primaryHeader'

export interface HeaderProps extends ViewProps {
  HeaderType: HeaderTypeProps
  avatarUrl?: string
  userFullName?: string
  showArrow?: boolean
  loginHref?: string
  isLandingPage?: boolean
  isArrowLight?: boolean
}
