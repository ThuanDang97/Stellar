import React from 'react'
import { cleanup, fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Pages
import ForgotPasswordPage from '@pages/forgot-password'
import Input from '@components/Input'

describe('ForgotPasswordPage', () => {
  beforeEach(() => {
    cleanup()
    renderWithTheme(<ForgotPasswordPage />)
  })

  it('should render Forgot pass word form', () => {
    const loginForm = screen.getByTestId('forgotPasswordForm')

    expect(loginForm).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<ForgotPasswordPage />)

    expect(asFragment()).toMatchSnapshot()
  })

  const onChangeValue = jest.fn()
  const setup = () => {
    const utils = renderWithTheme(<ForgotPasswordPage />)
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    return {
      input,
      ...utils,
    }
  }

  test('Should onChange value when input value', async () => {
    renderWithTheme(<Input onChange={onChangeValue} />)
    const { input } = setup()
    fireEvent.change(input[0], { target: { value: 'test@gmail.com' } })
    expect(input[0].value).toBe('test@gmail.com')
  })
})
