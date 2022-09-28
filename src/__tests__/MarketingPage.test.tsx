import React from 'react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Page
import Marketing from '@pages/marketing'

describe('Marketing Page', () => {
  it('Should be renders Marketing page ', () => {
    const { asFragment } = renderWithTheme(<Marketing />)

    expect(asFragment()).toMatchSnapshot()
  })
})
