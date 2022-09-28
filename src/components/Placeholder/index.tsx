import React, { memo } from 'react'

// Components
import { ViewStyled, RowStyled } from '@components/styled-components/ViewStyled'
import PlaceholderItem from '@components/PlaceholderItem'
import { useTheme } from 'styled-components'

// Props type
import { PlaceholderProps } from '@self-types/components/Placeholder.props'

const Placeholder = ({ isLinkBill = true }: PlaceholderProps) => {
  const theme = useTheme()

  return (
    <RowStyled>
      <PlaceholderItem
        type="rect"
        width={theme.metrics.width.base}
        height={theme.metrics.height.base}
      />
      <ViewStyled
        mLeft={theme.metrics.dimensions.sm}
        mRight={theme.metrics.dimensions.xxl}
      >
        <PlaceholderItem width={theme.metrics.width.md} />
        {isLinkBill && (
          <PlaceholderItem
            width={theme.metrics.width.lg}
            height={theme.metrics.height.tiny}
            mTop={theme.metrics.dimensions.xs}
          />
        )}
      </ViewStyled>
      <ViewStyled mRight={theme.metrics.dimensions.xxl}>
        <PlaceholderItem width={theme.metrics.width.lg} />
      </ViewStyled>
      <ViewStyled mRight={theme.metrics.dimensions.xl}>
        <PlaceholderItem />
      </ViewStyled>
      <PlaceholderItem width={13} />
    </RowStyled>
  )
}

export default memo(Placeholder)
