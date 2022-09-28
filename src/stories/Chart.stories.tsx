import { Story } from '@storybook/react'

// Components
import LineChart from '@components/Chart'

// Props type
import { LineChartProps } from '@self-types/components/LineChart.props'
import { BackDropPointLocker } from '@components/styled-components'

// Mocks Data
import { CHART_SCORE } from '@mocks/mockData'

export default {
  title: 'Components/LineChart',
  component: LineChart,
}
const props = CHART_SCORE.data

const secondaryProps = {
  data: [],
}

const Template: Story<LineChartProps> = () => (
  <LineChart dataChart={props} isLocked={false} />
)
export const Chart = Template.bind({})

const SecondaryTemplate: Story<LineChartProps> = () => (
  <BackDropPointLocker isLocked>
    <LineChart dataChart={secondaryProps.data} isLocked />
  </BackDropPointLocker>
)
export const EmptyChart = SecondaryTemplate.bind({})

const CustomTemplate: Story<LineChartProps> = () => (
  <LineChart dataChart={secondaryProps.data} isLocked={false} />
)
export const UnlockEmptyChart = CustomTemplate.bind({})
