import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// Components
import CheckingBankItem from '@components/CheckingBankItem'

// Mocks
import { BANK_NUMBER } from '@mocks/mockData'

export default {
  title: 'Components/CheckingBankItem',
  component: CheckingBankItem,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '100vh',
          width: '300px',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof CheckingBankItem>

const Template: ComponentStory<typeof CheckingBankItem> = (args) => (
  <CheckingBankItem {...args} />
)

export const CheckingWithNumber = Template.bind({})

CheckingWithNumber.args = {
  bankNumber: BANK_NUMBER,
}

export const CheckingWithoutNumber = Template.bind({})
