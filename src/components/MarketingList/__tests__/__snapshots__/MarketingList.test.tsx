// Library
import { cleanup } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import MarketingList from '@components/MarketingList'

describe('Marketing render', () => {
  afterEach(cleanup)

  const component = renderWithTheme(
    <MarketingList setSelectedItem={jest.fn()} selectedItem={[]} />,
  )

  it('should render marketing component', () => {
    const { asFragment } = component

    expect(asFragment()).toMatchSnapshot()
  })
})
