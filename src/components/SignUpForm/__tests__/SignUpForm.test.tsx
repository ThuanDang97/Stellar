import { screen } from '@testing-library/react'

// Components
import SignUpForm from '@components/SignUpForm'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Constants
import { EXITS_EMAIL, INPUT_VALUES } from '@mocks/mockData'

describe('SignUpForm Component', () => {
  const handleSubmit = jest.fn()
  const component = (
    <SignUpForm
      handleSubmit={handleSubmit}
      userName={INPUT_VALUES.text}
      email={EXITS_EMAIL}
      password={INPUT_VALUES.password}
      handleChangeInput={jest.fn()}
    />
  )

  test('Component SignUpForm matchers DOM Snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })

  test('Component SignUpForm should render default correctly', () => {
    renderWithTheme(component)

    const input = screen.getAllByTestId('iconInput')

    expect(input[0]).toHaveValue(INPUT_VALUES.text)
    expect(input[1]).toHaveValue(EXITS_EMAIL)
    expect(input[2]).toHaveValue(INPUT_VALUES.password)
  })
})
