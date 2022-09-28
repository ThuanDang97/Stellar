import { SelectItemProps } from './CardGold.props'

export interface GoalModalProps extends SelectItemProps {
  isOpen: boolean
  onClose?: () => void
  onClick?: () => void
}
