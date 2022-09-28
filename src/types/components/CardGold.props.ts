export interface CardGoalProps {
  iconUrl: string
  title: string
  isActive?: boolean
  handleSelectGoal: () => void
  disable?: boolean
}

export type SelectItemProps = {
  setSelectedItem: (selectedItem: string[]) => void
  selectedItem: string[]
  selectedGoals?: string[]
}

export type GoalProps = {
  id: string
  title: string
  activeText: string
  url: string
}
