import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Mocks
import { AVATAR_DEFAULT } from '@mocks/mockData'

// Pages
import IdentityPage from '@pages/confirm-identity'

describe('Identity Page', () => {
  const component = <IdentityPage />

  test('Identity Page matches snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })

  const setup = () => {
    const utils = renderWithTheme(<IdentityPage />)
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    return {
      input,
      ...utils,
    }
  }

  test('Identity Page should change input value and display the correct value', () => {
    const { input } = setup()

    fireEvent.change(input[0], { target: { value: AVATAR_DEFAULT.firstName } })
    expect(input[0]).toHaveValue(AVATAR_DEFAULT.firstName)
    fireEvent.change(input[1], { target: { value: AVATAR_DEFAULT.lastName } })
    expect(input[1]).toHaveValue(AVATAR_DEFAULT.lastName)
  })
})
