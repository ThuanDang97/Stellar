import '@testing-library/jest-dom'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import ListGoal from '@components/ListGoal'

describe('ListGoal Component', () => {
  const props = {
    selectedItem: ['goal-g1'],
    setSelectedItem: jest.fn(),
  }
  it('renders ListGoal component', () => {
    const { container } = renderWithTheme(
      <ListGoal
        selectedItem={props.selectedItem}
        setSelectedItem={props.setSelectedItem}
        selectedGoals={[]}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
