// Utils
import {
  generateArrayDigits,
  generateDigitPositions,
  getDisplayName,
  updateActiveNavItem,
  filterDataContainValue,
  generateSecretBankAccount,
  getSuffixForDate,
  getHeaderType,
  getPageTitle,
  findItemByValue,
  generateUniqueId,
  formatPhoneNumber,
  getUniqueStringArray,
  findItemByRelativeValue,
  handleCalFicoScore,
  formatSSN,
  getUppercaseFirstLetter,
  getUserFirstName,
  getTheLastSixMonths,
  findItemMatchValue,
  formatNumToString,
  formatStringToCurrency,
  sortAlphabet,
  sortNumeric,
  filterDataNotContainValue,
  findItemArrStringByValue,
  getCurrentTimeStamp,
  getDateString,
} from '@utils/index'

import { checkValidate } from '@utils/validation'

// Mocks
import { AVATAR_DEFAULT, CHART_SCORE, USER_FULL_NAME } from '@mocks/mockData'

// Constants
import {
  HEADER_NAVIGATION,
  LIST_BILLER,
  INVALID_EMAIL,
  REQUIRED,
  REGEX_EMAIL,
  DEFAULT_HEADER_URL,
  PRIMARY_HEADER_URL,
  SECONDARY_URL,
  GOOD_SCORE,
  POOR_SCORE,
  FAIR_SCORE,
  EXCELLENT_SCORE,
  PUBLIC_ROUTES,
} from '@constants/index'

// Props type
import { ValidateProps } from '@self-types/components/Validate.props'
import { SortBy } from '@self-types/components/Table.props'

// Get letter firstName and lastName from fullName
describe('get letter of firstName and lastName value function', () => {
  it('Should return to letter one firstName and lastName ', () => {
    const formatFullName = getDisplayName(USER_FULL_NAME)
    expect(formatFullName).toContain('JW')
  })

  it('Should no exits firstName and lastName', () => {
    const formatFullName = getDisplayName('')
    expect(formatFullName).toContain('')
  })
})

// update status active
describe('update status active value function', () => {
  it('Should status active is true ', () => {
    const item = updateActiveNavItem('/help', HEADER_NAVIGATION)
    expect(item[0].isActive).toBe(true)
  })
})

// Generate array digits from number
describe('generate array digits from number', () => {
  it('should generate array digits from number', () => {
    const arrayDigits = generateArrayDigits(123)

    expect(arrayDigits).toEqual([1, 2, 3])
  })
})

// Generate positions for ticker
describe('generate positions for each ticker', () => {
  it('should generate positions for two tickers', () => {
    const positions = generateDigitPositions({
      firstNumber: 679,
      secondNumber: 752,
      tickerHeight: 57,
    })

    expect(positions).toEqual({
      firstNumberPos: { first: -171, second: -969, third: -3363 },
      secondNumPos: { first: -228, second: -1425, third: -4104 },
    })
  })

  it('should generate positions for one tickers', () => {
    const positions = generateDigitPositions({
      firstNumber: 679,
      tickerHeight: 57,
    })

    expect(positions).toEqual({
      firstNumberPos: { first: -171, second: -969, third: -3363 },
    })
  })
})

// Get item by id
describe('update status active value function', () => {
  it('Should filter item by id', () => {
    const item = filterDataContainValue({
      data: LIST_BILLER,
      value: 'net',
      key: 'title',
    })
    expect(item.length).toEqual(1)
  })
})

// Generate secret bank number
describe('generate secret bank number', () => {
  it('should generate secret bank number', () => {
    const secreteNumber = generateSecretBankAccount('12345555')

    expect(secreteNumber).toEqual('••••5555')
  })
})

// Get suffix date for nd
describe('Get suffix for date', () => {
  it('should get suffix for date', () => {
    const formatDate = getSuffixForDate(2)

    expect(formatDate).toEqual('2nd')
  })
})

// Get suffix date for rd
describe('Get suffix for date', () => {
  it('should get suffix for date', () => {
    const formatDate = getSuffixForDate(3)

    expect(formatDate).toEqual('3rd')
  })
})

// Get suffix date for th
describe('Get suffix for date', () => {
  it('should get suffix for date', () => {
    const formatDate = getSuffixForDate(4)

    expect(formatDate).toEqual('4th')
  })
})

