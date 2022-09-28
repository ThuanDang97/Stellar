import React from 'react'
import { cleanup, fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Pages
import LoginPage from '@pages/login'
import Input from '@components/Input'

describe('LoginPage', () => {
  beforeEach(() => {
    cleanup()
    renderWithTheme(<LoginPage />)
  })

  it('should render loginForm', () => {
    const loginForm = screen.getByTestId('loginForm')

    expect(loginForm).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<LoginPage />)

    expect(asFragment()).toMatchSnapshot()
  })

  const onChangeValue = jest.fn()
  const setup = () => {
    const utils = renderWithTheme(<LoginPage />)
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    return {
      input,
      ...utils,
    }
  }
  test('Should onChange value when input value', async () => {
    renderWithTheme(<Input onChange={onChangeValue} />)
    const { input } = setup()
    fireEvent.change(input[0], { target: { value: 'Cheese pocket' } })
    expect(input[0].value).toBe('Cheese pocket')
  })
})
