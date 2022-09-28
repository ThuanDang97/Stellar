import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Mocks
import {
  BANK_ID,
  BANK_INFO,
  BANK_NUMBER,
  LINK_TOKEN,
  USER_ID,
} from '@mocks/mockData'

// Services
import {
  addBankAccount,
  createLinkToken,
  getBankNumber,
} from '@services/connectBank'

const mockPostAxios = jest.mocked(mockAxios.post)

afterEach(() => {
  jest.clearAllMocks()
})

/**
 * Create link token
 */
describe('create link token correctly', () => {
  it('should call create link token function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({ data: LINK_TOKEN })

    const data = await createLinkToken(USER_ID)

    expect(data).toEqual(LINK_TOKEN)
  })

  it('should call create link token function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await createLinkToken(USER_ID)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})

/**
 * Get bank number
 */
describe('get bank number correctly', () => {
  it('should call get bank number function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({ data: LINK_TOKEN })

    const bankNumber = await getBankNumber('abc', USER_ID, BANK_ID)

    expect(bankNumber).toEqual(LINK_TOKEN)
  })
})

/**
 *  Add bank accout
 */
describe('should add bank account correctly', () => {
  it('should call add bank function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({ data: BANK_NUMBER })

    const bankInfo = await addBankAccount(USER_ID, BANK_INFO)

    expect(bankInfo).toEqual(BANK_NUMBER)
  })

  it('should call add bank function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addBankAccount(USER_ID, BANK_INFO)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})
