import '@testing-library/jest-dom'
import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

// Components
import HeaderNav from '@components/HeaderNav/index'

// Constants
import { HEADER_NAVIGATION } from '@constants/index'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('HeaderNav component', () => {
  it('renders HeaderNav correctly', () => {
    const { asFragment } = renderWithTheme(
      <HeaderNav headerNavList={HEADER_NAVIGATION} />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should active text when click in text ', () => {
    renderWithTheme(<HeaderNav headerNavList={HEADER_NAVIGATION} />)
    const item = screen.getByTestId('item1')
    fireEvent.click(item)
    expect(screen.getByTestId('/help-1')).toHaveStyle(`
      color: rgb(255, 255, 255)`)
  })
})
