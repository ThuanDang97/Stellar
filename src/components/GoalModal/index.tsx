import React from 'react'
import { useTheme } from 'styled-components'

// Components
import Button from '@components/Button'
import ListGoal from '@components/ListGoal'
import { TextStyled, ViewStyled } from '@components/styled-components'
import Title from '@components/Title'
import Modal from '@components/Modal'

// Props type
import { GoalModalProps } from '@self-types/components/GoalModal.props'
import { WrapperGoalListContent } from './GoalModalStyled'

const GoalModal = ({
  isOpen,
  onClose,
  selectedItem,
  setSelectedItem,
  selectedGoals,
  onClick,
}: GoalModalProps) => {
  const theme = useTheme()
  const hasSelectedGoal = selectedGoals && selectedGoals.length > 0

  const isDisabled =
    (!hasSelectedGoal && selectedItem?.length === 0) ||
    (hasSelectedGoal && selectedGoals?.length === selectedItem?.length)

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth={750}>
      <Title
        fontFamily="AdobeCleanExtraBold"
        color={theme.colors.black}
        title="What are your Stellar goals?"
        fontSize={theme.typography.fontSize.xlg}
      />
      <TextStyled
        mTop={theme.metrics.dimensions.md}
        mBottom={theme.metrics.dimensions.lg}
      >
        Select all that apply.
      </TextStyled>
      <ViewStyled display="flex" justifyContent="center" flexDirection="column">
        <WrapperGoalListContent>
          <ListGoal
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            selectedGoals={selectedGoals}
          />
        </WrapperGoalListContent>
        <Button
          {...(!isDisabled && { cursor: 'pointer' })}
          title="Continue"
          type="submit"
          disabled={isDisabled}
          btnWidth={320}
          btnHeight={45}
          letterSpacing={theme.typography.letterSpacing.xl}
          onClick={onClick}
          mTop={theme.metrics.dimensions.lg}
          mBottom={theme.metrics.dimensions.md}
        />
      </ViewStyled>
    </Modal>
  )
}

export default React.memo(GoalModal)
