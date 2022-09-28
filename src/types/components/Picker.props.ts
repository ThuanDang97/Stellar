export interface PickerProps {
  isMinDate?: boolean
  isMaxDate?: boolean
  isMonthDropdown?: boolean
  isYearDropdown?: boolean
  onToday?: boolean
  lineColor?: string
  onChange: (date: Date) => void
  disabled?: boolean
  borderColor?: string
  mTop?: number
  defaultDate?: number
  mBottom?: number
}
