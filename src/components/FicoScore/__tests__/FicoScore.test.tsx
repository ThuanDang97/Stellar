import React from 'react'

// Components
import FicoScore from '@components/FicoScore'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('FicoScore component', () => {
  it('renders FicoScore correctly', () => {
    const { asFragment } = renderWithTheme(
      <FicoScore
        isLocked={false}
        currentFicoScore={0}
        dateUpdated=""
        minScore={300}
        maxScore={850}
      />,
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
