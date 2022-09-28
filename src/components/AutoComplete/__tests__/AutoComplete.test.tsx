import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Component
import AutoComplete from '@components/AutoComplete'

describe('AutoComplete Component', () => {
  const component = <AutoComplete billerItem="" setBillerItem={jest.fn()} />
  it('renders AutoComplete component', () => {
    const { container } = renderWithTheme(component)
    expect(container).toMatchSnapshot()
  })

  test('Render list biller after click on dropdown', () => {
    renderWithTheme(component)

    fireEvent.click(screen.getByTestId('select'))
    expect(screen.getByTestId('select-menu')).toBeInTheDocument()
  })
})
