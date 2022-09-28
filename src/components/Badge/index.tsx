import React, { memo } from 'react'

// Components
import { BoxShadowStyled } from '@components/styled-components/ViewStyled'
import { BadgeStyled } from '@components/styled-components/TextStyled'

// Props type
import { BadgeProps } from '@self-types/components/Badge.props'

// Utils
import { pxToRem } from '@utils/theme'

// Themes
import { theme } from '@themes/index'

const Badge = ({ title, isReady }: BadgeProps) => (
  <BoxShadowStyled
    display="inline-block"
    shadowType={`${isReady ? 'badgeReadyShow' : 'badgeDefaultShow'}`}
    padding={`${pxToRem(theme.metrics.dimensions.tiny)} ${pxToRem(
      theme.metrics.dimensions.base,
    )}`}
    borderRadius={theme.metrics.borderRadius.base}
    border={`${pxToRem(theme.metrics.borderWidth.default)} solid ${
      isReady ? theme.colors.caribbeanGreen : theme.colors.pizzaz
    }`}
    bgColor={isReady ? theme.colors.foam : theme.colors.bridalHeath}
  >
    <BadgeStyled
      color={isReady ? theme.colors.caribbeanGreen : theme.colors.pizzaz}
    >
      {title}
    </BadgeStyled>
  </BoxShadowStyled>
)

export default memo(Badge)
