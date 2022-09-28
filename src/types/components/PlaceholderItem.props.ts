type PlaceholderType = 'rect' | 'text' | 'textRow' | 'media' | 'round'

export type PlaceholderItemProps = {
  width?: number
  height?: number
  type?: PlaceholderType
  mTop?: number
  children?: JSX.Element
}
