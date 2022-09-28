import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Pages
import Subscription from '@pages/subscription'

// Services
import { addSubscriptionPlan } from '@services/subscriptionPlan'

jest.mock('@services/subscriptionPlan', () => ({
  addSubscriptionPlan: jest.fn(),
}))

describe('Subscription Page', () => {
  const component = <Subscription />

  test('Subscription Page matches snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })

  test('Subscription Page should call when user click button', () => {
    renderWithTheme(component)

    fireEvent.click(screen.getByRole('button', { name: /Choose Launch/i }))

    expect(addSubscriptionPlan).toHaveBeenCalled()

    fireEvent.click(screen.getByRole('button', { name: /Choose Flex/i }))

    expect(addSubscriptionPlan).toHaveBeenCalled()
  })
})
