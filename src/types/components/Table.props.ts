// Table list props
export interface AddedBillListProps {
  id: string
  description: string
  imgUrl: string
  amount: number
}

export interface LinkedBillListProps extends AddedBillListProps {
  email: string
  password: string
  bankName: string
  draftDate: number
  payPeriod: string
  status: 'paid' | 'unpaid'
}

export interface GoalListProps {
  id: string
  value: string
  goal: string
  imgUrl: string
  scoreNeeded: number
  pointNeeded: number
}

// Table row props
export interface AddedBillTableRowProps {
  description: JSX.Element
  amount: string
  buttonControl: JSX.Element
}

export interface GoalTableRowProps {
  goal: JSX.Element
  scoreNeeded: string
  pointNeeded: JSX.Element
}

export interface LinkedBillTableRowProps {
  description: JSX.Element
  amount: string
  draftDate: string
  status: JSX.Element
}

// Table column props
export type TableFieldProps =
  | keyof AddedBillTableRowProps
  | keyof LinkedBillTableRowProps
  | keyof GoalTableRowProps

export interface TableColumnProps {
  field: TableFieldProps
  headerName: string
  sortable: boolean
}

// Sort data props
export enum SortBy {
  ASC = 'asc',
  DESC = 'desc',
}

export interface SortTable {
  goalSort: {
    field: keyof GoalListProps
    sortBy: SortBy
  }
}

export enum TableButtonActions {
  ADD_GOAL = 'addGoal',
  ADD_BILL = 'addBill',
  LINK_BILL = 'linkBill',
}

export interface SortDataProps {
  field?: TableFieldProps

  sortBy?: SortBy
}

// Table props
export interface TableProps {
  tableId: string
  tableTitle: string
  columns: TableColumnProps[]
  isLoading?: boolean
  handleAddItem?: () => void
  onClickSort?: (data: SortDataProps) => void
  tableData:
    | LinkedBillTableRowProps[]
    | AddedBillTableRowProps[]
    | GoalTableRowProps[]
  hasViewAll?: boolean
  buttonTitle?: string
  isReLoad?: boolean
  isLocked?: boolean
}

export interface TableHeadStyledProps {
  sortable?: boolean
  isEmptyData?: boolean
  bgColorHover?: string
  fontSize?: number
  tableId?: string
}

export interface ITableData {
  goalList: GoalListProps[]
  addedBillList: AddedBillListProps[]
  linkedBillList: LinkedBillListProps[]
}
