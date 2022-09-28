import { renderWithTheme } from '@utils/themeProvider'

// Components
import TableControlPopup from '@components/TableControlPopup'

describe('TableControlPopup Component', () => {
  it('renders table control popup ', () => {
    const { asFragment } = renderWithTheme(
      <TableControlPopup
        idItem=""
        handleEditTable={() => undefined}
        handleDeleteTable={() => undefined}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
