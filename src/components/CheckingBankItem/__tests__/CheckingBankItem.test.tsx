// Components
import CheckingBankItem from '@components/CheckingBankItem'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Mocks
import { BANK_NUMBER } from '@mocks/mockData'

describe('CheckingBankItem Component', () => {
  it('renders CheckingBankItem with number unchanged', () => {
    const props = {
      bankNumber: BANK_NUMBER,
    }

    const { asFragment } = renderWithTheme(<CheckingBankItem {...props} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders CheckingBankItem without number unchanged', () => {
    const { asFragment } = renderWithTheme(<CheckingBankItem />)

    expect(asFragment()).toMatchSnapshot()
  })
})
