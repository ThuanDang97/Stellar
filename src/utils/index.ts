import { HeaderNavItemProps } from '@self-types/components/HeaderNav.props'
import { TickerPositions } from '@self-types/index'

// Props type
import { FicoScoreTypes } from '@self-types/components/FicoScoreProps.props'
import { SortBy } from '@self-types/components/Table.props'

// constants
import {
  DEFAULT_HEADER_URL,
  EXCELLENT_SCORE,
  FAIR_SCORE,
  FIRST_LETTER_NAME_OF_MONTHS,
  GOOD_SCORE,
  LIST_PAYMENTS_BY_MONTH,
  MONTH_ABBREVIATE,
  PAY_PERIOD,
  POOR_SCORE,
  PRIMARY_HEADER_URL,
  REGEX_REMOVE_BRACKETS,
  SECONDARY_URL,
} from '@constants/index'

// Get first letter and uppercase
export const getUppercaseFirstLetter = (word: string) =>
  word.trim().charAt(0).toUpperCase()

// Get user first name
export const getUserFirstName = (fullName: string) => fullName.split(' ')[0]

// get letter firstName and lastName from fullName
export const getDisplayName = (userName: string): string => {
  const nameParts = userName.split(' ')

  // User enters first name and last name
  if (nameParts.length > 1) {
    const firstName = nameParts[0]
    const lastName = nameParts[nameParts.length - 1]

    return firstName && lastName
      ? getUppercaseFirstLetter(firstName) + getUppercaseFirstLetter(lastName)
      : ''
  }

  // User enters only first name
  return getUppercaseFirstLetter(userName)
}

// update status of item
export const updateActiveNavItem = (
  value: string,
  lisItem: HeaderNavItemProps[],
): HeaderNavItemProps[] => {
  return lisItem.map((item) => {
    if (item.url === value) {
      return {
        ...item,
        isActive: true,
      }
    }
    return {
      ...item,
    }
  })
}

// Generate array digits from number
export const generateArrayDigits = (number: number): number[] =>
  number
    .toString()
    .split('')
    .map((i) => +i)

// Generate positions for ticker
export const generateDigitPositions = ({
  firstNumber,
  secondNumber,
  tickerHeight,
}: {
  firstNumber: number
  secondNumber?: number
  tickerHeight: number
}): TickerPositions => {
  const firstNumArray = generateArrayDigits(firstNumber)

  // Positions for first number
  const firstNumDigit1 =
    -1 * (tickerHeight * firstNumArray[0] - tickerHeight * 3)
  const firstNumDigit2 =
    -1 * (tickerHeight * firstNumArray[1]) - tickerHeight * 10
  const firstNumDigit3 =
    -1 * (tickerHeight * firstNumArray[2]) - tickerHeight * 50

  if (secondNumber) {
    const secondNumArray = generateArrayDigits(secondNumber)

    // Positions of second number
    const secondNumDigit1 =
      -1 * (tickerHeight * secondNumArray[0] - tickerHeight * 3)
    const secondNumDigit2 =
      -1 * (tickerHeight * secondNumArray[1]) - tickerHeight * 20
    const secondNumDigit3 =
      -1 * (tickerHeight * secondNumArray[2]) - tickerHeight * 70

    return {
      firstNumberPos: {
        first: firstNumDigit1,
        second: firstNumDigit2,
        third: firstNumDigit3,
      },
      secondNumPos: {
        first: secondNumDigit1,
        second: secondNumDigit2,
        third: secondNumDigit3,
      },
    }
  }

  return {
    firstNumberPos: {
      first: firstNumDigit1,
      second: firstNumDigit2,
      third: firstNumDigit3,
    },
  }
}

// Find item by absolute compare value
export const findItemByValue = <T, U extends keyof T>({
  data,
  value,
  key,
}: {
  data: T[]
  value: T[U]
  key: keyof T
}): T | undefined => data.find((item) => item[key] === value)

// Find item in array
export const findItemArrStringByValue = <T, U extends keyof T>({
  data,
  value,
}: {
  data: T[]
  value: T[U] | T
}): T | undefined => data.find((item) => item === value)

// Find item by relative compare value
export const findItemByRelativeValue = <T>({
  data,
  value,
  key,
}: {
  data: T[]
  value: string
  key: keyof T
}): T | undefined =>
  data.find((item) => value.includes(item[key] as unknown as string))

// Function filter list data include content value in item data
export const filterDataContainValue = <T>({
  data,
  value,
  key,
}: {
  data: T[]
  value: string
  key: keyof T
}) =>
  data.filter((item) =>
    (item[key] as unknown as string)
      .toLowerCase()
      .includes(value.toLowerCase()),
  )

// Function filter list data not include content value in item data
export const filterDataNotContainValue = <T>({
  data,
  value,
  key,
}: {
  data: T[]
  value: string
  key: keyof T
}) =>
  data.filter(
    (item) =>
      !(item[key] as unknown as string)
        .toLowerCase()
        .includes(value.toLowerCase()),
  )

