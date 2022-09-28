// Components
import AnimatedLineBill from '@components/AnimatedLineBill'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('AnimatedLineBill Component', () => {
  it('renders animatedLineBill unchanged', () => {
    const { asFragment } = renderWithTheme(<AnimatedLineBill />)

    expect(asFragment()).toMatchSnapshot()
  })
})
