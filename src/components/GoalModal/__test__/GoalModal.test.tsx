import React from 'react'
import { screen, cleanup } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import GoalModal from '../index'

describe('GoalModal', () => {
  const props = {
    onClose: jest.fn(),
    selectedItem: [],
    setSelectedItem: jest.fn(),
    onSubmit: jest.fn(),
    selectedGoals: [],
  }
  beforeEach(() => {
    renderWithTheme(<GoalModal isOpen {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render GoalModal', () => {
    const backdrop = screen.getByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = renderWithTheme(<GoalModal isOpen {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should disable btn', () => {
    cleanup()
    renderWithTheme(<GoalModal isOpen {...props} />)

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('disabled')
  })

  it('should enable btn', () => {
    const newProps = { ...props, selectedItem: ['g1'] }

    cleanup()
    renderWithTheme(<GoalModal isOpen {...newProps} />)

    const button = screen.getByTestId('button')

    expect(button).not.toHaveAttribute('disabled')
  })
})