// Find if array item match part of value received
export const findItemMatchValue = <T>({
  data,
  value,
}: {
  data: T[]
  value: string
}): T | undefined =>
  data.find((item) => value.includes(item as unknown as string))

// Get 4 digits of the string e
export const getLastFourDigitsString = (fullNumber: string): string => {
  const last4Digits = fullNumber.slice(-4)

  return last4Digits
}

// Generate secret bank account number
export const generateSecretBankAccount = (fullNumber: string): string => {
  const last4Digits = getLastFourDigitsString(fullNumber)

  return last4Digits.padStart(fullNumber.length, '•')
}

// First date of the month
export const startDateFrom = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  1,
)

// Last date of the month
export const startDateTo = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0,
)

// Get suffix for date
export const getSuffixForDate = (day: number) => {
  const j = day % 10
  const k = day % 100
  if (j === 1 && k !== 11) {
    return `${day}st`
  }
  if (j === 2 && k !== 12) {
    return `${day}nd`
  }
  if (j === 3 && k !== 13) {
    return `${day}rd`
  }
  return `${day}th`
}

// Select item in list
export const selectItem = (
  setSelectedItem: (selectedItem: string[]) => void,
  selectedItem: string[],
  id: string,
) => {
  if (selectedItem.includes(id)) {
    setSelectedItem(selectedItem.filter((item) => item !== id))
  } else {
    setSelectedItem(selectedItem.concat(id))
  }
}

// Get header type
export const getHeaderType = (url: string) => {
  const defaultHeaderUrls = Object.values(DEFAULT_HEADER_URL)
  const primaryHeaderUrls = Object.values(PRIMARY_HEADER_URL)

  const isDefaultHeader = !!findItemByRelativeValue({
    data: defaultHeaderUrls,
    value: url,
    key: 'URL',
  })
  const isPrimaryHeader = !!findItemByRelativeValue({
    data: primaryHeaderUrls,
    value: url,
    key: 'URL',
  })

  return isDefaultHeader
    ? 'defaultHeader'
    : isPrimaryHeader
    ? 'primaryHeader'
    : ''
}

// Get page title
export const getPageTitle = (url: string): string => {
  const defaultHeaderUrls = Object.values(DEFAULT_HEADER_URL)

  const primaryHeaderUrls = Object.values(PRIMARY_HEADER_URL)

  const otherUrls = Object.values(SECONDARY_URL)

  const currentPageRoute = findItemByRelativeValue({
    data: [...defaultHeaderUrls, ...primaryHeaderUrls, ...otherUrls],
    value: url,
    key: 'URL',
  }) as {
    TITLE: string
    URL: string
  }

  return `Stellar | ${currentPageRoute.TITLE}`
}

// Generate unique id
export const generateUniqueId = () => (Date.now() + Math.random()).toString(36)

// Format phone number
export const formatPhoneNumber = (value: string) => {
  if (!value) return value

  const phoneNumber = value.replace(REGEX_REMOVE_BRACKETS, '')

  const phoneNumberLength = phoneNumber.length

  if (phoneNumberLength < 4) return `${phoneNumber}`

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`
}

// Get unique string array
export const getUniqueStringArray = (data: string[]): string[] =>
  Array.from(new Set(data))

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, '0')
}

// Format MM/DD/YYYY
export const formatDate = (date: Date) => {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join('/')
}

// Calculator Fico Score
export const handleCalFicoScore = (currentScore: number): FicoScoreTypes => {
  const scoreCalc = currentScore - 300

  let positionFicoScore = ''
  let percentLineScore = 0
  switch (true) {
    case currentScore === 850:
      positionFicoScore = `${Math.round((scoreCalc / 550) * 100) - 2}%`
      percentLineScore = Math.round((scoreCalc / 550) * 100)
      break

    case currentScore > 800 && currentScore <= 840:
      positionFicoScore = `${Math.round((scoreCalc / 550) * 100) - 3}%`
      percentLineScore = Math.round((scoreCalc / 550) * 100 - 1)
      break

    case currentScore >= 740 && currentScore <= 800:
      positionFicoScore = `${Math.round((scoreCalc / 550) * 100)}%`
      percentLineScore = Math.round((scoreCalc / 550) * 100 + 2)
      break

    case (currentScore >= 670 && currentScore <= 739) || currentScore === 580:
      positionFicoScore = `${Math.round((scoreCalc / 550) * 100) - 1}%`
      percentLineScore = Math.round((scoreCalc / 550) * 100 + 1)
      break

    case currentScore > 320 && currentScore <= 669:
      positionFicoScore = `${Math.round((scoreCalc / 550) * 100) - 3}%`
      percentLineScore = Math.round((scoreCalc / 550) * 100)
      break

    default:
      positionFicoScore = `${Math.round((scoreCalc / 550) * 100)}%`
      percentLineScore = Math.round((scoreCalc / 550) * 100 + 2)
      break
  }

  let score: FicoScoreTypes = {
    color: '',
    text: '',
    positionFicoScore,
    percentLineScore,
  }

  switch (true) {
    case currentScore >= 300 && currentScore <= 579:
      score = { ...score, color: POOR_SCORE.color, text: POOR_SCORE.text }
      break

    case currentScore >= 580 && currentScore <= 669:
      score = { ...score, color: FAIR_SCORE.color, text: FAIR_SCORE.text }
      break

    case currentScore >= 670 && currentScore <= 739:
      score = { ...score, color: GOOD_SCORE.color, text: GOOD_SCORE.text }
      break

    default:
      score = {
        ...score,
        color: EXCELLENT_SCORE.color,
        text: EXCELLENT_SCORE.text,
      }
      break
  }
  return score
}

// Calculate age
export const calculateAge = (birthday: string) => {
  const currentYear = new Date().getFullYear()
  const dob = Number(birthday.substring(6, 10))

  return dob ? currentYear - dob : 0
}

// Format SSN
export const formatSSN = (value: string) => {
  if (!value) return value

  const ssn = value.replace(REGEX_REMOVE_BRACKETS, '')

  const ssnLength = ssn.length

  if (ssnLength < 4) return `${ssn}`

  if (ssnLength < 6) {
    return `${ssn.slice(0, 3)}-${ssn.slice(3)}`
  }
  return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 9)}`
}

