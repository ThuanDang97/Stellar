import React from 'react'
import { cleanup, fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Pages
import ResetPasswordPage from '@pages/reset-password'
import Input from '@components/Input'

// Mocks
import { USER_ID } from '@mocks/mockData'

const query = { token: USER_ID }

describe('ResetPasswordPage', () => {
  beforeEach(() => {
    cleanup()
    renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <ResetPasswordPage />
      </NextRouterProvider>,
    )
  })

  it('should render resetPasswordForm', () => {
    const loginForm = screen.getByTestId('resetPasswordForm')

    expect(loginForm).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <ResetPasswordPage />
      </NextRouterProvider>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  const onChangeValue = jest.fn()
  const setup = () => {
    const utils = renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <ResetPasswordPage />
      </NextRouterProvider>,
    )
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    return {
      input,
      ...utils,
    }
  }
  test('Should onChange value when input value', async () => {
    renderWithTheme(<Input onChange={onChangeValue} />)
    const { input } = setup()
    fireEvent.change(input[0], { target: { value: 'Password218@' } })
    fireEvent.change(input[1], { target: { value: 'Password218@' } })
    expect(input[0].value).toBe('Password218@')
    expect(input[1].value).toBe('Password218@')
  })
})
