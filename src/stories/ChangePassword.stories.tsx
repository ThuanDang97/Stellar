import React from 'react'
import { ComponentMeta } from '@storybook/react'

// Components
import ChangePassword from '@components/ChangePassword'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/ChangePassword',
  component: ChangePassword,
  decorators: [
    (Story) => (
      <ViewStyled width={400}>
        <Story />
      </ViewStyled>
    ),
  ],
} as ComponentMeta<typeof ChangePassword>

export const ChangePasswordDefault = () => <ChangePassword />
