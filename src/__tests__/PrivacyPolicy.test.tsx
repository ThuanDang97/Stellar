// Pages
import PrivacyPolicyPage from '@pages/privacy-policy'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('PrivacyPolicyPage Component', () => {
  test('Page matches DOM Snapshot', () => {
    const { container } = renderWithTheme(<PrivacyPolicyPage />)

    expect(container).toMatchSnapshot()
  })
})
