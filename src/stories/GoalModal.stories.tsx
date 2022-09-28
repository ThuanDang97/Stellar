import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import GoalModal from '../components/GoalModal'

export default {
  title: 'Components/GoalModal',
  component: GoalModal,
} as ComponentMeta<typeof GoalModal>

const Template: ComponentStory<typeof GoalModal> = () => {
  const [isOpen, setIsOpen] = useState(false)
  const selectedGoals = ['g1']
  const [selectedItem, setSelectedItem] = useState<string[]>(selectedGoals)

  return (
    <>
      <button type="submit" onClick={() => setIsOpen(true)}>
        Click to open modal
      </button>
      <GoalModal
        isOpen={isOpen}
        selectedGoals={selectedGoals}
        onClose={() => setIsOpen(false)}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
      />
    </>
  )
}

export const DefaultModal = Template.bind({})
