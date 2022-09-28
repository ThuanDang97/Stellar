// Library
import { cleanup, screen, fireEvent } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Props type
import { LabelBoxProps } from '@self-types/components/LabelBox.props'

// Components
import LabelBox from '@components/LabelBox'

// Define props

const props: LabelBoxProps = {
  title: 'Label',
  handleOnClick: jest.fn(),
}

describe('LabelBox Component', () => {
  afterEach(cleanup)
  const component = renderWithTheme(<LabelBox {...props} />)

  it('should render LabelBox component ', () => {
    const { asFragment } = component

    expect(asFragment()).toMatchSnapshot()
  })

  it('should be renders LabelBox active snapshot', () => {
    const newProps: LabelBoxProps = {
      ...props,
      isActive: true,
    }

    const { asFragment } = renderWithTheme(<LabelBox {...newProps} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should call handleOnClick when click LabelBox', async () => {
    renderWithTheme(<LabelBox data-testid="LabelBox" {...props} />)

    fireEvent.click(await screen.findByTestId('label-box'))

    expect(props.handleOnClick).toHaveBeenCalled()
  })
})
