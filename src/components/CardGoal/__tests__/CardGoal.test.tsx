import '@testing-library/jest-dom'
import { cleanup, screen, fireEvent } from '@testing-library/react'

// Components
import CardGoal from '@components/CardGoal'

// Props type
import { CardGoalProps } from '@self-types/components/CardGold.props'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Mock data
import { GOAL_ITEM } from '@mocks/mockData'

// Defined CardGoal Props
const props: CardGoalProps = {
  iconUrl: GOAL_ITEM.iconUrl,
  title: GOAL_ITEM.title,
  handleSelectGoal: jest.fn(),
}

describe('CardGoal component', () => {
  afterEach(cleanup)
  const component = renderWithTheme(
    <CardGoal data-testid="CardGoal" {...props} />,
  )

  it('should be renders CardGoal default snapshot', () => {
    const { asFragment } = component
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be renders CardGoal active snapshot', () => {
    const newProps: CardGoalProps = {
      ...props,
      isActive: true,
    }

    const { asFragment } = renderWithTheme(<CardGoal {...newProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call handleSelectGoal when click select goal', async () => {
    renderWithTheme(<CardGoal data-testid="CardGoal" {...props} />)

    fireEvent.click(await screen.findByTestId('card-goal'))

    expect(props.handleSelectGoal).toHaveBeenCalled()
  })
})
