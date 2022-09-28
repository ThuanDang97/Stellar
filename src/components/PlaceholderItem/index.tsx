import React, { memo } from 'react'
import ReactPlaceholder from 'react-placeholder'

// Props type
import { PlaceholderItemProps } from '@self-types/components/PlaceholderItem.props'

// Themes
import { theme } from '@themes/index'
import Metrics from '@themes/Metrics'

// Utils
import { pxToRem } from '@utils/theme'

const PlaceholderItem = ({
  type = 'textRow',
  width = Metrics.width.common,
  height = 13,
  mTop = 0,
  children,
}: PlaceholderItemProps) => (
  <ReactPlaceholder
    type={type}
    ready={false}
    color={theme.colors.mercury}
    style={{
      width: pxToRem(width),
      height: pxToRem(height),
      marginTop: pxToRem(mTop),
    }}
  >
    {children}
  </ReactPlaceholder>
)

export default memo(PlaceholderItem)
