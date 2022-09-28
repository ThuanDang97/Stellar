// Pages
import LandingPage from '@pages/index'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Landing page', () => {
  it('renders landing page unchanged', () => {
    const { asFragment } = renderWithTheme(<LandingPage />)

    expect(asFragment()).toMatchSnapshot()
  })
})
