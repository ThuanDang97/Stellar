import React, { memo, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { useTheme } from 'styled-components'

// Components
import LoadingIndicator from '@components/LoadingIndicator'

// Props type
import { PageLayoutProps } from '@self-types/layouts/pageLayout.props'

// Constants
import {
  DEFAULT_HEADER_URL,
  LOCAL_STORAGE_KEY,
  PUBLIC_ROUTES,
  SECONDARY_URL,
  USER_ENDPOINT,
  PRIMARY_HEADER_URL,
  HEADER_TYPES,
} from '@constants/index'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Types
import { IUser } from '@self-types/api'

// Utils
import { getLocalStorage } from '@utils/localStorage'
import { findItemMatchValue } from '@utils/index'

// Layouts
import Header from './Header'
import { PrimaryLayout } from './LayoutStyled'

const PageLayout = ({
  children,
  headerType,
  hasLoginBtn,
  hasArrow,
}: PageLayoutProps) => {
  const theme = useTheme()
  const router = useRouter()
  const { pathname } = router || {}

  const { userId } = useAuthContext()
  const { loading } = useLoadingContext()
  const { data: user, error } = useSWR<Omit<IUser, 'password'>>(
    userId ? USER_ENDPOINT(userId) : null,
  )
  const [authorized, setAuthorized] = useState(false)

  const authCheck = (url: string) => {
    const hasAccount = !getLocalStorage(LOCAL_STORAGE_KEY.IS_TOKEN)
    const isLandingPage = SECONDARY_URL.LANDING_PAGE.URL.includes(url)

    // Redirect to Login page with unauthorized user and
    // Landing page if not first user
    if (
      (!hasAccount && isLandingPage) ||
      (!userId && !findItemMatchValue({ data: PUBLIC_ROUTES, value: url }))
    ) {
      setAuthorized(false)

      router.push(DEFAULT_HEADER_URL.LOGIN.URL)
    } else {
      setAuthorized(true)
    }
  }

  useEffect(() => {
    authCheck(router.route)

    const hideContent = () => setAuthorized(false)

    // Hide page content on route change
    if (!userId) router.events.on('routeChangeStart', hideContent)

    router.events.on('routeChangeComplete', authCheck)

    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }
  }, [userId])

  // Check padding bottom when other secondary layout pages
  const isSecondaryLayoutPage =
    pathname === SECONDARY_URL.LANDING_PAGE.URL ||
    pathname === SECONDARY_URL.WELCOME.URL ||
    pathname === SECONDARY_URL.SUBSCRIPTION.URL

  const isDashboardPage = PRIMARY_HEADER_URL.DASHBOARD.URL === pathname

  if (!authorized) return null

  return (
    <>
      {headerType && (
        <Header
          HeaderType={headerType}
          {...(hasLoginBtn && {
            loginHref: DEFAULT_HEADER_URL.LOGIN.URL,
          })}
          {...(hasArrow && {
            showArrow: true,
          })}
          {...(headerType === 'primaryHeader' && {
            bgColor: theme.colors.firefly,
            pLeft: 0,
            pRight: 0,
            position: 'fixed',
            zIndex: 4,
          })}
          {...(user && !error && { userFullName: user.userName })}
        />
      )}

      <PrimaryLayout
        as="main"
        flexDirection="column"
        justifyContent="flex-start"
        {...(headerType && { pTop: 50 })}
        bgColor={
          headerType === 'defaultHeader'
            ? theme.colors.white
            : theme.colors.ironLight
        }
        pBottom={!isSecondaryLayoutPage ? theme.metrics.dimensions.xxl : 0}
        minHeight={
          isDashboardPage || headerType !== HEADER_TYPES.DEFAULT
            ? theme.metrics.layout.default
            : 'auto'
        }
      >
        {children}
      </PrimaryLayout>

      {loading && <LoadingIndicator />}
    </>
  )
}

export default memo(PageLayout)
