// Pages
import ChangePassword from '@pages/change-password'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Change password page', () => {
  it('renders change password page unchanged', () => {
    const { asFragment } = renderWithTheme(<ChangePassword />)

    expect(asFragment()).toMatchSnapshot()
  })
})
