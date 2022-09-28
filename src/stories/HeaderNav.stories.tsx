import React from 'react'
import { Story } from '@storybook/react'

// Component
import HeaderNav from '@components/HeaderNav'

// Constants
import { HEADER_NAVIGATION } from '@constants/index'

// Themes
import { theme } from '@themes/index'

// Props type
import { HeaderNavListProps } from '@self-types/components/HeaderNav.props'

export default {
  title: 'Components/HeaderNav',
  component: HeaderNav,
}

const Template: Story<HeaderNavListProps> = (args) => (
  <div
    style={{
      background: `${theme.colors.firefly}`,
      height: `55px`,
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <HeaderNav {...args} />
  </div>
)

export const HeaderNavComponent = Template.bind({})
HeaderNavComponent.args = {
  headerNavList: HEADER_NAVIGATION,
}
