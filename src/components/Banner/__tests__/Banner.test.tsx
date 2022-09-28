// Components
import Banner from '@components/Banner'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Banner Component', () => {
  it('renders Banner when not link bill unchanged', () => {
    const { asFragment } = renderWithTheme(<Banner isLinkBill={false} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders Banner after linked bill unchanged', () => {
    const { asFragment } = renderWithTheme(<Banner isLinkBill />)

    expect(asFragment()).toMatchSnapshot()
  })
})
