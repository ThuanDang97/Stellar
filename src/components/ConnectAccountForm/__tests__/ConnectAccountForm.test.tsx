import { cleanup, fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import ConnectAccountForm from '@components/ConnectAccountForm'

// Mocks
import { INPUT_VALUES } from '@mocks/mockData'

describe('ConnectAccountForm Component', () => {
  const props = {
    handleChangeEmail: jest.fn(),
    handleChangePassword: jest.fn(),
    handleSubmit: jest.fn(),
    email: '',
    password: '',
  }

  beforeEach(() => {
    renderWithTheme(<ConnectAccountForm {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render input email of application', () => {
    const emailInput = screen.getAllByTestId('iconInput')

    expect(emailInput[0]).toBeInTheDocument()
  })

  it('should call change input email of application', () => {
    const input = screen.getAllByTestId('iconInput')

    fireEvent.change(input[0], {
      target: { value: INPUT_VALUES.email },
    })

    expect(props.handleChangeEmail).toBeCalled()
  })

  it('should render input password of application', () => {
    const passwordInput = screen.getAllByTestId('iconInput')
    expect(passwordInput[1]).toBeInTheDocument()
  })

  it('should call change input password of application', () => {
    const input = screen.getAllByTestId('iconInput')

    fireEvent.change(input[1], {
      target: { value: INPUT_VALUES.email },
    })

    expect(props.handleChangePassword).toBeCalled()
  })

  it('should call submit form', () => {
    const button = screen.getByTestId('button')

    fireEvent.submit(button)

    expect(props.handleSubmit).toBeCalled()
  })

  it('should render button submit', () => {
    const button = screen.getByTestId('button')

    expect(button).toBeInTheDocument()
  })

  it('should render ErrorMessage', () => {
    const newProps = {
      ...props,
      errorMessage: { email: 'Invalid', password: 'Invalid' },
      email: '',
      password: '',
    }

    renderWithTheme(<ConnectAccountForm {...newProps} />)

    const ErrorMessage = screen.getByTestId('errorMessage')

    expect(ErrorMessage).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<ConnectAccountForm {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
