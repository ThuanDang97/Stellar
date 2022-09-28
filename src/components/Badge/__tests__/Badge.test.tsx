import '@testing-library/jest-dom'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Component
import Badge from '../index'

describe('Badge Component', () => {
  it('renders Badge component when isReady true', () => {
    const { container } = renderWithTheme(<Badge title="Ready" isReady />)
    expect(container).toMatchSnapshot()
  })

  it('renders Badge component when isReady false', () => {
    const { container } = renderWithTheme(<Badge title="23PTS away" />)
    expect(container).toMatchSnapshot()
  })
})