export const getTheLastSixMonths = (): string[] => {
  const today = new Date()
  let current
  const months = []

  for (let i = 6; i > 0; i -= 1) {
    current = new Date(today.getFullYear(), today.getMonth() + 1 - i, 1)
    months.push(FIRST_LETTER_NAME_OF_MONTHS[current.getMonth()])
  }

  return months
}

// Sort alphabet data
export const sortAlphabet = <T>({
  data,
  field,
  sortType,
}: {
  data: T[]
  field: keyof T
  sortType: SortBy
}) => {
  return data.sort(
    (a, b) =>
      (sortType === SortBy.ASC ? 1 : -1) *
      (a[field] as unknown as string).localeCompare(
        b[field] as unknown as string,
      ),
  )
}

// Sort numeric data
export const sortNumeric = <T>({
  data,
  field,
  sortType,
}: {
  data: T[]
  field: keyof T
  sortType: SortBy
}) => {
  return data.sort(
    (a, b) =>
      (sortType === SortBy.ASC ? 1 : -1) *
      ((a[field] as unknown as number) - (b[field] as unknown as number)),
  )
}

/**
 * Returns the string replace
 * @param  { string } value: number need to format('1000')
 * @returns { string } value string after format: 1,000
 */
export const formatNumToString = (value: string) => {
  return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatStringToCurrency = (value: string) => {
  let inputVal = value
  if (inputVal.indexOf('.') >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    const decimalPos = inputVal.indexOf('.')

    // split number by decimal point
    let leftSide = inputVal.substring(0, decimalPos)
    let rightSide = inputVal.substring(decimalPos)

    // add commas to left side of number
    leftSide = formatNumToString(leftSide)

    // validate right side
    rightSide = formatNumToString(rightSide)

    // Limit decimal to only 2 digits
    rightSide = rightSide.substring(0, 2)

    // join number by .
    inputVal = `${leftSide}.${rightSide}`
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    inputVal = formatNumToString(inputVal)
  }

  return inputVal
}

// Create ficoscore timestamp
export const getCurrentTimeStamp = (): string => {
  const dateObject = new Date()

  const toDay = dateObject.getDate()

  const currentMonth = dateObject.getMonth()

  const currentYear = dateObject.getFullYear()

  return `Last Updated ${MONTH_ABBREVIATE[currentMonth]}. ${toDay}, ${currentYear}`
}

// Get date object from specific date
export const getDateString = (date: number): string => {
  const dateObject = new Date()

  const currentMonth = dateObject.getMonth() + 1

  const currentYear = dateObject.getFullYear()

  return `${currentYear}-${currentMonth}-${date}`
}

/**
 * Format for pay period
 * @param payPeriod pay period
 * @returns string after format for pay period
 */
export const formatPayPeriod = (payPeriod: string): string => {
  switch (payPeriod) {
    case LIST_PAYMENTS_BY_MONTH[0].value:
      return PAY_PERIOD.PAY_MONTHLY
    case LIST_PAYMENTS_BY_MONTH[1].value:
      return PAY_PERIOD.PAY_THREE_MONTHS
    case LIST_PAYMENTS_BY_MONTH[2].value:
      return PAY_PERIOD.PAY_SIX_MONTHS
    default:
      return PAY_PERIOD.PAY_ANNUALLY
  }
}

// Function filter data by string array value
export const filterDataByArrStringValue = <T>({
  data,
  arrValue,
  key,
}: {
  data: T[]
  arrValue: string[]
  key: keyof T
}) => data.filter((item) => arrValue.includes(item[key] as unknown as string))
