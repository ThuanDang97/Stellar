// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import ForgotPassword from '@components/ForgotPassword/index'

describe('ForgotPassword Component', () => {
  const component = (
    <ForgotPassword
      errorMessage=""
      textEmail=""
      handleChangeEmail={jest.fn()}
    />
  )
  it('renders ForgotPassword component', () => {
    const { container } = renderWithTheme(component)
    expect(container).toMatchSnapshot()
  })
})
