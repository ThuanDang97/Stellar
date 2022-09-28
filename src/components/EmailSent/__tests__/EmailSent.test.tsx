// Component
import EmailSent from '@components/EmailSent'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Mocks
import { USER, USER_ID } from '@mocks/mockData'

describe('EmailSent Component', () => {
  const component = <EmailSent email={USER.email} userId={USER_ID} />

  it('renders EmailSent component', () => {
    const { container } = renderWithTheme(component)
    expect(container).toMatchSnapshot()
  })
})
