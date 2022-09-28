import React from 'react'

// Components
import Notifications from '@components/Notifications'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Mocks
import { NOTIFICATIONS } from '@mocks/mockData'

describe('Notifications Component', () => {
  const handleUpdateNotificationId = jest.fn()
  const component = (
    <Notifications
      notificationList={NOTIFICATIONS}
      handleUpdateNotificationId={handleUpdateNotificationId}
    />
  )

  test('Component Notifications matchers DOM Snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })
})
