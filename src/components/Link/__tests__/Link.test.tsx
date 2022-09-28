import { screen } from '@testing-library/react'

// Components
import LinkComponent from '@components/Link'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Link Component', () => {
  const component = <LinkComponent text="Link" href="./abc" />

  test('Component Link matchers DOM Snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })

  test('Component Link should render default correctly', () => {
    renderWithTheme(component)

    expect(screen.getByTestId('link')).toHaveTextContent('Link')
  })
})
