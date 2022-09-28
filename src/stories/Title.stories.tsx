import React from 'react'

// Components
import Title from '@components/Title'
import { ViewStyled } from '@components/styled-components/ViewStyled'

// Themes
import { theme } from '@themes/index'

export default {
  title: 'Components/Title',
  component: Title,
}

export const DefaultTitleComponent = () => (
  <ViewStyled
    bgColor={theme.colors.black}
    pTop={theme.metrics.dimensions.base}
    pBottom={theme.metrics.dimensions.base}
  >
    <Title title="Start Paying Bills & Building Credit With Stellar" />
  </ViewStyled>
)

export const BlackTitleComponent = () => (
  <ViewStyled
    bgColor={theme.colors.white}
    pTop={theme.metrics.dimensions.base}
    pBottom={theme.metrics.dimensions.base}
  >
    <Title
      color={theme.colors.black}
      title="Start Paying Bills & Building Credit With Stellar"
    />
  </ViewStyled>
)
