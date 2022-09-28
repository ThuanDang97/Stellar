import React from 'react'
import { screen, cleanup, fireEvent } from '@testing-library/react'

// Mock data
import { INPUT_VALUES } from '@mocks/mockData'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import InputGroup from '../index'

describe('InputGroup', () => {
  const handelOnChange = jest.fn()
  beforeEach(() => {
    cleanup()

    renderWithTheme(
      <InputGroup
        type="password"
        name="checkPass"
        placeholder="test"
        label="test"
        value=""
        onChange={handelOnChange}
      />,
    )
  })

  it('should render input', () => {
    const input = screen.getByTestId('iconInput')

    expect(input).toBeInTheDocument()
  })

  it('should call handelOnChange', () => {
    const input = screen.getByTestId('iconInput') as HTMLInputElement

    fireEvent.change(input, {
      target: { value: INPUT_VALUES.email },
    })

    expect(handelOnChange).toBeCalled()
  })

  it('should render label', () => {
    const label = screen.getByTestId('label')

    expect(label).toBeInTheDocument()
  })
})
