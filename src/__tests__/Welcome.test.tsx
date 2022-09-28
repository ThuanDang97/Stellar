// Pages
import Welcome from '@pages/welcome'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Welcome Component', () => {
  test('Component Welcome matches DOM Snapshot', () => {
    const { container } = renderWithTheme(<Welcome />)

    expect(container).toMatchSnapshot()
  })
})
