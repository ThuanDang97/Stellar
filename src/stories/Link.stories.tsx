import { Story } from '@storybook/react'

// Props type
import { LinkComponentProps } from '@self-types/components/Link.props'

// Themes
import { theme } from '@themes/index'

// Components
import LinkComponent from '@components/Link'
import { ViewStyled } from '@components/styled-components'

export default {
  title: 'Components/Link',
  component: LinkComponent,
}

const TemplateDefault: Story<LinkComponentProps> = (args) => (
  <ViewStyled width={220}>
    <LinkComponent {...args} />
  </ViewStyled>
)

const TemplateBlack: Story<LinkComponentProps> = (args) => (
  <ViewStyled
    width={160}
    height={theme.metrics.dimensions.xxxl}
    bgColor={theme.colors.black}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <LinkComponent {...args} />
  </ViewStyled>
)

const TemplatePrimary: Story<LinkComponentProps> = (args) => (
  <ViewStyled width={85}>
    <LinkComponent {...args} />
  </ViewStyled>
)

const TemplateSecondary: Story<LinkComponentProps> = (args) => (
  <ViewStyled width={315}>
    <LinkComponent {...args} />
  </ViewStyled>
)

export const DefaultLink = TemplateBlack.bind({})
DefaultLink.args = {
  href: '/abc',
  text: 'Login',
}

export const PrimaryLink = TemplatePrimary.bind({})
PrimaryLink.args = {
  href: '/abc',
  text: 'Link',
  linkTypes: 'primaryLink',
  iconLeftUrl: '/icons/link-45deg.svg',
}

export const SecondaryLink = TemplateSecondary.bind({})
SecondaryLink.args = {
  href: '/abc',
  text: 'Add My First Bill',
  linkTypes: 'secondaryLink',
}

export const SkipLink = TemplateBlack.bind({})
SkipLink.args = {
  href: '/abc',
  text: 'Skip This',
  linkTypes: 'skipLink',
  iconRightUrl: '/icons/chevron-right.svg',
}

export const ContinueLink = TemplateSecondary.bind({})
ContinueLink.args = {
  href: '/abc',
  text: 'Continue',
  linkTypes: 'continueLink',
}

export const UnLockLink = TemplateDefault.bind({})
UnLockLink.args = {
  href: '/abc',
  text: 'Unlock Credit Score',
  linkTypes: 'unLockLink',
  iconLeftUrl: '/icons/unlock.svg',
}
