import { Story } from '@storybook/react'
import React from 'react'

// Props Type
import { PickerProps } from '@self-types/components/Picker.props'

// Components
import Picker from '@components/Picker'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/Picker',
  component: Picker,
}

const Template: Story<PickerProps> = (args) => (
  <ViewStyled maxWidth={300}>
    <Picker {...args} />
  </ViewStyled>
)

export const PickerComponent = Template.bind({})
PickerComponent.args = {
  isMinDate: true,
  isMaxDate: true,
  onToday: true,
}
