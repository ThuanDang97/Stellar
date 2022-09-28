export interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  onClose?: () => void
  maxWidth?: number
  pBottom?: number
  mLeft?: number
  mRight?: number
  minWidth?: number
}
