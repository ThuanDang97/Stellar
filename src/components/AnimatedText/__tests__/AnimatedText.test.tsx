import React from 'react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import AnimatedText from '..'

describe('AnimatedText Component', () => {
  it('renders AnimatedText unchanged', () => {
    const { container } = renderWithTheme(<AnimatedText />)

    expect(container).toMatchSnapshot()
  })
})
