import React, { memo, useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'styled-components'

// Components
import {
  TextStyled,
  ViewStyled,
  TextDescriptionStyled,
} from '@components/styled-components'

// Props type
import { TableCellProps } from '@self-types/components/TableCell.props'

const TableCell = ({ imgUrl, title, subTitle }: TableCellProps) => {
  const theme = useTheme()
  const [innerWidth, setInnerWidth] = useState(window.screen.width)

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.screen.width)
    }
    // Add event  and remove event resize screen
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = innerWidth <= theme.metrics.breakPoints.xs

  return (
    <ViewStyled display="flex" gap={20}>
      {/* Image */}
      <ViewStyled
        minWidth={
          isMobile ? theme.metrics.width.base : theme.metrics.width.common
        }
        height={
          isMobile ? theme.metrics.width.base : theme.metrics.width.common
        }
        position="relative"
      >
        <Image src={imgUrl} layout="fill" objectFit="cover" />
      </ViewStyled>

      {/* Description */}
      <ViewStyled>
        <TextStyled
          color={theme.colors.black}
          textAlign="left"
          fontWeight={theme.typography.fontWeight.small}
          as="p"
        >
          {title}
        </TextStyled>

        {subTitle && (
          <TextDescriptionStyled
            color={theme.colors.silver}
            textAlign="left"
            fontWeight={theme.typography.fontWeight.small}
          >
            {subTitle}
          </TextDescriptionStyled>
        )}
      </ViewStyled>
    </ViewStyled>
  )
}

const tabelCellPropsAreEqual = (
  prevTabelCell: TableCellProps,
  nextTableCell: TableCellProps,
) =>
  prevTabelCell.title === nextTableCell.title &&
  prevTabelCell.subTitle === nextTableCell.subTitle &&
  prevTabelCell.imgUrl === nextTableCell.imgUrl

export default memo(TableCell, tabelCellPropsAreEqual)
