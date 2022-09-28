import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import CardGoal from '@components/CardGoal'
import { ViewStyled } from '@components/styled-components/ViewStyled'

// Constants
import { LIST_GOAL } from '@constants/index'

// Props type
import {
  GoalProps,
  SelectItemProps,
} from '@self-types/components/CardGold.props'

// Utils
import { findItemArrStringByValue, selectItem } from '@utils/index'

const ListGoal = ({
  selectedItem,
  setSelectedItem,
  selectedGoals,
}: SelectItemProps) => {
  const theme = useTheme()

  return (
    <ViewStyled
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      width={theme.metrics.width.full}
    >
      {LIST_GOAL.map((goal: GoalProps) => {
        const checkGoalIdIsExit =
          selectedGoals &&
          findItemArrStringByValue({
            data: selectedGoals,
            value: goal.id,
          })
        const handleSelectGoal = () =>
          !checkGoalIdIsExit &&
          selectItem(setSelectedItem, selectedItem, goal.id)

        const isActive = selectedItem.includes(goal.id)
        return (
          <CardGoal
            key={`{goal-${goal.id}`}
            title={isActive ? goal.activeText : goal.title}
            iconUrl={goal.url}
            isActive={isActive}
            handleSelectGoal={handleSelectGoal}
            disable={!!checkGoalIdIsExit}
          />
        )
      })}
    </ViewStyled>
  )
}

export default memo(ListGoal)
