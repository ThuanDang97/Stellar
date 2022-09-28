import { Story } from '@storybook/react'
// Layouts
import Header from '@layouts/Header'

// Themes
import { theme } from '@themes/index'

// Props Type
import { HeaderProps } from '@self-types/index'

export default {
  title: 'Layouts/Header',
  component: Header,
}

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const DefaultHeader = Template.bind({})
DefaultHeader.args = {
  HeaderType: 'defaultHeader',
  showArrow: true,
  loginHref: '/abc',
  pLeft: theme.metrics.dimensions.xxl,
  pRight: theme.metrics.dimensions.xxl,
  pTop: theme.metrics.dimensions.xlg,
  pBottom: theme.metrics.dimensions.xlg,
}

export const PrimaryHeader = Template.bind({})
PrimaryHeader.args = {
  avatarUrl: 'https://picsum.photos/20',
  bgColor: theme.colors.firefly,
  HeaderType: 'primaryHeader',
}
