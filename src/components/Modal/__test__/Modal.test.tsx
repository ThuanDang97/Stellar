import { fireEvent, screen } from '@testing-library/react'

// Components
import Modal from '@components/Modal'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Modal Component', () => {
  const mockCloseFunct = jest.fn()

  const props = {
    children: <p>Hello</p>,
    isOpen: true,
    onClose: mockCloseFunct,
  }

  it('renders modal unchanged', () => {
    const { asFragment } = renderWithTheme(<Modal {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('runs close function on click icon', async () => {
    renderWithTheme(<Modal {...props} />)

    fireEvent.click(await screen.findByTestId('close-icon'))

    expect(mockCloseFunct).toHaveBeenCalled()
  })

  it('runs close function on click backdrop', async () => {
    renderWithTheme(<Modal {...props} />)

    fireEvent.click(await screen.findByTestId('backdrop'))

    expect(mockCloseFunct).toHaveBeenCalled()
  })

  it('do not render modal when it is not open', async () => {
    renderWithTheme(<Modal {...props} isOpen={false} />)

    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument()
  })
})
