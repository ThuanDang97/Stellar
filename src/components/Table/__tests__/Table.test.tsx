import { fireEvent, screen } from '@testing-library/react'

// Components
import Table from '@components/Table'

// Utils
import { renderWithTheme } from '@utils/themeProvider'

// Props type
import { TableProps } from '@self-types/components/Table.props'

// Constants
import {
  TABLE_BUTTON,
  TABLE_TITLE,
  ADD_BILLS_COLUMNS,
  LINKED_BILLS_COLUMNS,
  MY_GOAL_COLUMNS,
} from '@constants/index'
// Constants

// Mocks
import {
  ADD_BILL_LIST_ROW,
  LINKED_BILL_LIST_ROW,
  MY_GOALS_ROW,
} from '@mocks/tableMock'

const goalProps: TableProps = {
  tableId: 'goalTable',
  tableTitle: TABLE_TITLE.MY_GOAL,
  columns: MY_GOAL_COLUMNS,
  tableData: MY_GOALS_ROW,
  buttonTitle: TABLE_BUTTON.ADD_GOAL,
  handleAddItem: jest.fn(),
}

const addBillProps: TableProps = {
  tableId: 'addBill',
  tableTitle: TABLE_TITLE.ADD_BILL,
  columns: ADD_BILLS_COLUMNS,
  tableData: ADD_BILL_LIST_ROW,
  buttonTitle: TABLE_BUTTON.ADD_BILL,
  hasViewAll: true,
  handleAddItem: jest.fn(),
}

const linkBillProps: TableProps = {
  tableId: 'linkBill',
  tableTitle: TABLE_TITLE.LINK_BILL,
  columns: LINKED_BILLS_COLUMNS,
  tableData: LINKED_BILL_LIST_ROW,
  hasViewAll: true,
}

describe('Empty table snapshot', () => {
  it('renders empty add bill table unchanged', () => {
    const { asFragment } = renderWithTheme(
      <Table {...addBillProps} tableData={[]} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders empty add goal table unchanged', () => {
    const { asFragment } = renderWithTheme(
      <Table {...goalProps} tableData={[]} />,
    )

    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Full data table snapshot', () => {
  it('renders full data link bill table unchanged', () => {
    const { asFragment } = renderWithTheme(<Table {...linkBillProps} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders full data add bill table unchanged', () => {
    const { asFragment } = renderWithTheme(<Table {...addBillProps} />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders full data add goal table unchanged', () => {
    const { asFragment } = renderWithTheme(<Table {...goalProps} />)

    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Loading table unchanged', () => {
  it('renders loading link bill table unchanged', () => {
    const { asFragment } = renderWithTheme(
      <Table {...linkBillProps} isLoading />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders loading add bill table unchanged', () => {
    const { asFragment } = renderWithTheme(
      <Table {...addBillProps} isLoading />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('renders loading add goal table unchanged', () => {
    const { asFragment } = renderWithTheme(<Table {...goalProps} isLoading />)

    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Table call function', () => {
  const onClickSort = jest.fn()
  const handleAddItem = jest.fn()

  it('should call sort function', () => {
    renderWithTheme(<Table {...goalProps} onClickSort={onClickSort} />)

    const amountTableHead = screen.getByTestId('sort-goal')

    fireEvent.click(amountTableHead)

    expect(onClickSort).toHaveBeenCalledTimes(1)

    fireEvent.click(amountTableHead)

    expect(onClickSort).toHaveBeenCalledTimes(2)
  })

  it('should call add item function', () => {
    renderWithTheme(<Table {...goalProps} handleAddItem={handleAddItem} />)

    const buttonAddGoal = screen.getByRole('button', { name: /add goal/i })

    fireEvent.click(buttonAddGoal)

    expect(handleAddItem).toHaveBeenCalledTimes(1)
  })
})
