import React from 'react'
import { screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Pages
import EmailSentPage from '@pages/email-sent/[userId]'

// Mocks
import { USER_ID } from '@mocks/mockData'

const query = { userid: USER_ID }

describe('EmailSentPage', () => {
  beforeAll(() => {
    renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <EmailSentPage />
      </NextRouterProvider>,
    )
  })

  it('should render email sent component', () => {
    const emailSentComponent = screen.getByTestId('emailSentComponent')

    expect(emailSentComponent).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <EmailSentPage />
      </NextRouterProvider>,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
