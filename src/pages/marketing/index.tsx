// Library
import React, { memo, useCallback, useState } from 'react'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

// Components
import { TextStyled, WrapperContent } from '@components/styled-components'
import MarketingList from '@components/MarketingList'
import Stepper from '@components/Stepper'
import Title from '@components/Title'

// Constants
import {
  DEFAULT_HEADER_URL,
  MARKETING_ENDPOINT,
  SERVER_ERROR,
} from '@constants/index'

// Contexts
import { useAuthContext } from '@hooks/useAuthContext'

// Services
import { addMarketings } from '@services/marketing'

// Hooks
import { useLoadingContext } from '@hooks/useLoadingContext'
import { IMarketing } from '@self-types/api'
import useSWR from 'swr'

const Marketing = () => {
  const theme = useTheme()
  const router = useRouter()
  const { setLoading } = useLoadingContext()
  const [selectedItem, setSelectedItem] = useState<string[]>([])

  const { userId } = useAuthContext()

  useSWR<IMarketing>(userId ? MARKETING_ENDPOINT(userId) : null, {
    onSuccess: (data) => {
      if (data.marketings) {
        setSelectedItem(data.marketings)
      }
    },
  })

  const handleContinueButton = useCallback(async () => {
    try {
      setLoading(true)
      await addMarketings(selectedItem, userId)

      router.push(DEFAULT_HEADER_URL.GOAL.URL)
    } catch {
      throw new Error(SERVER_ERROR)
    } finally {
      setLoading(false)
    }
  }, [setLoading, selectedItem, userId, router])

  return (
    <WrapperContent display="flex" flexDirection="column">
      <Stepper currentPage="signup" />
      <Title
        title="How did you hear about Stellar?"
        fontSize={theme.typography.fontSize.xlg}
        color={theme.colors.shark}
        pTop={theme.metrics.dimensions.xl}
        fontFamily="AdobeCleanExtraBold"
      />
      <TextStyled
        fontSize={theme.typography.fontSize.sm}
        color={theme.colors.lightBlack}
        pBottom={theme.metrics.dimensions.lg}
        pTop={theme.metrics.dimensions.md}
      >
        Select all that apply.
      </TextStyled>
      <MarketingList
        handleContinueButton={handleContinueButton}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
    </WrapperContent>
  )
}

export default memo(Marketing)
