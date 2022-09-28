// Pages
import FeedbackPage from '@pages/feedback'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('FeedbackPage Component', () => {
  test('Component matches DOM Snapshot', () => {
    const { container } = renderWithTheme(<FeedbackPage />)

    expect(container).toMatchSnapshot()
  })
})
