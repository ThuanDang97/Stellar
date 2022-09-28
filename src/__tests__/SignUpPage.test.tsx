import React from 'react'
import { cleanup, fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Mocks
import { EXITS_EMAIL, INPUT_VALUES } from '@mocks/mockData'

// Pages
import SignUpPage from '@pages/sign-up'

describe('SignUp Page', () => {
  beforeEach(() => {
    cleanup()
    renderWithTheme(<SignUpPage />)
  })

  test('SignUp Page matches snapshot', () => {
    const { asFragment } = renderWithTheme(<SignUpPage />)

    expect(asFragment()).toMatchSnapshot()
  })

  const setup = () => {
    const utils = renderWithTheme(<SignUpPage />)
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    return {
      input,
      ...utils,
    }
  }

  test('SignUp should change the full name field value and display the correct value', () => {
    const { input } = setup()

    fireEvent.change(input[0], { target: { value: INPUT_VALUES.text } })
    expect(input[0]).toHaveValue(INPUT_VALUES.text)
  })

  test('SignUp should change the email field value and display the correct value', () => {
    const { input } = setup()

    fireEvent.change(input[1], { target: { value: EXITS_EMAIL } })
    expect(input[1]).toHaveValue(EXITS_EMAIL)
  })

  test('SignUp should change the password field value and display the correct value', () => {
    const { input } = setup()

    fireEvent.change(input[2], { target: { value: INPUT_VALUES.password } })
    expect(input[2]).toHaveValue(INPUT_VALUES.password)
    fireEvent.change(input[2], { target: { value: '' } })
    expect(input[2]).toHaveValue('')
  })
})
