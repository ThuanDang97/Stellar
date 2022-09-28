// Components
import ChangePassword from '@components/ChangePassword'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('ChangePassword component', () => {
  it('should renders ChangePassword unchanged', () => {
    const { asFragment } = renderWithTheme(<ChangePassword />)

    expect(asFragment()).toMatchSnapshot()
  })
})
