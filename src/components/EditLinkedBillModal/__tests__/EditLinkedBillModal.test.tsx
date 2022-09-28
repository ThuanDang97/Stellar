import { cleanup } from '@testing-library/react'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Components
import EditLinkedBillModal from '@components/EditLinkedBillModal'

// Types
import { EditLinkedBillFormProps } from '@self-types/components/EditLinkedBillModal.props'

describe('ConfirmDetailForm Component', () => {
  const editLinkedBillForm: EditLinkedBillFormProps = {
    id: '123',
    amount: '15.99',
    bankName: 'Chase',
    draftDate: 25,
    payPeriod: '3',
  }
  const props = {
    editLinkedBillForm,
    handleChangeAmount: jest.fn(),
    handleChangeBankNumber: jest.fn(),
    handleChangePayByDay: jest.fn(),
    handleChangePayByMonth: jest.fn(),
    handleSubmit: jest.fn(),
    nameApplication: 'Netflix',
    imageApplication: '/images/netflix.png',
    listBankNumber: [],
    listNumberPaymentsMonth: [],
    status: 'PAID',
    isOpen: true,
    billItem: '',
    setBillItem: jest.fn(),
    onSubmitBill: jest.fn(),
    isConnectAccount: false,
    setIsConnectAccount: jest.fn(),
    loginConnectAccount: { email: '', password: '' },
    handleSubmitConnectAccount: jest.fn(),
  }
  beforeEach(() => {
    renderWithTheme(<EditLinkedBillModal {...props} />)
  })

  afterEach(() => {
    cleanup()
  })

  it('matches snapshot', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2022-08-30'))

    const { asFragment } = renderWithTheme(<EditLinkedBillModal {...props} />)

    expect(asFragment()).toMatchSnapshot()

    jest.useRealTimers()
  })
})
