export interface NotificationItemProps {
  id: string
  title: string
  desc: string
  dateTime: string
  isCheck: boolean
}

export interface NotificationProps {
  notificationList: NotificationItemProps[]
  notifPopupStatus?: string
  handleUpdateNotificationId: (id: string) => void
}
