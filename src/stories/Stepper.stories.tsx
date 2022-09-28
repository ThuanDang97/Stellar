import { Story } from '@storybook/react'

// Props type
import { StepperProps } from '@self-types/components/Stepper.props'

// Components
import Stepper from '@components/Stepper'

export default {
  title: 'Components/Stepper',
  component: Stepper,
}

const Template: Story<StepperProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Stepper {...args} />
  </div>
)

export const StepperDefault = Template.bind({})
