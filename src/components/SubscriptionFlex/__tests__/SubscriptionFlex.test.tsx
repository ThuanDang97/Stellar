import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import SubscriptionFlex from '@components/SubscriptionFlex'

describe('FlexCard Component', () => {
  const handleClick = jest.fn()
  const component = <SubscriptionFlex handleClickChooseFlex={handleClick} />
  test('FlexCard matches snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })

  test('FlexCard should call when user click button', () => {
    renderWithTheme(component)

    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
