import React from 'react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'
import { NextRouterProvider } from '@utils/nextRouterProvider'

// Page
import AddFirstBill from '@pages/add-first-bill'
import { USER_ID } from '@mocks/mockData'

const query = { userid: USER_ID }

describe('Add First Bill Page', () => {
  it('Should be renders add first bill page ', () => {
    const { asFragment } = renderWithTheme(
      <NextRouterProvider router={{ query }}>
        <AddFirstBill />
      </NextRouterProvider>,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
