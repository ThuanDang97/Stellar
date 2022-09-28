import React from 'react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import AnimatedTicker from '..'

describe('AnimatedTicker Component', () => {
  it('renders AnimatedTicker unchanged', () => {
    const { container } = renderWithTheme(<AnimatedTicker />)

    expect(container).toMatchSnapshot()
  })
})
