import React from 'react'
import { screen, cleanup, fireEvent } from '@testing-library/react'

// Mock data
import { SSN_NUMBER } from '@mocks/mockData'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import SSNForm from '../index'

describe('SSNForm', () => {
  const props = {
    handleChangeValue: jest.fn(),
    onSubmit: jest.fn(),
    securityNumber: '',
  }

  beforeEach(() => {
    renderWithTheme(<SSNForm {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render ssn input', () => {
    const addressInput = screen.getAllByTestId('iconInput')

    expect(addressInput[0]).toBeInTheDocument()
  })

  it('should call onChange input ssn', () => {
    const input = screen.getAllByTestId('iconInput')

    fireEvent.change(input[0], {
      target: { value: SSN_NUMBER },
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
      securityNumber: SSN_NUMBER,
    }

    renderWithTheme(<SSNForm {...newProps} />)

    const button = screen.getByTestId('button')

    expect(button).not.toHaveAttribute('disabled')
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<SSNForm {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render ErrorMessage', () => {
    const newProps = {
      ...props,
      errorMessage: 'Invalid',
      securityNumber: '',
    }

    renderWithTheme(<SSNForm {...newProps} />)

    const ErrorMessage = screen.getByTestId('errorMessage')

    expect(ErrorMessage).toBeInTheDocument()
  })
})
