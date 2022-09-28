// Components
import AnimatedBillGroup from '@components/AnimatedBillGroup'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('AnimatedBillGroup Component', () => {
  it('renders animatedBillGroup unchanged', () => {
    const { asFragment } = renderWithTheme(<AnimatedBillGroup />)

    expect(asFragment()).toMatchSnapshot()
  })
})
