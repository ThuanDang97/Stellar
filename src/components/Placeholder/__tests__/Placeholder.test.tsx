import '@testing-library/jest-dom'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// component
import Placeholder from '../index'

describe('Placeholder Component', () => {
  it('renders placeholder component with link bill', () => {
    const { container } = renderWithTheme(<Placeholder isLinkBill />)
    expect(container).toMatchSnapshot()
  })

  it('renders placeholder component with goal', () => {
    const { container } = renderWithTheme(<Placeholder isLinkBill={false} />)
    expect(container).toMatchSnapshot()
  })
})
