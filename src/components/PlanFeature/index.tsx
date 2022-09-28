import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import Image from 'next/image'
import {
  BoxShadowStyled,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'
import Tooltip from '@components/Tooltip'

// Mocks
import { TOOLTIP_LOREM } from '@mocks/mockData'

// Props type
import { PlanFeatureProps } from '@self-types/components/PlanFeature.props'

const PlanFeature = ({ type, title }: PlanFeatureProps) => {
  const theme = useTheme()

  return (
    <ViewStyled display="flex" justifyContent="flex-start" alignItems="center">
      <BoxShadowStyled
        display="flex"
        justifyContent="center"
        shadowType="regular"
        width={theme.metrics.width.xs}
        height={theme.metrics.height.default}
        borderRadius={theme.metrics.borderRadius.circle}
        mRight={theme.metrics.dimensions.sm}
      >
        <Image
          src="/icons/check.svg"
          width={theme.metrics.images.md}
          height={theme.metrics.images.md}
        />
      </BoxShadowStyled>
      <TextStyled
        letterSpacing={theme.typography.letterSpacing.xl}
        mRight={theme.metrics.dimensions.sm}
        fontSize={theme.typography.fontSize.sm}
        fontWeight={
          type === 'bold'
            ? theme.typography.fontWeight.bold
            : theme.typography.fontWeight.base
        }
      >
        {title}
      </TextStyled>
      <Tooltip title={TOOLTIP_LOREM}>
        <Image
          src="/icons/question-circle-fill.svg"
          width={theme.metrics.images.md}
          height={theme.metrics.images.md}
        />
      </Tooltip>
    </ViewStyled>
  )
}

export default memo(PlanFeature)
