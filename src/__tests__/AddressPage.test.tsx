import React from 'react'
import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react'
import Router from 'next/router'

// Utils
import { renderWithTheme } from '@utils/themeProvider'
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Pages
import AddressPage from '@pages/confirm-address'

//  Mocks
import { USER_ID } from '@mocks/mockData'

const query = { userid: USER_ID }
describe('AddressPage', () => {
  beforeEach(() => {
    cleanup()
    renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <AddressPage />
      </NextRouterProvider>,
    )
  })

  it('should render addressForm', () => {
    const addressForm = screen.getByTestId('addressForm')

    expect(addressForm).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<AddressPage />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('should onChange value when input value', async () => {
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    fireEvent.change(input[0], { target: { value: 'Cheese pocket' } })
    expect(input[0].value).toBe('Cheese pocket')
  })

  test('should change value phone input', async () => {
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    fireEvent.change(input[1], { target: { value: '1231231231' } })
    expect(input[1].value).toBe('(123) 123-1231')
  })

  it('should render errorMessage', () => {
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    fireEvent.change(input[0], { target: { value: 'Cheese pocket' } })
    fireEvent.change(input[1], { target: { value: '123123121' } })

    const button = screen.getByTestId('button')

    fireEvent.click(button)

    waitFor(() => {
      const error = screen.getByTestId('errorMessage')
      expect(error).not.toBeInTheDocument()
    })
  })

  it('should checkout new page when submit success', () => {
    const input = screen.getAllByTestId('iconInput') as HTMLInputElement[]
    fireEvent.change(input[0], { target: { value: 'Cheese pocket' } })
    fireEvent.change(input[1], { target: { value: '123123121' } })

    const button = screen.getByTestId('button')

    fireEvent.click(button)

    waitFor(() => {
      expect(Router.push).toHaveBeenCalledWith('/dashboard')
    })
  })
})
