// Library
import { cleanup, fireEvent, screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import Button from '@components/Button'

// Define props
const props = {
  label: 'Button',
  onClick: jest.fn(),
}

describe('Button render', () => {
  afterEach(cleanup)

  const component = renderWithTheme(<Button {...props} />)

  it('should render button component', () => {
    const { asFragment } = component

    expect(asFragment()).toMatchSnapshot()
  })

  it('should call onClick when click button', async () => {
    renderWithTheme(<Button {...props} />)

    fireEvent.click(await screen.findByTestId('button'))

    expect(props.onClick).toHaveBeenCalled()
  })
})
