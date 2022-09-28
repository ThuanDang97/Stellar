import { TableColumnProps } from '@self-types/components/Table.props'

export const TABLE_BUTTON = {
  ADD_BILL: '+ Add Bill',
  ADD_GOAL: '+ Add Goal',
}

export const SORT_TYPE = {
  ASC: 'asc',
  DESC: 'desc',
}

export const SORT_ICON = {
  [SORT_TYPE.ASC]: '/icons/caret-up-active.svg',
  [SORT_TYPE.DESC]: '/icons/caret-down-active.svg',
}

export const TABLE_TITLE = {
  LINK_BILL: 'Linked Bills',
  ADD_BILL: 'Finish Adding Bills',
  MY_GOAL: 'My Goals',
}

export const ADD_BILLS_COLUMNS: TableColumnProps[] = [
  {
    field: 'description',
    headerName: 'Description',
    sortable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    sortable: true,
  },
  {
    field: 'buttonControl',
    headerName: '',
    sortable: false,
  },
]

export const MY_GOAL_COLUMNS: TableColumnProps[] = [
  {
    field: 'goal',
    headerName: 'Goal',
    sortable: true,
  },
  {
    field: 'scoreNeeded',
    headerName: 'Score Needed',
    sortable: true,
  },
  {
    field: 'pointNeeded',
    headerName: 'Points Needed',
    sortable: true,
  },
]

export const LINKED_BILLS_COLUMNS: TableColumnProps[] = [
  {
    field: 'description',
    headerName: 'Description',
    sortable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    sortable: true,
  },
  {
    field: 'draftDate',
    headerName: 'Draft Date',
    sortable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: true,
  },
]

export const SORT_ICON_DEFAULT = '/icons/caret-down-solid.svg'
