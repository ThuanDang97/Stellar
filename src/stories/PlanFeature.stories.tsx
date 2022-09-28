import { Story } from '@storybook/react'

// Components
import PlanFeature from '@components/PlanFeature'

// Props type
import { PlanFeatureProps } from '@self-types/components/PlanFeature.props'

export default {
  title: 'Components/PlanFeature',
  component: PlanFeature,
}

const Template: Story<PlanFeatureProps> = (args) => <PlanFeature {...args} />

export const DefaultPlanFeature = Template.bind({})
DefaultPlanFeature.args = {
  type: 'normal',
  title: 'Plan Feature',
}

export const TextBoldPlanFeature = Template.bind({})
TextBoldPlanFeature.args = {
  type: 'bold',
  title: 'Plan Feature',
}
