import React from 'react'
import { screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import ErrorMessage from '../index'

describe('ErrorMessage Component', () => {
  it('should render ErrorMessage', () => {
    renderWithTheme(<ErrorMessage error="valid" />)

    const errorMessage = screen.getByTestId('errorMessage')

    expect(errorMessage).toBeInTheDocument()
  })
})
