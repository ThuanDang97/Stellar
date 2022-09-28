import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

// Constants
import {
  HEADER_NAVIGATION,
  HEADER_TYPES,
  LOCAL_STORAGE_KEY,
  MENU_STATUS,
  PRIMARY_HEADER_URL,
  SECONDARY_URL,
} from '@constants/index'

// Props type
import { HeaderProps } from '@self-types/index'
import { NotificationItemProps } from '@self-types/components/Notification.props'

// Mocks
import { NOTIFICATIONS } from '@mocks/mockData'

// Utils
import { getLocalStorage } from '@utils/localStorage'

// Components
import HeaderNav from '@components/HeaderNav'
import Avatar from '@components/Avatar'
import Button from '@components/Button'
import LinkComponent from '@components/Link'
import { Container, ViewStyled } from '@components/styled-components'
import MenuProfile from '@components/MenuProfile'
import Notifications from '@components/Notifications'
import { HeaderStyled, LogoStyled, WrapperAvatarStyled } from './HeaderStyled'

const Header = ({
  HeaderType,
  avatarUrl,
  userFullName = '',
  bgColor,
  showArrow,
  loginHref,
  pLeft,
  pRight,
  pTop,
  pBottom,
  isLandingPage,
  position,
  isArrowLight,
  zIndex,
}: HeaderProps) => {
  const router = useRouter()
  const theme = useTheme()
  const wrapperRef = useRef<HTMLInputElement>(null)
  const wrapperRefNotif = useRef<HTMLInputElement>(null)
  const [menuStatus, setMenuStatus] = useState<string>('none')
  const [notifPopupStatus, setNotifPopupStatus] = useState<string>('none')
  const [count, setCount] = useState(NOTIFICATIONS.length)
  const [idNotif, setIdNotification] = useState('')
  const [innerWidth, setInnerWidth] = useState(window.screen.width)

  const handleGoBack = () => {
    const hasAccount = getLocalStorage(LOCAL_STORAGE_KEY.IS_TOKEN)
    if (!hasAccount) {
      router.push(SECONDARY_URL.LANDING_PAGE.URL)
    } else {
      router.back()
    }
  }

  // Go to dashboard page when click logo on header
  const handleGoHomePage = () => {
    router.push(PRIMARY_HEADER_URL.DASHBOARD.URL)
    if (router.pathname === PRIMARY_HEADER_URL.DASHBOARD.URL) router.reload()
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        if (menuStatus === MENU_STATUS.FADE_IN) {
          setMenuStatus(MENU_STATUS.NONE)
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef, menuStatus])

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRefNotif &&
        wrapperRefNotif.current &&
        !wrapperRefNotif.current.contains(event.target as Node)
      ) {
        if (notifPopupStatus === MENU_STATUS.FADE_IN) {
          setNotifPopupStatus(MENU_STATUS.NONE)
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRefNotif, notifPopupStatus])

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.screen.width)
    }
    // Add event  and remove event resize screen
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Show menu when click avatar on header
  const handleToggleMenu = () => {
    if (menuStatus === MENU_STATUS.FADE_IN) {
      setMenuStatus(MENU_STATUS.FADE_OUT)
    } else {
      setMenuStatus(MENU_STATUS.FADE_IN)
    }
  }

  // Show notification when click icon notification
  const handleToggleNotifications = () => {
    setCount(0)
    if (notifPopupStatus === MENU_STATUS.FADE_IN) {
      setNotifPopupStatus(MENU_STATUS.FADE_OUT)
    } else {
      setNotifPopupStatus(MENU_STATUS.FADE_IN)
    }
  }

  // Handle Get Id Notification
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

  const isMobile = innerWidth <= theme.metrics.breakPoints.xs

  return (
    <HeaderStyled
      as="header"
      position={position}
      width={theme.metrics.width.full}
      pLeft={pLeft ?? theme.metrics.dimensions.xxl}
      pRight={pRight ?? theme.metrics.dimensions.xxl}
      pTop={pTop ?? theme.metrics.dimensions.sm}
      pBottom={pBottom ?? theme.metrics.dimensions.sm}
      bgColor={bgColor}
      zIndex={zIndex}
      {...(isLandingPage && { delay: 1 })}
    >
      <Container
        textAlign="center"
        display="flex"
        justifyContent="space-between"
        maxWidth={theme.metrics.breakPoints.xxl}
        margin="0 auto"
      >
        {HeaderType === HEADER_TYPES.DEFAULT && (
          <>
            <ViewStyled display="flex" justifyContent="flex-start" width="15%">
              {showArrow && (
                <Button
                  variant="icon"
                  height={theme.metrics.dimensions.md}
                  width={theme.metrics.dimensions.md}
                  imgUrl={
                    isArrowLight
                      ? '/icons/chevron-left-light.svg'
                      : '/icons/chevron-left.svg'
                  }
                  onClick={handleGoBack}
                />
              )}
            </ViewStyled>
            <ViewStyled width="70%">
              <Image
                height={theme.metrics.dimensions.lg}
                width={theme.metrics.dimensions.lg}
                src="/images/logo.svg"
              />
            </ViewStyled>
            <ViewStyled display="flex" justifyContent="flex-end" width="15%">
              {loginHref && (
                <LinkComponent
                  width={theme.metrics.width.common}
                  linkTypes="loginLink"
                  href={loginHref}
                  text="Login"
                  {...(isLandingPage && { color: theme.colors.white })}
                />
              )}
            </ViewStyled>
          </>
        )}
        {HeaderType === HEADER_TYPES.PRIMARY && (
          <>
            <ViewStyled display="flex">
              <LogoStyled
                display="flex"
                alignItems="center"
                mRight={theme.metrics.dimensions.xxl}
                onClick={handleGoHomePage}
              >
                <Image
                  src="/images/stellar.png"
                  width={theme.metrics.width.xmd}
                  height={theme.metrics.height.default}
                />
              </LogoStyled>
              {!isMobile && <HeaderNav headerNavList={HEADER_NAVIGATION} />}
            </ViewStyled>
            <WrapperAvatarStyled
              columnGap={theme.metrics.dimensions.base}
              display="flex"
              position="relative"
            >
              <ViewStyled ref={wrapperRefNotif}>
                <Button
                  variant="light"
                  onClick={handleToggleNotifications}
                  imgUrl="/icons/bell.svg"
                  width={theme.metrics.icons.default}
                  height={theme.metrics.icons.default}
                  size="medium"
                  count={count}
                  mTop={theme.metrics.dimensions.sm}
                />

                <Notifications
                  notifPopupStatus={notifPopupStatus}
                  notificationList={listNotificationUpdate}
                  handleUpdateNotificationId={handleUpdateNotificationId}
                />
              </ViewStyled>
              <ViewStyled ref={wrapperRef}>
                <Avatar
                  imageUrl={avatarUrl}
                  {...(!avatarUrl &&
                    userFullName && { fullName: userFullName })}
                  handleToggleMenu={handleToggleMenu}
                />
                <MenuProfile
                  menuStatus={menuStatus}
                  setMenuStatus={setMenuStatus}
                  fullName={userFullName}
                  imageUrl={avatarUrl}
                />
              </ViewStyled>
            </WrapperAvatarStyled>
          </>
        )}
      </Container>
      {isMobile && HeaderType === HEADER_TYPES.PRIMARY && (
        <HeaderNav isMobile={isMobile} headerNavList={HEADER_NAVIGATION} />
      )}
    </HeaderStyled>
  )
}

export default memo(Header)
