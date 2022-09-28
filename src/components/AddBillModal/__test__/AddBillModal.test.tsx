import React from 'react'
import { screen, cleanup } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import AddBillModal from '../index'

describe('AddBillModal', () => {
  const props = {
    onClose: jest.fn(),
    handleChangeValue: jest.fn(),
    amount: '',
    billerItem: '',
    setBillerItem: jest.fn(),
  }
  beforeEach(() => {
    renderWithTheme(<AddBillModal isOpen {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render AddBillModal', () => {
    const backdrop = screen.getByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<AddBillModal isOpen {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should disable btn', () => {
    cleanup()
    renderWithTheme(<AddBillModal isOpen {...props} />)

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  it('should enable btn', () => {
    const newProps = { ...props, amount: '$1', billerItem: 'Netflix' }

    cleanup()
    renderWithTheme(<AddBillModal isOpen {...newProps} />)

    const button = screen.getByTestId('button')

    expect(button).not.toHaveAttribute('disabled')
  })
})
