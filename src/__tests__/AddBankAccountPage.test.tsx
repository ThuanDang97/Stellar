import { screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Pages
import AddBankAccountPage from '@pages/connect-bank'

// Mocks
import { USER_ID } from '@mocks/mockData'

const query = { userid: USER_ID }

describe('AddBankAccount Page', () => {
  beforeEach(() => {
    renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <AddBankAccountPage />
      </NextRouterProvider>,
    )
  })

  test('AddBankAccount Page matches snapshot', () => {
    const { asFragment } = renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <AddBankAccountPage />
      </NextRouterProvider>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('should change add one bank account ', () => {
    const buttonAdd = screen.getByTestId('addBankNumbers') as HTMLElement
    expect(buttonAdd).toBeInTheDocument()
  })
})
