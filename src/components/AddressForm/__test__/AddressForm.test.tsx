import React from 'react'
import { screen, cleanup, fireEvent } from '@testing-library/react'

// Mock data
import { ADDRESS } from '@mocks/mockData'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import AddressForm from '../index'

describe('AddressForm', () => {
  const props = {
    handleChangeValue: jest.fn(),
    onSubmit: jest.fn(),
    address: '',
    phone: '',
  }

  beforeEach(() => {
    renderWithTheme(<AddressForm {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render input address', () => {
    const addressInput = screen.getAllByTestId('iconInput')

    expect(addressInput[0]).toBeInTheDocument()
  })

  it('should call onChange input address', () => {
    const input = screen.getAllByTestId('iconInput')

    fireEvent.change(input[0], {
      target: { value: ADDRESS.address },
    })

    expect(props.handleChangeValue).toBeCalled()
  })

  it('should render input phone', () => {
    const phoneInput = screen.getAllByTestId('iconInput')
    expect(phoneInput[1]).toBeInTheDocument()
  })

  it('should call onChange input phone', () => {
    const input = screen.getAllByTestId('iconInput')

    fireEvent.change(input[1], {
      target: { value: ADDRESS.phone },
    })

    expect(props.handleChangeValue).toBeCalled()
  })

  it('should call submit form', () => {
    const button = screen.getByTestId('button')

    fireEvent.submit(button)

    expect(props.onSubmit).toBeCalled()
  })

  it('should render button submit', () => {
    const button = screen.getByTestId('button')

    expect(button).toBeInTheDocument()
  })

  it('should render button disable submit', () => {
    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  it('should render button enable', () => {
    cleanup()

    const newProps = {
      ...props,
      phone: 'test',
      address: 'test',
    }

    renderWithTheme(<AddressForm {...newProps} />)

    const button = screen.getByTestId('button')

    expect(button).not.toHaveAttribute('disabled')
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<AddressForm {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render ErrorMessage', () => {
    const newProps = {
      ...props,
      errorMessage: 'Invalid',
      phone: 'test',
      address: 'test',
    }

    renderWithTheme(<AddressForm {...newProps} />)

    const ErrorMessage = screen.getByTestId('errorMessage')

    expect(ErrorMessage).toBeInTheDocument()
  })
})
