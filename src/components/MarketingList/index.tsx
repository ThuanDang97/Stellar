// Library
import React, { memo } from 'react'

// Themes
import { useTheme } from 'styled-components'

// Components
import LabelBox from '@components/LabelBox'
import Button from '@components/Button'
import { BoxShadowStyled } from '@components/styled-components'
import { ViewStyled } from '@components/styled-components/ViewStyled'

// Constants
import { LABEL_BOX } from '@constants/index'

// Props type
import {
  MarketingProps,
  MarkettingItemProps,
} from '@self-types/components/Marketing.props'

// Utils
import { selectItem } from '@utils/index'
import { pxToRem } from '@utils/theme'

const MarketingList = ({
  handleContinueButton,
  selectedItem,
  setSelectedItem,
}: MarketingProps) => {
  const theme = useTheme()
  const isDisabled = selectedItem?.length === 0

  return (
    <BoxShadowStyled
      maxWidth={380}
      padding={theme.metrics.dimensions.xmd}
      display="flex"
      flexDirection="column"
      alignItems="initial"
      flexWrap="wrap"
    >
      <ViewStyled
        display="flex"
        flexWrap="inherit"
        pBottom={theme.metrics.dimensions.lg}
        justifyContent="center"
      >
        {LABEL_BOX.map((name: MarkettingItemProps) => {
          const handleMarketingItem = () =>
            selectItem(setSelectedItem, selectedItem, name.id)

          return (
            <ViewStyled
              padding={`${pxToRem(theme.metrics.dimensions.xs)}`}
              key={`labelBox-${name.id}`}
            >
              <LabelBox
                title={name.title}
                isActive={selectedItem.includes(name.id)}
                handleOnClick={handleMarketingItem}
                padding={`${pxToRem(theme.metrics.dimensions.sm)} ${pxToRem(
                  theme.metrics.dimensions.md,
                )}`}
              />
            </ViewStyled>
          )
        })}
      </ViewStyled>
      <Button
        {...(!isDisabled && { cursor: 'pointer' })}
        onClick={handleContinueButton}
        title="Continue"
        variant="colorDefault"
        disabled={isDisabled}
      />
    </BoxShadowStyled>
  )
}

export default memo(MarketingList)
