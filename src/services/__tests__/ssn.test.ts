import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Mocks
import { SSN_NUMBER, USER_ID, SSN_USER } from '@mocks/mockData'

// Services
import { addSSN } from '@services/ssn'

const mockPostAxios = jest.mocked(mockAxios.post)
const mockIsAxiosError = jest.mocked(mockAxios.isAxiosError)

afterEach(() => {
  jest.clearAllMocks()
})

describe('Add ssn correctly', () => {
  test('Should call add ssn function correctly when it resoled', async () => {
    mockPostAxios.mockResolvedValue({
      data: SSN_USER,
    })

    const data = await addSSN(USER_ID, SSN_NUMBER)

    expect(data).toEqual(SSN_USER)
  })

  test('should call add ssn function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addSSN(USER_ID, SSN_NUMBER)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  test('should call add ssn function correctly when it rejected with axios error', async () => {
    const messageError = { message: SERVER_ERROR }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await addSSN(USER_ID, SSN_NUMBER)
    } catch (error) {
      expect(error).toEqual({ message: SERVER_ERROR })
    }
  })
})
