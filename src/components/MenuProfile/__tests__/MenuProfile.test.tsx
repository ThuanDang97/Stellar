import React from 'react'

// Components
import MenuProfile from '@components/MenuProfile'

// Utils
import { renderWithTheme } from '@utils/themeProvider'
import { NextRouterProvider } from '@utils/nextRouterProvider'
import { MENU_STATUS } from '@constants/variables'

describe('MenuProfile Component', () => {
  const component = (
    <NextRouterProvider router={{ route: '/abc' }}>
      <MenuProfile
        fullName=""
        menuStatus={MENU_STATUS.FADE_OUT}
        setMenuStatus={jest.fn()}
      />
    </NextRouterProvider>
  )

  test('Component MenuProfile matchers DOM Snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })
})
