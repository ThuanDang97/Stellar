import React, { memo, useCallback } from 'react'

// Components
import { useTheme } from 'styled-components'
import { BoxShadowStyled, DividerStyled } from '@components/styled-components'
import Button from '@components/Button'

// Props type
import { TableControlPopupProps } from '@self-types/components/TableControlPopup.props'

// Utils
import { pxToRem } from '@utils/theme'

const TableControlPopup = React.forwardRef<
  HTMLInputElement,
  TableControlPopupProps
>(({ nameTable, handleEditTable, handleDeleteTable, idItem }, ref) => {
  const theme = useTheme()

  const onDeleteItem = useCallback(
    () => handleEditTable && handleEditTable(idItem),
    [handleEditTable, idItem],
  )

  return (
    <BoxShadowStyled
      display="flex"
      flexDirection="column"
      position="absolute"
      bgColor="white"
      width={110}
      shadowType="regular"
      border={`${pxToRem(theme.metrics.borderWidth.default)} solid ${
        theme.colors.silver
      }`}
      top={theme.metrics.dimensions.xs}
      nameTable={nameTable}
      mRight={135}
      ref={ref}
    >
      {nameTable === 'linkedBill' && (
        <>
          <Button
            variant="dark"
            width={theme.metrics.width.xs}
            height={theme.metrics.height.default}
            btnWidth={theme.metrics.width.full}
            cursor="pointer"
            onClick={onDeleteItem}
            data-testid="edit"
            title="Edit"
            textAlign="left"
            bgColorHover={theme.colors.ironLight}
          />
          <DividerStyled width={90} />
        </>
      )}
      <Button
        variant="dark"
        width={theme.metrics.width.xs}
        height={theme.metrics.height.default}
        btnWidth={theme.metrics.width.full}
        cursor="pointer"
        onClick={() => handleDeleteTable(idItem)}
        data-testid="edit"
        title="Delete"
        textAlign="left"
        bgColorHover={theme.colors.ironLight}
      />
    </BoxShadowStyled>
  )
})

export default memo(TableControlPopup)
