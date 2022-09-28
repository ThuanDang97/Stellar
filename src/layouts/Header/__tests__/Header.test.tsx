// Layouts
import Header from '@layouts/Header'

// Themes
import { theme } from '@themes/index'

// Utils
import { renderWithTheme } from '@utils/themeProvider'
import { NextRouterProvider } from '@utils/nextRouterProvider'

const route = { route: '/abc' }

describe('Header layout', () => {
  const defaultComponent = (
    <NextRouterProvider router={route}>
      <Header showArrow loginHref="/login" HeaderType="defaultHeader" />
    </NextRouterProvider>
  )

  const primaryHeader = (
    <NextRouterProvider router={route}>
      <Header
        HeaderType="primaryHeader"
        avatarUrl="https://picsum.photos/20"
        bgColor={theme.colors.firefly}
      />
    </NextRouterProvider>
  )

  test('Header Default matchers DOM Snapshot', () => {
    const { container } = renderWithTheme(defaultComponent)

    expect(container).toMatchSnapshot()
  })

  test('Header Primary matchers DOM Snapshot', () => {
    const { container } = renderWithTheme(primaryHeader)

    expect(container).toMatchSnapshot()
  })
})
