import React from 'react'
import { screen, cleanup, fireEvent } from '@testing-library/react'

// Mock data
import { INPUT_VALUES } from '@mocks/mockData'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import Input from '../index'

describe('Input component', () => {
  const handleOnChange = jest.fn()

  afterEach(() => {
    cleanup()
  })

  it('should render InputIcon type email', () => {
    renderWithTheme(
      <Input type="email" placeholder="Enter here" onChange={handleOnChange} />,
    )

    const inputIcon = screen.getByTestId('iconInput') as HTMLInputElement

    expect(inputIcon).toBeInTheDocument()
  })

  it('should call onChange InputIcon type email ', () => {
    renderWithTheme(
      <Input
        type="email"
        placeholder="Enter here"
        onChange={handleOnChange}
        iconUrl="/icons/envelope"
      />,
    )

    const input = screen.getByTestId('iconInput') as HTMLInputElement

    fireEvent.change(input, {
      target: { value: INPUT_VALUES.email },
    })

    expect(handleOnChange).toBeCalled()
  })

  it('should render InputIcon type text', () => {
    renderWithTheme(
      <Input
        type="text"
        placeholder="Enter here"
        onChange={handleOnChange}
        iconUrl="/icons/envelope"
      />,
    )

    const inputIcon = screen.getByTestId('iconInput') as HTMLInputElement

    expect(inputIcon).toBeInTheDocument()
  })

  it('should render InputIcon type password', () => {
    renderWithTheme(
      <Input
        type="password"
        placeholder="Enter here"
        onChange={handleOnChange}
        iconUrl="/icons/lock"
      />,
    )

    const inputIcon = screen.getByTestId('iconInput') as HTMLInputElement

    expect(inputIcon).toBeInTheDocument()
  })

  it('should render InputIcon name search', () => {
    renderWithTheme(
      <Input
        type="password"
        placeholder="Enter here"
        onChange={handleOnChange}
        iconUrl="/icons/lock"
      />,
    )

    const inputIcon = screen.getByTestId('iconInput') as HTMLInputElement

    expect(inputIcon).toBeInTheDocument()
  })
})
