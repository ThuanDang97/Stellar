import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import Table from '@components/Table'

// Mocks
import {
  ADD_BILL_LIST_ROW,
  LINKED_BILL_LIST_ROW,
  MY_GOALS_ROW,
} from '@mocks/tableMock'

// Constants
import {
  TABLE_BUTTON,
  TABLE_TITLE,
  ADD_BILLS_COLUMNS,
  LINKED_BILLS_COLUMNS,
  MY_GOAL_COLUMNS,
} from '@constants/index'

// Prop types
import { GoalTableRowProps } from '@self-types/components/Table.props'

export default {
  title: 'Components/Table',
  component: Table,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          width: '600px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

// Link bill
export const FullDataLinkTable = Template.bind({})
FullDataLinkTable.args = {
  columns: LINKED_BILLS_COLUMNS,
  tableData: LINKED_BILL_LIST_ROW,
  tableId: 'linkBill',
  tableTitle: TABLE_TITLE.LINK_BILL,
  hasViewAll: true,
}

export const LoadingLinkTable = Template.bind({})
LoadingLinkTable.args = {
  tableId: 'linkBill',
  tableData: [],
  columns: LINKED_BILLS_COLUMNS,
  tableTitle: TABLE_TITLE.LINK_BILL,
  hasViewAll: true,
  isLoading: true,
}

// Add bill
export const EmptyTableAddBill = Template.bind({})
EmptyTableAddBill.args = {
  tableId: 'addBill',
  tableTitle: TABLE_TITLE.ADD_BILL,
  hasViewAll: true,
  tableData: [],
  columns: ADD_BILLS_COLUMNS,
  buttonTitle: TABLE_BUTTON.ADD_BILL,
  handleAddItem: () => undefined,
}

export const FullDataAddBillTable = Template.bind({})
FullDataAddBillTable.args = {
  tableId: 'addBill',
  tableTitle: TABLE_TITLE.ADD_BILL,
  hasViewAll: true,
  tableData: ADD_BILL_LIST_ROW,
  columns: ADD_BILLS_COLUMNS,
  buttonTitle: TABLE_BUTTON.ADD_BILL,
  handleAddItem: () => undefined,
}

export const LoadingAddBillTable = Template.bind({})
LoadingAddBillTable.args = {
  tableId: 'addBill',
  tableTitle: TABLE_TITLE.ADD_BILL,
  hasViewAll: true,
  tableData: [],
  columns: ADD_BILLS_COLUMNS,
  isLoading: true,
  buttonTitle: TABLE_BUTTON.ADD_BILL,
  handleAddItem: () => undefined,
}

// My goal
export const EmptyTableGoal = Template.bind({})
EmptyTableGoal.args = {
  tableId: 'goalTable',
  tableTitle: TABLE_TITLE.MY_GOAL,
  columns: MY_GOAL_COLUMNS,
  tableData: [],
  buttonTitle: TABLE_BUTTON.ADD_BILL,
  handleAddItem: () => undefined,
}

export const FullDataGoalTable = Template.bind({})
FullDataGoalTable.args = {
  tableId: 'goalTable',
  tableTitle: TABLE_TITLE.MY_GOAL,
  columns: MY_GOAL_COLUMNS,
  tableData: MY_GOALS_ROW as GoalTableRowProps[],
  buttonTitle: TABLE_BUTTON.ADD_GOAL,
  handleAddItem: () => undefined,
}

export const LoadingGoalTable = Template.bind({})
LoadingGoalTable.args = {
  tableId: 'goalTable',
  tableTitle: TABLE_TITLE.MY_GOAL,
  columns: MY_GOAL_COLUMNS,
  tableData: [],
  isLoading: true,
  buttonTitle: TABLE_BUTTON.ADD_GOAL,
  handleAddItem: () => undefined,
}
