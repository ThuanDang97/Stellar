import { fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Constants
import { EDIT_SUCCESS } from '@constants/text'

// Components
import PopupSuccess from '@components/PopupSuccess'

describe('PopupSuccess Component', () => {
  const mockCloseFunct = jest.fn()

  const props = {
    isOpen: true,
    textContent: EDIT_SUCCESS,
    onClose: mockCloseFunct,
  }

  test('renders PopupSuccess Confirm unchanged', () => {
    const { asFragment } = renderWithTheme(<PopupSuccess {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  test('runs close function after setTimeout', () => {
    jest.useFakeTimers()

    renderWithTheme(<PopupSuccess {...props} />)
    act(() => {
      jest.runAllTimers()
    })

    expect(mockCloseFunct).toHaveBeenCalled()
  })

  test('runs close function on click icon', () => {
    renderWithTheme(<PopupSuccess {...props} />)

    fireEvent.click(screen.getByTestId('button'))

    expect(mockCloseFunct).toHaveBeenCalled()
  })

  test('do not render PopupSuccess when it is not open', () => {
    renderWithTheme(<PopupSuccess {...props} isOpen={false} />)

    expect(screen.queryByTestId('popup-success')).not.toBeInTheDocument()
  })
})
