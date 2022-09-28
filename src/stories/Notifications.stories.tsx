import React, { useCallback, useMemo, useState } from 'react'
import { Story } from '@storybook/react'
import { useTheme } from 'styled-components'

// Components
import Notifications from '@components/Notifications'
import Button from '@components/Button'
import { WrapperAvatarStyled } from '@layouts/Header/HeaderStyled'

// Props type
import {
  NotificationItemProps,
  NotificationProps,
} from '@self-types/components/Notification.props'

// Mocks
import { NOTIFICATIONS } from '@mocks/mockData'
import { MENU_STATUS } from '@constants/variables'

export default {
  title: 'Components/Notifications',
  component: Notifications,
}

const Template: Story<NotificationProps> = () => {
  const theme = useTheme()

  const [notifPopupStatus, setNotifPopupStatus] = useState<string>()
  const [count, setCount] = useState(NOTIFICATIONS.length)
  const [idNotif, setIdNotification] = useState('')

  // Show notification When Click Icon Notification
  const handleToggleNotifications = () => {
    setCount(0)
    if (notifPopupStatus === MENU_STATUS.FADE_IN) {
      setNotifPopupStatus(MENU_STATUS.FADE_OUT)
    } else {
      setNotifPopupStatus(MENU_STATUS.FADE_IN)
    }
  }

  // Handle get dd notification
  const handleUpdateNotificationId = useCallback(
    (id: string) => {
      setIdNotification(id)
    },
    [idNotif],
  )

  const listNotificationUpdate: NotificationItemProps[] = useMemo(() => {
    NOTIFICATIONS.forEach((item) => {
      if (item.id === idNotif) {
        NOTIFICATIONS[Number(idNotif) - 1].isCheck = true
      }
    })
    return NOTIFICATIONS
  }, [idNotif])

  return (
    <WrapperAvatarStyled
      columnGap={theme.metrics.dimensions.base}
      display="flex"
      position="relative"
      justifyContent="flex-end"
    >
      <Button
        onClick={handleToggleNotifications}
        imgUrl="/icons/bell.svg"
        width={theme.metrics.icons.default}
        height={theme.metrics.icons.default}
        size="default"
        count={count}
      />
      <Button
        variant="light"
        imgUrl="/icons/bell.svg"
        width={theme.metrics.icons.default}
        height={theme.metrics.icons.default}
        size="medium"
      />
      <Notifications
        handleUpdateNotificationId={handleUpdateNotificationId}
        notifPopupStatus={notifPopupStatus}
        notificationList={listNotificationUpdate}
      />
    </WrapperAvatarStyled>
  )
}

export const NotificationHeader = Template.bind({})
