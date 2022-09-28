import '@testing-library/jest-dom'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Component
import Picker from '@components/Picker'

describe('Picker Component', () => {
  jest.useFakeTimers()
  jest.setSystemTime(new Date('2022-08-19'))
  const handleChangeDateOfBirth = jest.fn()

  it('renders picker component', () => {
    const { container } = renderWithTheme(
      <Picker
        isMinDate
        isMaxDate
        isMonthDropdown
        isYearDropdown
        onToday
        onChange={handleChangeDateOfBirth}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
