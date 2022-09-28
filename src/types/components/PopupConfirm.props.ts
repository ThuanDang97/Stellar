export interface PopupConfirmProps {
  isOpen: boolean
  textConfirm?: string
  onClose: () => void
  handleDelete?: () => void
}

export enum ConfirmPopupType {
  DELETE_GOAL = 'DELETE_GOAL',
  DELETE_LINK_BILL = 'DELETE_LINK_BILL',
  DELETE_BILL = 'DELETE_BILL',
}
