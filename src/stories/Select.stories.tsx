import { Story } from '@storybook/react'

// Mocks
import { SELECT_OPTIONS } from '@mocks/mockData'

// Props type
import { SelectProps } from '@self-types/components/Select.props'

// Components
import Select from '@components/Select'

export default {
  title: 'Components/Select',
  component: Select,
}

const Template: Story<SelectProps> = (args) => <Select {...args} />

export const SelectItem = Template.bind({})
SelectItem.args = {
  listOption: SELECT_OPTIONS,
  defaultValue: '3',
  width: 300,
}
