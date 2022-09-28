import React from 'react'
import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react'
import mockAxios from 'axios'

// Utils
import { renderWithTheme } from '@utils/themeProvider'
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Pages
import SSNPage from '@pages/confirm-ssn'

// Services
import { addSSN } from '@services/ssn'

// Mocks
import { SSN_NUMBER, USER_ID, SSN_USER } from '@mocks/mockData'
import { SERVER_ERROR } from '@constants/errorMessage'

const mockPostAxios = jest.mocked(mockAxios.post)
const mockIsAxiosError = jest.mocked(mockAxios.isAxiosError)

const query = { userid: USER_ID }
describe('SSNPage', () => {
  beforeEach(() => {
    renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <SSNPage />
      </NextRouterProvider>,
    )
  })

  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('should render ssnForm', () => {
    const ssnForm = screen.getByTestId('ssnForm')

    expect(ssnForm).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<SSNPage />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should onChange value when input value', async () => {
    const input = screen.getByTestId('iconInput') as HTMLInputElement
    fireEvent.change(input, { target: { value: '123456789' } })
    expect(input.value).toBe('123-45-6789')
  })

  it('should render error message', async () => {
    const input = screen.getByTestId('iconInput') as HTMLInputElement
    fireEvent.change(input, { target: { value: '1234567' } })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    waitFor(() => {
      const error = screen.getByTestId('errorMessage')
      expect(error).toBeInTheDocument()
    })
  })

  it('should remove error message', async () => {
    const input = screen.getByTestId('iconInput') as HTMLInputElement
    fireEvent.change(input, { target: { value: '1234567' } })

    const button = screen.getByTestId('button')
    fireEvent.click(button)

    fireEvent.change(input, { target: { value: '12345678' } })

    waitFor(() => {
      const error = screen.getByTestId('errorMessage')
      expect(error).not.toBeInTheDocument()
    })
  })

  it('should checkout new page when submit success ', async () => {
    mockPostAxios.mockResolvedValue({
      data: SSN_USER,
    })

    waitFor(() => {
      expect(mockPostAxios).toBeCalledWith()
    })
  })

  test('should call add ssn function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addSSN(USER_ID, SSN_NUMBER)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  test('should call add ssn function correctly when it rejected with axios error', async () => {
    const messageError = { message: SERVER_ERROR }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await addSSN(USER_ID, SSN_NUMBER)
    } catch (error) {
      expect(error).toEqual({ message: SERVER_ERROR })
    }
  })
})
