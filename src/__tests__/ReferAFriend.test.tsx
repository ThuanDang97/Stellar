// Pages
import ReferAFriendPage from '@pages/refer-a-friend'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('ReferAFriendPage Component', () => {
  test('Component matches DOM Snapshot', () => {
    const { container } = renderWithTheme(<ReferAFriendPage />)

    expect(container).toMatchSnapshot()
  })
})
