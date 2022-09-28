import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import SubscriptionLaunch from '@components/SubscriptionLaunch'

describe('LaunchCard Component', () => {
  const handleClick = jest.fn()
  const component = <SubscriptionLaunch handleClickChooseLaunch={handleClick} />
  test('LaunchCard matches snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })

  test('LaunchCard should call when user click button', () => {
    renderWithTheme(component)

    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
