import React from 'react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Page
import Goal from '../pages/goal'

describe('Goal', () => {
  it('renders goal page unchanged', () => {
    const { asFragment } = renderWithTheme(<Goal />)

    expect(asFragment()).toMatchSnapshot()
  })
})
