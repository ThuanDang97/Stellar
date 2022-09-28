export interface OptionSelectProps {
  value: string
  name: string
}
export type SelectProps = {
  handleSelect: (value: string) => void
  listOption: OptionSelectProps[]
  color?: string
  width?: number | string
  fontSize?: number
  pBottom?: number
  defaultValue?: string
  readOnly?: boolean
  borderColor?: string
}

export type SelectToggle = {
  isEnable?: boolean
  borderColor?: string
  mBottom?: number
  disabled?: boolean
}
