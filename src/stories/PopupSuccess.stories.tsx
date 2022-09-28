import { useCallback, useState } from 'react'
import { Story } from '@storybook/react'

// Props  type
import { PopupSuccessProps } from '@self-types/components/PopupSuccess.props'

// Constants
import { EDIT_SUCCESS } from '@constants/text'

// Components
import PopupSuccess from '@components/PopupSuccess'
import Button from '@components/Button'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/Popup',
  component: PopupSuccess,
}

const Template: Story<PopupSuccessProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  /**
   * Handle open popup
   */
  const handleOpenPopup = useCallback(() => {
    setIsOpen(true)
  }, [])

  /**
   * Handle close popup
   */
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <ViewStyled>
      <Button title="Click to open popup success" onClick={handleOpenPopup} />
      <PopupSuccess {...args} isOpen={isOpen} onClose={handleClose} />
    </ViewStyled>
  )
}

export const PopupSuccessDefault = Template.bind({})
PopupSuccessDefault.args = {
  textContent: EDIT_SUCCESS,
}
