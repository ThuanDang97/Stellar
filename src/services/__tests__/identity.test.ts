import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Mocks
import { IDENTITY, USER_ID, USER_IDENTITY } from '@mocks/mockData'

// Services
import { addIdentity } from '@services/identity'

const mockPostAxios = jest.mocked(mockAxios.post)
const mockIsAxiosError = jest.mocked(mockAxios.isAxiosError)

afterEach(() => {
  jest.clearAllMocks()
})

describe('Add identity correctly', () => {
  test('Should call add Identity function correctly when it resoled', async () => {
    mockPostAxios.mockResolvedValue({
      data: USER_IDENTITY,
    })

    const data = await addIdentity(USER_ID, IDENTITY)

    expect(data).toEqual(USER_IDENTITY)
  })

  test('should call add identity function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addIdentity(USER_ID, IDENTITY)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  test('should call add identity function correctly when it rejected with axios error', async () => {
    const messageError = { message: SERVER_ERROR }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await addIdentity(USER_ID, IDENTITY)
    } catch (error) {
      expect(error).toEqual({ message: SERVER_ERROR })
    }
  })
})
