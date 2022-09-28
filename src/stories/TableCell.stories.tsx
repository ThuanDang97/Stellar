import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import TableCell from '../components/TableCell'

// Mock data
import { NETFLIX_REPORT } from '../__mocks__/mockData'

export default {
  title: 'Components/TableCell',
  component: TableCell,
  decorators: [
    (Story) => (
      <div
        style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof TableCell>

const Template: ComponentStory<typeof TableCell> = (args) => (
  <TableCell {...args} />
)

export const DefaultTableCell = Template.bind({})
DefaultTableCell.args = {
  imgUrl: 'images/netflix.png',
  title: NETFLIX_REPORT.name,
  subTitle: NETFLIX_REPORT.period,
}
