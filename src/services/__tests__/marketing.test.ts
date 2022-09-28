import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Services
import { addMarketings } from '@services/marketing'

// Mocks
import { MARKETING, USER_ID, USER_MARKETING } from '@mocks/mockData'

const mockPostAxios = jest.mocked(mockAxios.post)
const mockIsAxiosError = jest.mocked(mockAxios.isAxiosError)

afterEach(() => {
  jest.clearAllMocks()
})

/**
 * Add marketings
 */
describe('add marketings correctly', () => {
  it('should call add marketings function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({
      data: USER_MARKETING,
    })

    const data = await addMarketings(MARKETING, USER_ID)

    expect(data).toEqual(USER_MARKETING)
  })

  it('should call add marketings function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addMarketings(MARKETING, USER_ID)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  it('should call add marketings function correctly when it rejected with axios error', async () => {
    const messageError = { message: SERVER_ERROR }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await addMarketings(MARKETING, USER_ID)
    } catch (error) {
      expect(error).toEqual({ message: SERVER_ERROR })
    }
  })
})
