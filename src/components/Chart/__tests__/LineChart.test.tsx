// Components
import LineChart from '@components/Chart'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Props type
import { LineChartProps } from '@self-types/components/LineChart.props'
import { CHART_SCORE } from '@mocks/mockData'

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}))
jest.mock('chartjs-plugin-datalabels', () => ({
  ChartDataLabels: [],
}))
jest.mock('chart.js', () => ({
  Chart: { register: jest.fn(), defaults: { set: jest.fn() } },
  registerables: [],
}))

describe('Line Chart Component', () => {
  const props: LineChartProps = {
    isLocked: false,
    dataChart: CHART_SCORE.data,
  }

  const secondaryProps: LineChartProps = {
    isLocked: true,
    dataChart: [],
  }

  const customProps: LineChartProps = {
    isLocked: false,
    dataChart: [],
  }

  test('renders Line Chart have data unchanged', () => {
    const { container } = renderWithTheme(<LineChart {...props} />)

    expect(container).toMatchSnapshot()
  })

  test('renders Line Chart is locked unchanged', () => {
    const { container } = renderWithTheme(<LineChart {...secondaryProps} />)

    expect(container).toMatchSnapshot()
  })

  test('renders Line Chart unlock and no data unchanged', () => {
    const { container } = renderWithTheme(<LineChart {...customProps} />)

    expect(container).toMatchSnapshot()
  })
})
