import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/index'

// Mocks
import { ADDRESS_USER, USER_ID } from '@mocks/mockData'

// Services
import { addAddress } from '@services/address'

const mockPostAxios = jest.mocked(mockAxios.post)
const mockIsAxiosError = jest.mocked(mockAxios.isAxiosError)

afterEach(() => {
  jest.clearAllMocks()
})

describe('Add address correctly', () => {
  test('Should call add address function correctly when it resoled', async () => {
    mockPostAxios.mockResolvedValue({
      data: ADDRESS_USER,
    })

    const data = await addAddress(USER_ID, ADDRESS_USER)

    expect(data).toEqual(ADDRESS_USER)
  })

  test('should call add address function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addAddress(USER_ID, ADDRESS_USER)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  test('should call add address function correctly when it rejected with axios error', async () => {
    const messageError = { message: SERVER_ERROR }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await addAddress(USER_ID, ADDRESS_USER)
    } catch (error) {
      expect(error).toEqual({ message: SERVER_ERROR })
    }
  })
})
