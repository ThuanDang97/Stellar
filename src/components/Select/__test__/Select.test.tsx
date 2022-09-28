import { fireEvent, screen, waitFor } from '@testing-library/react'

// Components
import Select from '@components/Select'

// Mocks
import { SELECT_OPTIONS } from '@mocks/mockData'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Select Component', () => {
  const handleSelect = jest.fn()
  const mockData = SELECT_OPTIONS
  const component = <Select handleSelect={handleSelect} listOption={mockData} />

  test('Component Select matchers DOM Snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })

  test('Component Select should render default correctly', () => {
    renderWithTheme(component)
    waitFor(() => {
      expect(screen.getByTestId('select-value')).toHaveTextContent(
        mockData[1].name,
      )
    })
  })

  test('Render menu should render after click on dropdown', () => {
    renderWithTheme(component)

    fireEvent.click(screen.getByTestId('select'))
    expect(screen.getByTestId('select-menu')).toBeInTheDocument()
  })

  test('Title option must change with selected option', () => {
    renderWithTheme(component)

    fireEvent.click(screen.getByTestId('select'))
    fireEvent.click(screen.getByText(mockData[1].name))
    expect(screen.getByTestId('select-value')).toHaveTextContent(
      mockData[1].name,
    )
  })
})
