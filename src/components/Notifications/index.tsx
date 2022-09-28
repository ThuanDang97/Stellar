import { FC, memo } from 'react'
import { useTheme } from 'styled-components'

// Props types
import {
  NotificationProps,
  NotificationItemProps,
} from '@self-types/components/Notification.props'

// Components
import {
  ListItemStyled,
  ListStyled,
} from '@components/styled-components/ListStyled'
import {
  BoxShadowAnimationStyled,
  TextDescriptionStyled,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'

const Notifications: FC<NotificationProps> = ({
  notifPopupStatus,
  notificationList,
  handleUpdateNotificationId,
}) => {
  const theme = useTheme()

  return (
    <BoxShadowAnimationStyled
      data-testid="notificationsHeader"
      textAlign="center"
      flexDirection="column"
      alignItems="initial"
      flexWrap="wrap"
      position="absolute"
      width={theme.metrics.width.xl}
      bgColor={theme.colors.white}
      zIndex={4}
      top={50}
      right={80}
      duration={0.3}
      fadeInOut={notifPopupStatus}
      borderRadius={theme.metrics.borderRadius.default}
    >
      <ListStyled
        width={theme.metrics.width.full}
        maxHeight={300}
        overflowY="scroll"
        borderRadius={theme.metrics.borderRadius.default}
        display="none"
      >
        {notificationList.map((item: NotificationItemProps) => {
          const handleGetIdNotification = () =>
            handleUpdateNotificationId(item.id)

          return (
            <ListItemStyled
              textAlign="left"
              key={item.id}
              bgColorHover={theme.colors.ironLight}
              bgColor={
                item.isCheck ? theme.colors.white : theme.colors.silverLight
              }
              pTop={0}
              pBottom={0}
              onClick={handleGetIdNotification}
            >
              <ViewStyled
                borderBottom={1}
                display="flex"
                alignItems="initial"
                flexDirection="column"
                mLeft={theme.metrics.dimensions.sm}
                mRight={theme.metrics.dimensions.sm}
                pTop={theme.metrics.dimensions.base}
                pBottom={theme.metrics.dimensions.base}
              >
                <TextStyled
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.bold}
                  textAlign="left"
                >
                  {item.title}
                </TextStyled>
                <TextDescriptionStyled
                  color={theme.colors.shark}
                  textAlign="left"
                  maxWidth={200}
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  overflow="hidden"
                >
                  {item.desc}
                </TextDescriptionStyled>

                <TextDescriptionStyled
                  color={theme.colors.shark}
                  textAlign="left"
                >
                  {item.dateTime}
                </TextDescriptionStyled>
              </ViewStyled>
            </ListItemStyled>
          )
        })}
      </ListStyled>
    </BoxShadowAnimationStyled>
  )
}

export default memo(Notifications)
