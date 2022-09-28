// Components
import AnimatedScoreGroup from '@components/AnimatedScoreGroup'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('AnimatedScoreGroup Component', () => {
  it('renders animatedScoreGroup unchanged', () => {
    const { asFragment } = renderWithTheme(<AnimatedScoreGroup />)

    expect(asFragment()).toMatchSnapshot()
  })
})
