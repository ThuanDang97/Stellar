// Pages
import UserProfilePage from '@pages/profile'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('UserProfilePage Component', () => {
  test('Page matches DOM Snapshot', () => {
    const { container } = renderWithTheme(<UserProfilePage />)

    expect(container).toMatchSnapshot()
  })
})
