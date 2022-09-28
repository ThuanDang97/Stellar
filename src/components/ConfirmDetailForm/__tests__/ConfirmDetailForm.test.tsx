import { cleanup } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import ConfirmDetailForm from '@components/ConfirmDetailForm'

describe('ConfirmDetailForm Component', () => {
  const props = {
    confirmDetailForm: {
      amount: '15.99',
      bankName: 'Chase',
      draftDate: 25,
      payPeriod: '3',
    },
    handleChangeAmount: jest.fn(),
    handleChangeBankNumber: jest.fn(),
    handleChangePayByDay: jest.fn(),
    handleChangePayByMonth: jest.fn(),
    handleSubmit: jest.fn(),
    nameApplication: 'Netflix',
    imageApplication: '/images/netflix.png',
    listBankNumber: [],
    listNumberPaymentsMonth: [],
  }
  beforeEach(() => {
    renderWithTheme(<ConfirmDetailForm {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('matches snapshot', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2022-08-30'))

    const { asFragment } = renderWithTheme(<ConfirmDetailForm {...props} />)

    expect(asFragment()).toMatchSnapshot()

    jest.useRealTimers()
  })
})
