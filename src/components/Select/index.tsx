import { FC, memo, useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

// Props type
import {
  OptionSelectProps,
  SelectProps,
} from '@self-types/components/Select.props'

// Components
import {
  TextStyled,
  BorderWrapperStyled,
  DividerStyled,
  ViewStyled,
} from '@components/styled-components'
import {
  SelectIconStyled,
  WrapperSelectStyled,
} from '@components/Select/SelectStyled'
import {
  ListItemStyled,
  ListStyled,
} from '@components/styled-components/ListStyled'

// Utils
import { findItemByValue } from '@utils/index'

const Select: FC<SelectProps> = ({
  handleSelect,
  listOption,
  fontSize,
  color,
  width,
  pBottom,
  defaultValue,
  readOnly,
  borderColor,
}) => {
  const theme = useTheme()
  const [isEnable, setIsEnable] = useState(false)
  const [name, setName] = useState('')
  const wrapperRef = useRef<HTMLInputElement>(null)

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
        setIsEnable(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  useEffect(() => {
    // set default value when init for select
    const value = findItemByValue({
      data: listOption,
      value: defaultValue || '',
      key: 'value',
    })
    if (value) setName(value.name)
  }, [defaultValue, listOption])
  /**
   * Handle dropdown event
   * - Reset state when user clicks
   */
  const handlerDropdown = (): void => {
    setIsEnable((prev) => !prev)
  }

  /**
   * Handle for event selected
   * - Reset user selected value
   * - Turn off dropdown
   * - Pass user selected value
   */
  const handleSelectItem = useCallback(
    (item: OptionSelectProps) => {
      setName(item.name)
      setIsEnable((prev) => !prev)
      handleSelect(item.value)
    },
    [handleSelect],
  )

  const renderDropdown = (
    <ListStyled
      width={width}
      data-testid="select-menu"
      alignItems="baseline"
      textAlign="left"
      position="absolute"
      zIndex={theme.metrics.zIndex.top}
      bgColor={theme.colors.white}
      maxHeight={120}
      overflowY="scroll"
      pBottom={7}
      pTop={7}
    >
      {listOption.map((item) => (
        <ListItemStyled
          width={width}
          fontSize={fontSize}
          color={color}
          key={item.value}
          onClick={() => handleSelectItem(item)}
          pLeft={theme.metrics.dimensions.xs}
          bgColorHover={theme.colors.ironLight}
        >
          {item.name}
        </ListItemStyled>
      ))}
    </ListStyled>
  )

  return (
    <ViewStyled ref={wrapperRef}>
      <BorderWrapperStyled
        width={width}
        data-testid="select"
        onClick={handlerDropdown}
        position="relative"
        mTop={theme.metrics.dimensions.lg}
        pointerEvents={readOnly ? 'none' : 'auto'}
      >
        <WrapperSelectStyled sizeLine={0} lineTop={35}>
          <DividerStyled width={width} pBottom={theme.metrics.dimensions.sm}>
            <TextStyled
              fontSize={fontSize}
              color={color}
              pBottom={pBottom}
              data-testid="select-value"
            >
              {name}
            </TextStyled>
            <SelectIconStyled
              isEnable={isEnable}
              borderColor={borderColor}
              disabled={readOnly}
            />
          </DividerStyled>
        </WrapperSelectStyled>
      </BorderWrapperStyled>
      {isEnable && (
        <ViewStyled position="relative">{renderDropdown}</ViewStyled>
      )}
    </ViewStyled>
  )
}

export default memo(Select)
