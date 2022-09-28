import React from 'react'

// Components
import Ticker from '@components/Ticker'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Ticker Component', () => {
  const props = {
    size: 50,
    duration: 2,
    firstNumber: 600,
  }

  it('renders ticker unchanged when there are 2 scores', () => {
    const { asFragment } = renderWithTheme(
      <Ticker {...props} secondNumber={700} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders ticker unchanged when there are 1 score', async () => {
    const { asFragment } = renderWithTheme(<Ticker {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
