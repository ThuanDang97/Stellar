import { fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Constants
import { DELETE_CONFIRM } from '@constants/text'

// Components
import PopupConfirm from '@components/PopupConfirm'

describe('PopupConfirm Component', () => {
  const mockCloseFunct = jest.fn()
  const mockDeleteFunct = jest.fn()

  const props = {
    isOpen: true,
    onClose: mockCloseFunct,
    handleDelete: mockDeleteFunct,
  }

  test('renders PopupConfirm unchanged', () => {
    const { asFragment } = renderWithTheme(
      <PopupConfirm {...props} textConfirm={DELETE_CONFIRM.DELETE_GOAL} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  test('runs close function on click icon', async () => {
    renderWithTheme(
      <PopupConfirm {...props} textConfirm={DELETE_CONFIRM.DELETE_GOAL} />,
    )

    fireEvent.click(await screen.findByTestId('close-icon'))

    expect(mockCloseFunct).toHaveBeenCalled()
  })

  test('runs close function on click backdrop', async () => {
    renderWithTheme(
      <PopupConfirm {...props} textConfirm={DELETE_CONFIRM.DELETE_GOAL} />,
    )

    fireEvent.click(await screen.findByTestId('backdrop'))

    expect(mockCloseFunct).toHaveBeenCalled()
  })

  test('runs delete function on click Delete button', () => {
    renderWithTheme(
      <PopupConfirm {...props} textConfirm={DELETE_CONFIRM.DELETE_GOAL} />,
    )

    fireEvent.click(screen.getByRole('button', { name: /Delete/i }))

    expect(mockDeleteFunct).toHaveBeenCalled()
  })

  test('do not render PopupConfirm when it is not open', () => {
    renderWithTheme(<PopupConfirm {...props} isOpen={false} />)

    expect(screen.queryByTestId('modal-content')).not.toBeInTheDocument()
  })
})
