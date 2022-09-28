import { renderWithTheme } from '@utils/themeProvider'

// Components
import TableCell from '..'

describe('TableCell Component', () => {
  it('renders table cell unchanged', () => {
    const props = {
      imgUrl: '/images/netflix.jpg',
      title: 'netflix',
      subTitle: 'report monthly',
    }

    const { asFragment } = renderWithTheme(<TableCell {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