// Check validate form
describe('Check validate form', () => {
  it('should value input empty return message required', () => {
    const param: ValidateProps = {
      value: '',
      regex: REGEX_EMAIL,
      errorMess: '',
    }
    const errorMess = checkValidate(param)
    expect(errorMess).toContain(REQUIRED)
  })

  it('should value input error format email return error message ', () => {
    const param: ValidateProps = {
      value: 'thanhendurnace.com',
      regex: REGEX_EMAIL,
      errorMess: INVALID_EMAIL,
    }
    const errorMess = checkValidate(param)
    expect(errorMess).toContain(INVALID_EMAIL)
  })

  it('should email valid', () => {
    const param: ValidateProps = {
      value: 'thanh@endurance.com',
      regex: REGEX_EMAIL,
      errorMess: INVALID_EMAIL,
    }
    const errorMess = checkValidate(param)
    expect(errorMess).toContain('')
  })
})

// Get header type
describe('should get correct header type', () => {
  it('should return default header type', () => {
    const headerType = getHeaderType(DEFAULT_HEADER_URL.EMAIL_SENT.URL)

    expect(headerType).toEqual('defaultHeader')
  })

  it('should return primary header type', () => {
    const headerType = getHeaderType(PRIMARY_HEADER_URL.CONFIRM_ADDRESS.URL)

    expect(headerType).toEqual('primaryHeader')
  })
})

// Get page title
describe('should get correct page title', () => {
  it('should return correct email sent page title', () => {
    const pageTitle = getPageTitle(DEFAULT_HEADER_URL.EMAIL_SENT.URL)

    expect(pageTitle).toEqual('Stellar | Email Sent')
  })

  it('should return correct confirm address page title', () => {
    const pageTitle = getPageTitle(PRIMARY_HEADER_URL.CONFIRM_ADDRESS.URL)

    expect(pageTitle).toEqual('Stellar | Confirm Address')
  })

  it('should return correct welcome page title', () => {
    const pageTitle = getPageTitle(SECONDARY_URL.WELCOME.URL)

    expect(pageTitle).toEqual('Stellar | Welcome')
  })
})

// Find item by value
it('should return correct item by value', () => {
  const item = findItemByValue({
    data: Object.values(DEFAULT_HEADER_URL),
    key: 'URL',
    value: '/sign-up',
  })

  expect(item).toEqual({ TITLE: 'Sign Up', URL: '/sign-up' })
})

// Genrate unique id
it('should generate unique id', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.1)
  jest.spyOn(global.Date, 'now').mockReturnValue(12)

  const id = generateUniqueId()

  expect(id).toBe('c.3llllllllk')
})

// Generate unique array of string
it('should get unique array of string', () => {
  const uniqueArray = getUniqueStringArray(['a', 'a', 'b', 'c'])

  expect(uniqueArray).toEqual(['a', 'b', 'c'])
})

describe('format phone number', () => {
  it('should format phone number length >7', () => {
    const phone = '1234567891'
    const newphone = formatPhoneNumber(phone)

    expect(newphone).toEqual('(123) 456-7891')
  })

  it('should format phone number length <4', () => {
    const phone = '123'
    const newphone = formatPhoneNumber(phone)

    expect(newphone).toEqual('123')
  })

  it('should format phone number length <7', () => {
    const phone = '123456'
    const newphone = formatPhoneNumber(phone)

    expect(newphone).toEqual('(123) 456')
  })

  it('should format phone number no value', () => {
    const phone = ''
    const newphone = formatPhoneNumber(phone)

    expect(newphone).toEqual('')
  })
})

it('should find correct value based on relative compare', () => {
  const item = findItemByRelativeValue({
    data: Object.values(DEFAULT_HEADER_URL),
    key: 'URL',
    value: '/sign-up/12345',
  })

  expect(item).toEqual({ TITLE: 'Sign Up', URL: '/sign-up' })
})

// Get Fico score
describe('should get Fico score', () => {
  it('should level Fico Score Poor', () => {
    const score = handleCalFicoScore(350)
    expect(score.color).toEqual(POOR_SCORE.color)
  })

  it('should level Fico Score Fair', () => {
    const score = handleCalFicoScore(590)
    expect(score.color).toEqual(FAIR_SCORE.color)
  })

  it('should level Fico Score Good', () => {
    const score = handleCalFicoScore(708)
    expect(score.color).toEqual(GOOD_SCORE.color)
  })

  it('should level Fico Score Excellent', () => {
    const score = handleCalFicoScore(800)
    expect(score.color).toEqual(EXCELLENT_SCORE.color)
  })
})

