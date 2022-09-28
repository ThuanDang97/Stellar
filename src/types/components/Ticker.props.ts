export interface TickerProps {
  size: number
  duration: number
  firstNumber: number
  secondNumber?: number
  delay?: number
}

export interface TickerDigitProps {
  fontSize: number
}

export interface TickerColumnProps {
  slideSecondNumber: boolean
  firstPosition: number
  secondPosition?: number
  duration: number
  delay: number
}
