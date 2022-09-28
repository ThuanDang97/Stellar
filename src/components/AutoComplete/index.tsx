import React, { memo, useState, useCallback, useRef, useEffect } from 'react'
import { useTheme } from 'styled-components'

// Components
import Image from 'next/image'
import {
  BorderWrapperStyled,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'
import {
  ListItemStyled,
  ListStyled,
} from '@components/styled-components/ListStyled'

// Utils
import { filterDataContainValue, findItemByValue } from '@utils/index'

// Constants
import { LIST_BILLER } from '@constants/index'

// Props type
import {
  AutoCompleteProps,
  EventProps,
} from '@self-types/components/AutoComplete.props'
import Input from '@components/Input'

const AutoComplete = ({ billerItem, setBillerItem }: AutoCompleteProps) => {
  const theme = useTheme()
  const [placeholder, setPlaceholder] = useState('Select Biller')

  const wrapperRef = useRef<HTMLInputElement>(null)

  const [isToggleDropdown, setToggleDropdown] = useState(false)

  /**
   * Handle toggle dropdown event
   */
  const handleToggleDropdown = () => {
    setToggleDropdown(true)
    setPlaceholder('Search By Name')
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setToggleDropdown(false)
        setPlaceholder('Select Biller')
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  /**
   * Handle change value
   */
  const handleOnChange = (event: EventProps) => {
    const value = event && event.target && event.target.value
    setBillerItem(value as string)
  }

  /**
   * Handle select biller
   */
  const handleSelectItem = useCallback(
    (id: string) => {
      const selectOption = findItemByValue({
        data: LIST_BILLER,
        key: 'id',
        value: id,
      })

      setBillerItem(selectOption?.title as string)
      setToggleDropdown(false)
    },
    [setBillerItem],
  )

  const renderListBiller = () => {
    const result = filterDataContainValue({
      data: LIST_BILLER,
      value: billerItem,
      key: 'title',
    })

    return (
      <ListStyled
        pTop={theme.metrics.dimensions.xs}
        width={theme.metrics.width.full}
        data-testid="select-menu"
        position="absolute"
        bgColor={theme.colors.white}
      >
        {result.map((item) => {
          const onSelectItem = () => {
            handleSelectItem(item.id)
          }

          return (
            <ListItemStyled
              key={`autocomplete-item-${item.id}`}
              width={theme.metrics.width.full}
              onClick={onSelectItem}
            >
              <TextStyled
                display="flex"
                alignItems="center"
                pLeft={theme.metrics.dimensions.sm}
              >
                <Image
                  src={item.src}
                  width={35}
                  height={35}
                  layout="intrinsic"
                />
                <TextStyled
                  fontSize={theme.typography.fontSize.base}
                  mLeft={theme.metrics.dimensions.base}
                >
                  {item.title}
                </TextStyled>
              </TextStyled>
            </ListItemStyled>
          )
        })}
      </ListStyled>
    )
  }

  return (
    <ViewStyled
      position="relative"
      width={theme.metrics.width.full}
      ref={wrapperRef}
    >
      <BorderWrapperStyled
        data-testid="select"
        width={theme.metrics.width.full}
        onClick={handleToggleDropdown}
      >
        <Input
          type="text"
          iconUrl="/icons/search"
          placeholder={placeholder}
          onChange={handleOnChange}
          value={billerItem}
        />
      </BorderWrapperStyled>
      {isToggleDropdown && renderListBiller()}
    </ViewStyled>
  )
}

export default memo(AutoComplete)
