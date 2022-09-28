// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import AddBankAccount from '@components/AddBankAccount/index'

describe('AddBankAccount Component', () => {
  const component = <AddBankAccount bankNumbers={[]} />

  it('renders ForgotPassword component', () => {
    const { container } = renderWithTheme(component)
    expect(container).toMatchSnapshot()
  })
})
