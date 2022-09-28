import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Services
import { handleAddConfirmDetailRequest } from '@services/confirmDetail'

// Mocks
import { USER_DETAIL, USER_ID } from '@mocks/mockData'

const mockPostAxios = jest.mocked(mockAxios.post)

afterEach(() => {
  jest.clearAllMocks()
})

/**
 * Add detail
 */
describe('add detail correctly', () => {
  it('should call add detail function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({
      data: USER_DETAIL,
    })

    const data = await handleAddConfirmDetailRequest(USER_ID, USER_DETAIL)

    expect(data).toEqual(USER_DETAIL)
  })

  it('should call add detail function correctly when it rejected', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await handleAddConfirmDetailRequest(USER_ID, USER_DETAIL)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})
