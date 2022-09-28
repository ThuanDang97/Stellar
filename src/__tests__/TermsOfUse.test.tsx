// Pages
import TermsOfUsePage from '@pages/terms-of-use'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('TermsOfUsePage Component', () => {
  test('Page matches DOM Snapshot', () => {
    const { container } = renderWithTheme(<TermsOfUsePage />)

    expect(container).toMatchSnapshot()
  })
})
