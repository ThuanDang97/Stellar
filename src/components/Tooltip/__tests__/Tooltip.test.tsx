import { fireEvent, screen } from '@testing-library/react'

// Components
import Tooltip from '@components/Tooltip'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

describe('Tooltip Component', () => {
  it('renders tooltip unchanged', () => {
    const props = {
      children: <p>Hello</p>,
      title: 'This is the tooltip',
    }

    const { asFragment } = renderWithTheme(<Tooltip {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('displays tooltip on hover target', async () => {
    const props = {
      children: <p>Hello</p>,
      title: 'This is the tooltip',
    }

    renderWithTheme(<Tooltip {...props} />)

    const target = screen.getByTestId('tooltip-wrapper')

    fireEvent.mouseOver(target)

    expect(await screen.findByText('This is the tooltip')).toBeInTheDocument()
  })
})
