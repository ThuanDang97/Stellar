import React, { useState } from 'react'

// Components
import ListGoal from '@components/ListGoal'
import { ViewStyled } from '@components/styled-components/ViewStyled'

export default {
  title: 'Components/ListGoal',
  component: ListGoal,
}

export const ListGoalComponent = () => {
  const [selectedItem, setSelectedItem] = useState<string[]>([])
  return (
    <ViewStyled
      maxWidth={750}
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <ListGoal
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        selectedGoals={[]}
      />
    </ViewStyled>
  )
}
