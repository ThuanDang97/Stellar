import React from 'react'
import { screen, cleanup, fireEvent } from '@testing-library/react'

// Mock data
import { INPUT_VALUES } from '@mocks/mockData'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import LoginForm from '../index'

describe('LoginForm', () => {
  const props = {
    handleChangeEmail: jest.fn(),
    handleChangePassword: jest.fn(),
    onSubmit: jest.fn(),
    email: '',
    password: '',
  }

  beforeEach(() => {
    renderWithTheme(<LoginForm {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render input email', () => {
    const emailInput = screen.getAllByTestId('iconInput')

    expect(emailInput[0]).toBeInTheDocument()
  })

  it('should call onChange input email', () => {
    const input = screen.getAllByTestId('iconInput')

    fireEvent.change(input[0], {
      target: { value: INPUT_VALUES.email },
    })

    expect(props.handleChangeEmail).toBeCalled()
  })

  it('should render input password', () => {
    const passwordInput = screen.getAllByTestId('iconInput')
    expect(passwordInput[1]).toBeInTheDocument()
  })

  it('should call onChange input password', () => {
    const input = screen.getAllByTestId('iconInput')

    fireEvent.change(input[1], {
      target: { value: INPUT_VALUES.email },
    })

    expect(props.handleChangePassword).toBeCalled()
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
      email: 'test',
      password: 'test',
    }

    renderWithTheme(<LoginForm {...newProps} />)

    const button = screen.getByTestId('button')

    expect(button).not.toHaveAttribute('disabled')
  })

  it('should render ErrorMessage', () => {
    const newProps = {
      ...props,
      errorMessage: { email: 'Invalid', password: 'Invalid' },
      email: '',
      password: '',
    }

    renderWithTheme(<LoginForm {...newProps} />)

    const ErrorMessage = screen.getByTestId('errorMessage')

    expect(ErrorMessage).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<LoginForm {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
