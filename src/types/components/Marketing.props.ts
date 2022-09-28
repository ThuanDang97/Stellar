export interface MarketingProps {
  handleContinueButton?: () => void
  isActive?: boolean
  setSelectedItem: (selectedItem: string[]) => void
  selectedItem: string[]
}

export interface MarkettingItemProps {
  id: string
  title: string
}
