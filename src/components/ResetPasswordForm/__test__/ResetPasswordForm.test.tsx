// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import ResetPasswordForm from '@components/ResetPasswordForm/index'

// Props type
import { ResetPasswordFormProps } from '@self-types/components/ResetPasswordForm.props'

describe('LoginForm', () => {
  const props: ResetPasswordFormProps = {
    handleChangePassword: jest.fn(),
    onSubmit: jest.fn(),
    newPassword: '',
    confirmPassword: '',
    isNewPassword: true,
  }

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<ResetPasswordForm {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
