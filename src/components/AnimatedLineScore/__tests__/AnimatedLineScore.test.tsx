// Components
import { renderWithTheme } from '@utils/themeProvider'
import AnimatedLineScore from '..'

describe('AnimatedLineScore Component', () => {
  it('renders animatedLineScore unchanged', () => {
    const { asFragment } = renderWithTheme(<AnimatedLineScore />)

    expect(asFragment()).toMatchSnapshot()
  })
})
