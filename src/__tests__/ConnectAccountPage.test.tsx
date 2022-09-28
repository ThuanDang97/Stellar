import { fireEvent, screen, waitFor } from '@testing-library/react'
import { NextRouterProvider } from '@utils/nextRouterProvider'
import Router from 'next/router'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Pages
import ConnectAccountPage from '@pages/connect-account'

// Constants
import {
  EMAIL_NOT_EXIST,
  INVALID_PASSWORD,
  PRIMARY_HEADER_URL,
} from '@constants/index'

// Mocks
import {
  APPLICATION_CONNECT_ACCOUNT,
  INPUT_VALUES,
  USER_ID,
} from '@mocks/mockData'

const query = { id: USER_ID }

describe('ConnectAccount Page', () => {
  beforeEach(() => {
    renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <ConnectAccountPage />
      </NextRouterProvider>,
    )
  })

  it('should render connectAccountForm', () => {
    const connectAccountForm = screen.getByTestId('connectAccountForm')

    expect(connectAccountForm).toBeInTheDocument()
  })

  const setup = () => {
    const utils = renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <ConnectAccountPage />
      </NextRouterProvider>,
    )
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    return {
      input,
      ...utils,
    }
  }

  it('should change email field value and display the correct value', () => {
    const { input } = setup()

    fireEvent.change(input[0], { target: { value: INPUT_VALUES.text } })
    expect(input[0]).toHaveValue(INPUT_VALUES.text)
  })

  it('should change email field value and display the correct value', () => {
    const { input } = setup()

    fireEvent.change(input[1], { target: { value: INPUT_VALUES.password } })
    expect(input[1]).toHaveValue(INPUT_VALUES.password)
  })

  it('should change  email not exits and display error', () => {
    const { input } = setup()

    fireEvent.change(input[0], { target: { value: INPUT_VALUES.text } })
    const button = screen.getAllByTestId('button') as HTMLInputElement[]

    fireEvent.submit(button[0])
    waitFor(() => {
      expect(screen.getByTestId('errorMessage')).toHaveValue(EMAIL_NOT_EXIST)
    })
  })

  it('should change password not match incorrect and display error', () => {
    const { input } = setup()

    fireEvent.change(input[0], {
      target: { value: APPLICATION_CONNECT_ACCOUNT.email },
    })
    fireEvent.change(input[1], { target: { value: INPUT_VALUES.password } })
    const button = screen.getAllByTestId('button') as HTMLInputElement[]

    fireEvent.submit(button[0])
    waitFor(() => {
      expect(screen.getByTestId('errorMessage')).toHaveValue(INVALID_PASSWORD)
    })
  })

  it('should checkout new page when submit success', () => {
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    fireEvent.change(input[0], {
      target: { value: APPLICATION_CONNECT_ACCOUNT.email },
    })
    fireEvent.change(input[1], {
      target: { value: APPLICATION_CONNECT_ACCOUNT.password },
    })

    const button = screen.getAllByTestId('button') as HTMLInputElement[]

    fireEvent.submit(button[0])

    waitFor(() => {
      expect(Router.push).toHaveBeenCalledWith(
        PRIMARY_HEADER_URL.CONFIRM_DETAIL.URL,
      )
    })
  })

  it('ConnectAccountPage matches snapshot', () => {
    const { asFragment } = renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <ConnectAccountPage />
      </NextRouterProvider>,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should switch to a new page when clicking back', () => {
    const button = screen.getAllByTestId('button')

    fireEvent.submit(button[0])

    waitFor(() => {
      expect(Router.push).toHaveBeenCalledWith(PRIMARY_HEADER_URL.DASHBOARD)
    })
  })
})
