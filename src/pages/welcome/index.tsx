import { useEffect } from 'react'
import Router from 'next/router'
import useSWR from 'swr'

// Components
import Image from 'next/image'
import { WrapperContent } from '@components/styled-components'
import { PageFadeOut } from '@components/styled-components/AnimatedPageStyled'
import Title from '@components/Title'

// Layouts
import { SecondaryLayout } from '@layouts/LayoutStyled'

// Themes
import { useTheme } from 'styled-components'

// Constants
import { PRIMARY_HEADER_URL, USER_ENDPOINT } from '@constants/index'

// Types
import { IUser } from '@self-types/api'

// Hooks
import { useAuthContext } from '@hooks/useAuthContext'

// Utils
import { getUserFirstName } from '@utils/index'
import { pxToRem } from '@utils/theme'

const Welcome = () => {
  const theme = useTheme()
  const { userId } = useAuthContext()

  const { data: user } = useSWR<Omit<IUser, 'password'>>(USER_ENDPOINT(userId))

  const userFirstName = getUserFirstName(user?.userName || '')

  useEffect(() => {
    const timer = setTimeout(() => {
      Router.push(PRIMARY_HEADER_URL.DASHBOARD.URL)
    }, 3800)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <PageFadeOut delay={3} duration={0.5} width={theme.metrics.width.full}>
      <SecondaryLayout>
        <WrapperContent
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Image
            src="/images/logo.svg"
            width={theme.metrics.width.base}
            height={theme.metrics.height.base}
            layout="fixed"
          />
          <Title
            fontSize={theme.typography.fontSize.xlg}
            fontWeight={theme.typography.fontWeight.bold}
            color={theme.colors.white}
            lineHeight={theme.typography.lineHeight.lg}
            mTop={theme.metrics.dimensions.md}
            width={`min(90%, ${pxToRem(315)})`}
            title="Welcome to Stellar,"
          />
          <Title
            fontSize={theme.typography.fontSize.xlg}
            fontWeight={theme.typography.fontWeight.bold}
            color={theme.colors.white}
            lineHeight={theme.typography.lineHeight.lg}
            mTop={theme.metrics.dimensions.md}
            width={`min(90%, ${pxToRem(315)})`}
            title={userFirstName}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          />
        </WrapperContent>
      </SecondaryLayout>
    </PageFadeOut>
  )
}

export default Welcome
