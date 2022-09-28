import React from 'react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Page
import DashboardPage from '@pages/dashboard'

// Constants
import { PRIMARY_HEADER_URL } from '@constants/routes'

const query = { fromPage: PRIMARY_HEADER_URL.CONFIRM_DETAIL.URL }

describe('Dashboard Page', () => {
  it('renders dashboard Page is lock unchanged', () => {
    const { container } = renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <DashboardPage />
      </NextRouterProvider>,
    )

    expect(container).toMatchSnapshot()
  })
})
