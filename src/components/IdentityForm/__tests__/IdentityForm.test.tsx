import { screen } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Mocks
import { AVATAR_DEFAULT } from '@mocks/mockData'

// Components
import IdentityForm from '@components/IdentityForm'

describe('IdentityForm Component', () => {
  const handleChangeDateOfBirth = jest.fn()
  const handleSubmit = jest.fn()
  const handleChangeInput = jest.fn()

  const component = (
    <IdentityForm
      onSubmit={handleSubmit}
      onChangeInput={handleChangeInput}
      onChangeDayOfBirth={handleChangeDateOfBirth}
      firstName={AVATAR_DEFAULT.firstName}
      lastName={AVATAR_DEFAULT.lastName}
    />
  )

  test('Component IdentityForm matchers DOM Snapshot', () => {
    const { container } = renderWithTheme(component)

    expect(container).toMatchSnapshot()
  })

  test('Component IdentityForm should render default correctly', () => {
    renderWithTheme(component)

    const input = screen.getAllByTestId('iconInput')

    expect(input[0]).toHaveValue(AVATAR_DEFAULT.firstName)
    expect(input[1]).toHaveValue(AVATAR_DEFAULT.lastName)
  })
})
