// Pages
import HelpPage from '@pages/help'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('HelpPage Component', () => {
  test('Component matches DOM Snapshot', () => {
    const { container } = renderWithTheme(<HelpPage />)

    expect(container).toMatchSnapshot()
  })
})
