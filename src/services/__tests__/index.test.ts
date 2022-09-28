import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Mocks
import { USER, USER_ID } from '@mocks/mockData'

// Services
import { swrFetcher } from '@services/index'

const mockGetAxios = jest.mocked(mockAxios.get)

/**
 * SWR fetcher
 */
describe('fetch user information correctly', () => {
  it('should call fetch user information function correctly when it resolved', async () => {
    mockGetAxios.mockResolvedValue({
      data: USER,
    })

    const data = await swrFetcher(USER_ID)

    expect(data).toEqual(USER)
  })

  it('should call fetch user information function correctly when it rejected', async () => {
    mockGetAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await swrFetcher(USER_ID)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})
