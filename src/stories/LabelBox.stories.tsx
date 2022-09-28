// Library
import React from 'react'
import Storybook from '@storybook/react'
import { useTheme } from 'styled-components'

// Components
import LabelBox from '@components/LabelBox'
import { ViewStyled } from '@components/styled-components'

// Utils
import { pxToRem } from '@utils/theme'

export default {
  title: 'Components/LabelBox',
  component: LabelBox,
} as Storybook.ComponentMeta<typeof LabelBox>

const Template: Storybook.ComponentStory<typeof LabelBox> = (args) => {
  const theme = useTheme()
  return (
    <ViewStyled width={theme.metrics.width.xmd}>
      <LabelBox
        {...args}
        padding={`${pxToRem(theme.metrics.dimensions.sm)} ${pxToRem(
          theme.metrics.dimensions.md,
        )}`}
      />
    </ViewStyled>
  )
}

export const LabelBoxCase = Template.bind({})
LabelBoxCase.args = {
  title: 'Youtube',
  isActive: false,
}

export const LabelBoxActive = Template.bind({})
LabelBoxActive.args = {
  title: 'Youtube',
  isActive: true,
}
