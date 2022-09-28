export type ShadowTypeProps =
  | 'small'
  | 'regular'
  | 'large'
  | 'badgeReadyShow'
  | 'badgeDefaultShow'
  | 'normal'

export type ViewProps = {
  position?: string
  width?: number | string
  bgColor?: string
  height?: number
  pHorizontal?: number
  pTop?: number
  pBottom?: number
  pLeft?: number
  pRight?: number
  mVertical?: number
  mHorizontal?: number
  mTop?: number
  mBottom?: number
  mLeft?: number
  mRight?: number
  top?: number
  bottom?: number
  left?: number
  right?: number
  display?: string
  flex?: number | string
  gap?: number
  alignItems?: string
  alignSelf?: string
  justifyContent?: string
  flexWrap?: string
  listStyle?: string
  flexDirection?: string
  zIndex?: number
  border?: string
  borderRadius?: number
  shadowType?: ShadowTypeProps | string
  padding?: number | string
  minWidth?: number | string
  maxWidth?: number | string
  minHeight?: number | string
  maxHeight?: number
  cursor?: string
  textAlign?: string
  lineHeight?: number
  columnGap?: number
  overflow?: string
  margin?: number | string
  lineColor?: string
  duration?: number
  borderBottom?: number | string
  fadeInOut?: string
  overflowY?: string
  borderTop?: number | string
  pointerEvents?: string
  mTopMobile?: number
  nameTable?: string
}

export type DividerProps = {
  pBottom?: number
  lineColor?: string
  width?: string | number
}

export type BackDropProps = {
  isLocked: boolean
}
