import React, { useState } from 'react'
import { Story } from '@storybook/react'

// Components
import Button from '@components/Button'
import { ViewStyled } from '@components/styled-components'
import TableControlPopup from '@components/TableControlPopup'

// Props type
import { TableControlPopupProps } from '@self-types/components/TableControlPopup.props'

export default {
  title: 'Components/TableControlPopup',
  component: TableControlPopup,
}

const Template: Story<TableControlPopupProps> = (args) => {
  const [isToggle, setIsToggle] = useState<boolean | undefined>()

  // Show table control popup when click icon three dot
  const handleTogglePopUp = () => {
    setIsToggle((prev) => !prev)
  }

  return (
    <ViewStyled display="flex" justifyContent="center" position="relative">
      <Button
        variant="icon"
        width={20}
        height={20}
        cursor="pointer"
        onClick={handleTogglePopUp}
        imgUrl="/icons/kebab.svg"
        data-testid="kebab"
      />
      {isToggle && (
        <TableControlPopup
          {...args}
          idItem=""
          handleEditTable={() => undefined}
          handleDeleteTable={() => undefined}
        />
      )}
    </ViewStyled>
  )
}

export const TableControl = Template.bind({})
TableControl.args = {
  nameTable: 'linkedBill',
}
