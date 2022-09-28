import React, { useState, useMemo } from 'react'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'

// Components
import ListGoal from '@components/ListGoal'
import Stepper from '@components/Stepper'
import Title from '@components/Title'
import Button from '@components/Button'

// Style
import {
  ViewStyled,
  TextStyled,
  WrapperContent,
} from '@components/styled-components'

// Constants
import {
  DEFAULT_HEADER_URL,
  GOAL_ENDPOINT,
  SERVER_ERROR,
} from '@constants/index'

// Services
import { addGoals } from '@services/goal'

// Hooks
import { useAuthContext } from 'hooks/useAuthContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

// Types
import useSWR from 'swr'

const Goal = () => {
  const theme = useTheme()

  const { userId } = useAuthContext()
  const { setLoading } = useLoadingContext()

  const router = useRouter()

  const [selectedItem, setSelectedItem] = useState<string[]>([])
  const isDisabled = selectedItem?.length === 0

  useSWR<{ value: string }[]>(userId ? GOAL_ENDPOINT(userId) : null, {
    onSuccess: (goals) => {
      const temp: React.SetStateAction<string[]> = []
      goals.forEach((goal) => temp.push(goal.value))
      setSelectedItem(temp)
    },
  })

  const handleSubmit = async () => {
    try {
      setLoading(true)

      await addGoals(selectedItem, userId)

      router.push(DEFAULT_HEADER_URL.CONNECT_BANK.URL)
    } catch {
      throw new Error(SERVER_ERROR)
    } finally {
      setLoading(false)
    }
  }

  // Check re-render text select all when select goal
  const renderSelectAllText = useMemo(() => {
    return (
      <TextStyled
        mTop={theme.metrics.dimensions.md}
        mBottom={theme.metrics.dimensions.lg}
      >
        Select all that apply.
      </TextStyled>
    )
  }, [theme.metrics.dimensions.lg, theme.metrics.dimensions.md])

  return (
    <WrapperContent display="flex" flexDirection="column">
      <Stepper currentPage="goal" />
      <Title
        fontFamily="AdobeCleanExtraBold"
        color={theme.colors.black}
        title="What are your Stellar goals?"
        pTop={theme.metrics.dimensions.xl}
        fontSize={theme.typography.fontSize.xlg}
      />
      {renderSelectAllText}
      <ViewStyled
        maxWidth={750}
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <ListGoal
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Button
          {...(!isDisabled && { cursor: 'pointer' })}
          title="Continue"
          type="submit"
          disabled={isDisabled}
          btnWidth={320}
          btnHeight={45}
          letterSpacing={theme.typography.letterSpacing.xl}
          onClick={handleSubmit}
          mTop={theme.metrics.dimensions.lg}
        />
      </ViewStyled>
    </WrapperContent>
  )
}

export default Goal
