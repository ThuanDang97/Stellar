// Components
import LoadingIndicator from '@components/LoadingIndicator'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('LoadingIndicator component', () => {
  it('should be renders full loading indicator snapshot', () => {
    const { asFragment } = renderWithTheme(<LoadingIndicator />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should be renders inline loading indicator snapshot', () => {
    const { asFragment } = renderWithTheme(<LoadingIndicator isFull={false} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
