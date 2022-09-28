// Constants
import { LOCAL_STORAGE_KEY } from '@constants/variables'

// Mocks
import { USER_ID } from '@mocks/mockData'

// Utils
import {
  clearLocalStorageItem,
  getLocalStorage,
  setLocalStorage,
} from '@utils/localStorage'

afterEach(() => {
  jest.clearAllMocks()
})

/**
 * Set local storage
 */

describe('set localstorage correctly', () => {
  it('should set local storage correctly', () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem')

    setLocalStorage(LOCAL_STORAGE_KEY.USER_ID, USER_ID)

    expect(localStorage.setItem).toHaveBeenCalled()
  })

  it('should set local storage correctly on error', () => {
    Object.getPrototypeOf(window.localStorage).setItem = jest.fn(() => {
      throw new Error('ERROR')
    })

    setLocalStorage(LOCAL_STORAGE_KEY.USER_ID, USER_ID)

    expect(localStorage.setItem).toHaveBeenCalled()
  })
})

/**
 * Get local storage
 */

describe('get localstorage correctly', () => {
  it('should return defined string on get set key', () => {
    const result = getLocalStorage(LOCAL_STORAGE_KEY.USER_ID)

    expect(result).toBe(USER_ID)
  })

  it('should return empty object on get unset key', () => {
    const result = getLocalStorage(USER_ID)

    expect(result).toEqual('')
  })
})

/**
 * Clear local storage
 */
describe('clear localstorage correctly', () => {
  it('should clear local storage correctly', () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'removeItem')

    clearLocalStorageItem(LOCAL_STORAGE_KEY.USER_ID)

    expect(localStorage.removeItem).toHaveBeenCalled()
  })

  it('should clear local storage correctly on error', () => {
    Object.getPrototypeOf(window.localStorage).removeItem = jest.fn(() => {
      throw new Error('ERROR')
    })

    clearLocalStorageItem(LOCAL_STORAGE_KEY.USER_ID)

    expect(localStorage.removeItem).toHaveBeenCalled()
  })
})
