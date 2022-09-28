import { useCallback, useState } from 'react'
import { Story } from '@storybook/react'

// Props Type
import { PopupConfirmProps } from '@self-types/components/PopupConfirm.props'

// Constants
import { DELETE_CONFIRM } from '@constants/text'

// Components
import PopupConfirm from '@components/PopupConfirm'
import Button from '@components/Button'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/Popup',
  component: PopupConfirm,
}

const Template: Story<PopupConfirmProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Handle toggle popup
   */
  const handleTogglePopup = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <ViewStyled>
      <Button title="Click to open popup" onClick={handleTogglePopup} />
      <PopupConfirm {...args} isOpen={isOpen} onClose={handleTogglePopup} />
    </ViewStyled>
  )
}

export const PopupGoal = Template.bind({})
PopupGoal.args = {
  textConfirm: DELETE_CONFIRM.DELETE_GOAL,
}

export const PopupLinkedBill = Template.bind({})
PopupLinkedBill.args = {
  textConfirm: DELETE_CONFIRM.DELETE_LINK_BILL,
}
