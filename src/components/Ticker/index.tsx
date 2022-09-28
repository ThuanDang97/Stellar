import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

// Props type
import { TickerProps } from '@self-types/components/Ticker.props'

// Utils
import { generateDigitPositions } from '@utils/index'

// Constants
import { FIRST_DIGITS, SECOND_DIGITS, THIRD_DIGITS } from '@constants/index'

// Components
import {
  TickerWrapperStyled,
  TickerColumnOne,
  TickerColumnThree,
  TickerColumnTwo,
  TickerDigit,
  TickerSimulator,
} from './TickerStyled'

const Ticker = ({
  size,
  duration,
  firstNumber,
  secondNumber,
  delay,
}: TickerProps) => {
  const theme = useTheme()
  const tickerRef = useRef<HTMLDivElement>(null)
  const [tickerHeight, setTickerHeight] = useState(0)
  const [digitColor, setDigitColor] = useState(theme.colors.pomegranate)
  const [slideSecondNumber, setSlideSecondNumber] = useState(false)
  const [score, setScore] = useState(300)

  // Set height for ticker
  useEffect(() => {
    const height = tickerRef.current?.getClientRects()?.[0]?.height

    if (height) {
      setTickerHeight(height)
    }
  }, [])

  // Wait 2 seconds to display second number (if any)
  useEffect(() => {
    if (secondNumber) {
      const timer = setTimeout(() => {
        setSlideSecondNumber(true)
      }, ((delay ?? 0) + duration + 2) * 1000)

      return () => {
        clearTimeout(timer)
      }
    }

    return undefined
  }, [duration, secondNumber, delay])

  // Set score when go to first number
  useEffect(() => {
    let startDigit = 300

    if (startDigit === firstNumber) return undefined

    // find duration per increment
    const incrementTime = (duration / (firstNumber - 300)) * 1000

    const waitingTime = ((delay ?? 0) + (secondNumber ? 1 : 0)) * 1000

    // Delay before set score if second number is provided
    const timer = setTimeout(() => {
      // timer increments start digit
      // then updates score
      // ends if start reaches first number
      const interValtimer = setInterval(() => {
        startDigit += 1

        setScore(startDigit)

        if (startDigit === firstNumber) clearInterval(interValtimer)
      }, incrementTime)
    }, waitingTime)

    return () => {
      clearTimeout(timer)
    }
  }, [firstNumber, duration, secondNumber, delay])

  // Set score when go to second number
  useEffect(() => {
    if (secondNumber) {
      let startDigit = firstNumber
      const incrementTime = (duration / (secondNumber - firstNumber)) * 1000

      if (secondNumber <= firstNumber) return undefined

      // Wait for first number to display then slide to second number
      const waitingTime = ((delay ?? 0) + (duration + 3)) * 1000

      const timer = setTimeout(() => {
        // timer increments start digit
        // then updates score
        // ends if start reaches second number
        const intervalTimer = setInterval(() => {
          startDigit += 1

          setScore(startDigit)

          if (startDigit === secondNumber) clearInterval(intervalTimer)
        }, incrementTime)
      }, waitingTime)

      return () => {
        clearTimeout(timer)
      }
    }

    return undefined
  }, [secondNumber, firstNumber, duration, delay])

  // Change number color based on count range
  useEffect(() => {
    if (score >= 300 && score <= 579) {
      setDigitColor(theme.colors.pomegranate)
    } else if (score > 579 && score <= 669) {
      setDigitColor(theme.colors.pizzaz)
    } else if (score >= 670 && score <= 739) {
      setDigitColor(theme.colors.tangerineYellow)
    } else if (score >= 740) {
      setDigitColor(theme.colors.caribbeanGreen)
    }
  }, [
    score,
    theme.colors.caribbeanGreen,
    theme.colors.pizzaz,
    theme.colors.pomegranate,
    theme.colors.tangerineYellow,
  ])

  // Get positions of first number digits and second number digits
  const { firstNumberPos, secondNumPos } = useMemo(
    () =>
      generateDigitPositions({
        firstNumber,
        secondNumber,
        tickerHeight,
      }),
    [firstNumber, secondNumber, tickerHeight],
  )

  const TickerMemoized = useMemo(
    () => (
      <TickerWrapperStyled
        height={tickerHeight}
        color={digitColor}
        data-testid="digit-container"
        mTop={theme.metrics.dimensions.sm}
      >
        {/* First digit */}
        <TickerColumnOne
          slideSecondNumber={slideSecondNumber}
          duration={duration}
          delay={delay || 0}
          firstPosition={firstNumberPos.first}
          {...(secondNumPos && { secondPosition: secondNumPos.first })}
        >
          {FIRST_DIGITS.map((num, index) => (
            <TickerDigit key={`${num + index.toString()}`} fontSize={size}>
              {num}
            </TickerDigit>
          ))}
        </TickerColumnOne>

        {/* Second digit */}
        <TickerColumnTwo
          slideSecondNumber={slideSecondNumber}
          duration={duration}
          delay={delay || 0}
          firstPosition={firstNumberPos.second}
          {...(secondNumPos && { secondPosition: secondNumPos.second })}
        >
          {SECOND_DIGITS.map((num, index) => (
            <TickerDigit key={`${num + index.toString()}`} fontSize={size}>
              {num}
            </TickerDigit>
          ))}
        </TickerColumnTwo>

        {/* Third digit */}
        <TickerColumnThree
          slideSecondNumber={slideSecondNumber}
          duration={duration}
          delay={delay || 0}
          firstPosition={firstNumberPos.third}
          {...(secondNumPos && { secondPosition: secondNumPos.third })}
        >
          {THIRD_DIGITS.map((num, index) => (
            <TickerDigit key={`${num + index.toString()}`} fontSize={size}>
              {num}
            </TickerDigit>
          ))}
        </TickerColumnThree>
      </TickerWrapperStyled>
    ),
    [
      tickerHeight,
      digitColor,
      theme.metrics.dimensions.sm,
      slideSecondNumber,
      duration,
      delay,
      firstNumberPos.first,
      firstNumberPos.second,
      firstNumberPos.third,
      secondNumPos,
      size,
    ],
  )

  return (
    <>
      {TickerMemoized}

      {/* To calculate the height of container, this will be hidden */}
      <TickerSimulator fontSize={size} ref={tickerRef}>
        0
      </TickerSimulator>
    </>
  )
}

export default Ticker
