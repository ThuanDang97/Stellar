import { useCallback, useState } from 'react'
import { useTheme } from 'styled-components'
import Router from 'next/router'

// Layouts
import { SecondaryLayout } from '@layouts/LayoutStyled'
import Header from '@layouts/Header'

// Constants
import { SECONDARY_URL, SERVER_ERROR } from '@constants/index'

// Components
import Title from '@components/Title'
import { ViewStyled, WrapperContent } from '@components/styled-components'
import SubscriptionLaunch from '@components/SubscriptionLaunch'
import SubscriptionFlex from '@components/SubscriptionFlex'
import { PageFadeOut } from '@components/styled-components/AnimatedPageStyled'

// Contexts
import { useAuthContext } from '@hooks/useAuthContext'

// Services
import { addSubscriptionPlan } from '@services/subscriptionPlan'

// Types
import { SubscriptionPlan } from '@self-types/api'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'

const SubscriptionPage = () => {
  const theme = useTheme()
  const { userId } = useAuthContext()
  const { setLoading } = useLoadingContext()

  const [delay, setDelay] = useState<number>()

  const handleChoosePlan = useCallback(
    async (plan: SubscriptionPlan) => {
      setDelay(0.1)

      try {
        setLoading(true)
        await addSubscriptionPlan(plan, userId)

        setTimeout(() => {
          Router.push(SECONDARY_URL.WELCOME.URL)
        }, 1100)
      } catch {
        throw new Error(SERVER_ERROR)
      } finally {
        setLoading(false)
      }
    },
    [setLoading, userId],
  )

  const handleChooseFlex = useCallback(
    () => handleChoosePlan('flex'),
    [handleChoosePlan],
  )
  const handleChooseLaunch = useCallback(
    () => handleChoosePlan('launch'),
    [handleChoosePlan],
  )

  return (
    <SecondaryLayout
      overflow="hidden"
      position="relative"
      alignItems="flex-start"
    >
      <PageFadeOut
        display="flex"
        flexDirection="column"
        justifyContent="center"
        delay={delay}
        duration={1}
        width={theme.metrics.width.full}
      >
        <Header HeaderType="defaultHeader" showArrow isArrowLight top={0} />
        <WrapperContent
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Title
            pTop={theme.metrics.dimensions.xxl}
            title="Select the subscription that works for you."
            fontSize={theme.typography.fontSize.xlg}
            lineHeight={theme.typography.fontSize.xlg}
            color={theme.colors.white}
            fontFamily="AdobeCleanExtraBold"
            letterSpacing={theme.typography.letterSpacing.xl}
            maxWidth={500}
          />
          <ViewStyled
            display="flex"
            flexWrap="wrap"
            gap={theme.metrics.dimensions.md}
            mTop={theme.metrics.dimensions.xl}
            mBottom={theme.metrics.dimensions.md}
            alignItems="flex-start"
            justifyContent="center"
          >
            <SubscriptionLaunch handleClickChooseLaunch={handleChooseLaunch} />
            <SubscriptionFlex handleClickChooseFlex={handleChooseFlex} />
          </ViewStyled>
        </WrapperContent>
      </PageFadeOut>
    </SecondaryLayout>
  )
}

export default SubscriptionPage
