// Components
import Title from '@components/Title/index'

// Themes
import { theme } from '@themes/index'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Title Component', () => {
  const props = {
    title: 'Start Paying Bills & Building Credit With Stellar',
    color: theme.colors.black,
    size: theme.typography.fontSize.xlg,
    weight: theme.typography.fontWeight.bold,
    align: 'center',
  }

  test('Component Title matches DOM Snapshot', () => {
    const { asFragment } = renderWithTheme(<Title {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
