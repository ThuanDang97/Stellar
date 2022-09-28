import { fireEvent, screen, waitFor } from '@testing-library/react'
import { NextRouterProvider } from '@utils/nextRouterProvider'
import Router from 'next/router'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Pages
import ConfirmDetailPage from '@pages/confirm-detail'

// Constants
import { PRIMARY_HEADER_URL } from '@constants/index'

// Mocks
import { USER_ID } from '@mocks/mockData'

const query = { userid: USER_ID }

describe('ConfirmDetail Page', () => {
  beforeEach(() => {
    renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <ConfirmDetailPage />
      </NextRouterProvider>,
    )
  })

  test('should change value when input amount', async () => {
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    fireEvent.change(input[0], { target: { value: '16.0' } })
    expect(input[0].value).toBe('16.0')
  })

  // test('should change value when select today ', async () => {
  //   const datePicker = screen.getByPlaceholderText(
  //     'MM/DD/YYYY',
  //   ) as HTMLInputElement
  //   fireEvent.click(datePicker)

  //   await waitFor(() =>
  //     fireEvent.change(datePicker, { target: { value: DATE_TIMER } }),
  //   )
  //   expect(datePicker.value).toContain('Pay by the 8th')
  // })

  test('should change value when select pay by month', async () => {
    const select = screen.getAllByTestId('select') as HTMLInputElement[]
    fireEvent.click(select[2])
    fireEvent.click(screen.getByText('Pay Monthly'))
    expect(select[2]).toHaveTextContent('Pay Monthly')
  })

  it('should render confirmDetailForm', () => {
    const confirmDetailForm = screen.getByTestId('confirmDetailForm')

    expect(confirmDetailForm).toBeInTheDocument()
  })

  it('should checkout new page when submit success', () => {
    const button = screen.getAllByTestId('button') as HTMLInputElement[]

    fireEvent.submit(button[0])

    waitFor(() => {
      expect(Router.push).toHaveBeenCalledWith(PRIMARY_HEADER_URL.DASHBOARD.URL)
    })
  })

  test('ConnectAccountPage matches snapshot', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2022-08-30'))

    const { asFragment } = renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <ConfirmDetailPage />
      </NextRouterProvider>,
    )

    expect(asFragment()).toMatchSnapshot()

    jest.useRealTimers()
  })
})
