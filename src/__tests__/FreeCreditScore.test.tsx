import React from 'react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Page
import FreeCreditScore from '@pages/free-credit-score'

describe('Free credit score Page', () => {
  it('Should be renders free credit score page ', () => {
    const { asFragment } = renderWithTheme(<FreeCreditScore />)

    expect(asFragment()).toMatchSnapshot()
  })
})
