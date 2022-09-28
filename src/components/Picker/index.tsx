import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

// Props type
import { PickerProps } from '@self-types/components/Picker.props'

// Components
import {
  BorderWrapperStyled,
  DividerStyled,
} from '@components/styled-components'
import { SelectIconStyled } from '@components/Select/SelectStyled'
import { DateStyled } from '@components/Picker/PickerStyled'
import { WrapperInputStyled } from '@components/Input/InputStyled'

// Utils
import {
  startDateFrom,
  startDateTo,
  getSuffixForDate,
  getDateString,
} from '@utils/index'

//  Constants
import { FORMAT_DATE } from '@constants/variables'

const Picker = ({
  isMinDate,
  isMaxDate,
  isMonthDropdown,
  isYearDropdown,
  onToday,
  lineColor,
  onChange,
  disabled,
  borderColor,
  mTop,
  mBottom,
  defaultDate,
}: PickerProps) => {
  const theme = useTheme()
  const date = new Date()
  const [startDate, setStartDate] = useState<Date>(date)
  const [dateOption, setDateOption] = useState<Date | null>()
  const [isOpen, setIsOpen] = useState(false)
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
        setIsOpen(false)
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
    if (defaultDate) {
      const selectedDate = new Date(getDateString(defaultDate))

      setStartDate(selectedDate)
      setDateOption(selectedDate)
    }
  }, [defaultDate])

  const formattedDate = getSuffixForDate(new Date(startDate).getDate())

  const handleChange = useCallback(
    (dateTime: Date) => {
      setStartDate(dateTime)
      setDateOption(dateTime)
      onChange(dateTime)
      setIsOpen(false)
    },
    [onChange],
  )

  const handleSelect = useCallback((dateTime: Date) => {
    setDateOption(dateTime)
  }, [])

  const handleToggleDatePicker = () => {
    setIsOpen(!isOpen)
  }

  return (
    <BorderWrapperStyled
      lineColor={lineColor}
      width={theme.metrics.width.full}
      data-testid="select"
      ref={wrapperRef}
      mTop={mTop}
    >
      <DividerStyled lineColor={lineColor}>
        <WrapperInputStyled
          lineTop={24}
          sizeLine={0}
          pBottom={theme.metrics.dimensions.xs}
          display="flex"
          justifyContent="space-between"
        >
          <DateStyled
            value={
              onToday || defaultDate ? `Pay by the ${formattedDate}` : undefined
            }
            selected={dateOption}
            onChange={handleChange}
            placeholderText={FORMAT_DATE}
            showMonthDropdown={isMonthDropdown && isMonthDropdown}
            showYearDropdown={isYearDropdown && isYearDropdown}
            dropdownMode="scroll"
            minDate={isMinDate ? startDateFrom : null}
            maxDate={isMaxDate ? startDateTo : null}
            onSelect={handleSelect}
            open={isOpen}
            onInputClick={handleToggleDatePicker}
            disabled={disabled}
            useShortMonthInDropdown
          />

          {onToday ||
            (defaultDate && (
              <SelectIconStyled
                onClick={handleToggleDatePicker}
                isEnable={isOpen}
                borderColor={borderColor}
                mBottom={mBottom}
                disabled={disabled}
              />
            ))}
        </WrapperInputStyled>
      </DividerStyled>
    </BorderWrapperStyled>
  )
}

export default memo(Picker)
