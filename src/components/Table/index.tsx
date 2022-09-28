import React, { memo, useCallback, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import Image from 'next/image'
import LoadingIndicator from '@components/LoadingIndicator'
import Button from '@components/Button'
import {
  BoxShadowStyled,
  TitleSecSionStyled,
  ViewStyled,
} from '@components/styled-components'

// Props type
import {
  SortBy,
  SortDataProps,
  TableFieldProps,
  TableProps,
} from '@self-types/components/Table.props'

// Constants
import { SORT_ICON, SORT_ICON_DEFAULT, SORT_TYPE } from '@constants/table'

import {
  CellAnimatedStyled,
  TableCellStyled,
  TableHeadStyled,
  TableStyled,
} from '../styled-components/TableStyled'

const Table = ({
  tableId,
  tableTitle,
  tableData,
  columns,
  isLoading,
  onClickSort,
  hasViewAll,
  buttonTitle,
  handleAddItem,
  isReLoad,
  isLocked,
}: TableProps) => {
  const theme = useTheme()
  const [activeSortData, setActiveSortData] = useState<SortDataProps>()
  const [innerWidth, setInnerWidth] = useState(window.screen.width)

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.screen.width)
    }
    // Add event  and remove event resize screen
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Handle sort table columns
  const handleSort = useCallback(
    (field: TableFieldProps) => {
      const switchSortType = {
        [SORT_TYPE.ASC]: SORT_TYPE.DESC,
        [SORT_TYPE.DESC]: SORT_TYPE.ASC,
      }

      const sortBy = (
        field === activeSortData?.field && activeSortData?.sortBy
          ? switchSortType[activeSortData?.sortBy]
          : SORT_TYPE.ASC
      ) as SortBy

      setActiveSortData((prev) => ({ ...prev, field, sortBy }))

      if (onClickSort) {
        onClickSort({ field, sortBy })
      }
    },
    [activeSortData?.field, activeSortData?.sortBy, onClickSort],
  )

  const isMobile = innerWidth <= theme.metrics.breakPoints.xs
  return (
    <BoxShadowStyled
      width={theme.metrics.width.full}
      bgColor={theme.colors.white}
    >
      {/* Table title */}
      <ViewStyled
        display="flex"
        justifyContent="space-between"
        width={theme.metrics.width.full}
        padding={`${pxToRem(theme.metrics.dimensions.base)}`}
      >
        <TitleSecSionStyled
          fontFamily="AdobeCleanExtraBold"
          fontSize={theme.typography.fontSize.common}
          mLeft={theme.metrics.dimensions.sm}
        >
          {tableTitle}
        </TitleSecSionStyled>

        {hasViewAll && (
          <Button
            onClick={() => undefined}
            title="View All"
            variant="dark"
            bgColorHover={theme.colors.ironLight}
          />
        )}
      </ViewStyled>

      <ViewStyled overflow={isMobile ? 'auto' : 'unset'}>
        <TableStyled isLocked={isLocked}>
          {/* Table head */}
          <thead>
            <tr>
              {columns.map(({ field, headerName, sortable }) => {
                const sort = () => sortable && handleSort(field)

                const arrowIconUrl =
                  activeSortData?.field === field && activeSortData.sortBy
                    ? SORT_ICON[activeSortData.sortBy]
                    : SORT_ICON_DEFAULT

                return (
                  <TableHeadStyled
                    key={`${field}-head-${tableId}`}
                    sortable
                    onClick={sort}
                    data-testid={`sort-${field}`}
                    isEmptyData={tableData?.length === 0}
                    bgColorHover={headerName && theme.colors.ironLight}
                    tableId={tableId}
                  >
                    {headerName}
                    {sortable && (
                      <ViewStyled display="inline-block" position="absolute">
                        <Image
                          width={theme.metrics.dimensions.xmd}
                          height={theme.metrics.dimensions.base}
                          src={arrowIconUrl}
                        />
                      </ViewStyled>
                    )}
                  </TableHeadStyled>
                )
              })}
            </tr>
          </thead>

          {/* Table body */}
          <tbody>
            {isLoading ? (
              <tr>
                <TableCellStyled colSpan={isLoading ? columns.length : 1}>
                  <LoadingIndicator isFull={false} />
                </TableCellStyled>
              </tr>
            ) : (
              tableData?.map((data) => (
                <tr>
                  {columns.map(({ field }) => {
                    const tData = data[field as keyof typeof data]
                    const delay =
                      tableId === 'linkBill'
                        ? 4.5
                        : tableId === 'addBill'
                        ? 3
                        : 1.5

                    return (
                      <TableCellStyled
                        key={field}
                        delay={isReLoad ? 0.5 : delay}
                        fontSize={
                          isMobile
                            ? theme.typography.fontSize.base
                            : theme.typography.fontSize.sm
                        }
                      >
                        <CellAnimatedStyled delay={isReLoad ? 0.5 : delay}>
                          {tData}
                        </CellAnimatedStyled>
                      </TableCellStyled>
                    )
                  })}
                </tr>
              ))
            )}
          </tbody>
        </TableStyled>
      </ViewStyled>

      {/* Table add button */}
      {buttonTitle && handleAddItem && (
        <ViewStyled
          display="flex"
          justifyContent="center"
          padding={`${pxToRem(theme.metrics.dimensions.sm)}`}
        >
          <Button
            width={12}
            height={12}
            onClick={handleAddItem}
            title={buttonTitle}
            variant="danger"
            bgColorHover={theme.colors.ironLight}
          />
        </ViewStyled>
      )}
    </BoxShadowStyled>
  )
}

export default memo(Table)