// Get first letter and uppercase
it('should get first letter and uppercase', () => {
  const letter = getUppercaseFirstLetter(AVATAR_DEFAULT.firstName)

  expect(letter).toBe('J')
})

describe('Format ssn', () => {
  it('should format ssn length >7', () => {
    const ssn = '123456789'
    const newSSN = formatSSN(ssn)

    expect(newSSN).toEqual('123-45-6789')
  })

  it('should format ssn length <4', () => {
    const ssn = '123'
    const newSSN = formatSSN(ssn)

    expect(newSSN).toEqual('123')
  })

  it('should format ssn no value', () => {
    const ssn = ''
    const newSSN = formatSSN(ssn)

    expect(newSSN).toEqual('')
  })

  it('should format phone number length <6', () => {
    const ssn = '12345'
    const newSSN = formatSSN(ssn)
    expect(newSSN).toEqual('123-45')
  })
})

it('should get user first name correctly', () => {
  const userFirstName = getUserFirstName(USER_FULL_NAME)

  expect(userFirstName).toBe(AVATAR_DEFAULT.firstName)
})

describe('should get the last six months', () => {
  jest.useFakeTimers()
  jest.setSystemTime(new Date('2022-08-10'))
  it('should get the last six months', () => {
    const months = getTheLastSixMonths()

    expect(months).toEqual(CHART_SCORE.data.map((data) => data.month))
  })
})

// Find if array item match part of value received
it('should return correct item by value', () => {
  const item = findItemMatchValue({
    data: PUBLIC_ROUTES,
    value: '/sign-up?a=ds',
  })

  expect(item).toEqual(DEFAULT_HEADER_URL.SIGN_UP.URL)
})

// Sort alphabet data
it('should sort alphabet data correctly', () => {
  const rawData = Object.values(SECONDARY_URL)

  sortAlphabet({
    data: rawData,
    field: 'TITLE',
    sortType: SortBy.DESC,
  })

  expect(rawData).toEqual([
    { TITLE: 'Welcome', URL: '/welcome' },
    { TITLE: 'Subscription', URL: '/subscription' },
    { TITLE: 'Landing Page', URL: '/' },
  ])
})

// Sort numeric data
it('should sort numeric data correctly', () => {
  const rawData = [{ score: 100 }, { score: 50 }, { score: 322 }]

  sortNumeric({
    data: rawData,
    field: 'score',
    sortType: SortBy.DESC,
  })

  expect(rawData).toEqual([{ score: 322 }, { score: 100 }, { score: 50 }])
})

// Function filter list data not include content value in item data
it('should filter data not contain value', () => {
  const item = filterDataNotContainValue({
    data: LIST_BILLER,
    value: 'net',
    key: 'title',
  })

  expect(item.length).toEqual(5)
})

describe('should format currency', () => {
  it('should format number', () => {
    const money = '1000'
    const newMoney = formatNumToString(money)
    expect(newMoney).toEqual('1,000')
  })

  it('should formatCurrency exit dot', () => {
    const money = '1000.52'
    const newMoney = formatStringToCurrency(money)
    expect(newMoney).toEqual('1,000.52')
  })

  it('should formatCurrency no dot', () => {
    const money = '100052'
    const newMoney = formatStringToCurrency(money)
    expect(newMoney).toEqual('100,052')
  })
})

describe('findItemArrStringByValue', () => {
  const array = ['g1', 'g2']
  it('Should findItemArrStringByValue true', () => {
    const checkItemExits = findItemArrStringByValue({
      data: array,
      value: 'g1',
    })
    expect(checkItemExits).toEqual('g1')
  })
  it('Should findItemArrStringByValue false', () => {
    const checkItemExits = findItemArrStringByValue({
      data: array,
      value: 'g3',
    })
    expect(checkItemExits).toEqual(undefined)
  })
})

it('should get current timestamp', () => {
  jest.useFakeTimers()
  jest.setSystemTime(new Date('2022-08-19'))

  const timeStamp = getCurrentTimeStamp()

  expect(timeStamp).toBe('Last Updated Aug. 19, 2022')
})

it('should get correct date object', () => {
  jest.useFakeTimers()
  jest.setSystemTime(new Date('2022-08-19'))

  const dateObject = getDateString(10)

  expect(dateObject).toEqual('2022-8-10')

  jest.useRealTimers()
})
