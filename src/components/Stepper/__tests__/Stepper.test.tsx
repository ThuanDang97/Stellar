import { screen } from '@testing-library/react'

// Components
import Stepper from '@components/Stepper'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Constants
import { STEPPER } from '@constants/index'

describe('Stepper Component', () => {
  const component = <Stepper />

  test('Component Stepper matchers DOM Snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })

  test('Component Stepper should render default correctly', () => {
    renderWithTheme(component)

    const items = screen.getAllByTestId('stepper-value')

    expect(items[0]).toHaveTextContent(STEPPER[0].step)
  })
})
