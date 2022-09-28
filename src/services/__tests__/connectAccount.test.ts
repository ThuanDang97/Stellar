import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Mocks
import {
  USER_ID,
  ADDED_BILL_ID,
  APPLICATION_CONNECT_ACCOUNT,
} from '@mocks/mockData'

// Services
import { addConnectAccount } from '@services/connectAccount'

const mockPostAxios = jest.mocked(mockAxios.post)
const mockIsAxiosError = jest.mocked(mockAxios.isAxiosError)

afterEach(() => {
  jest.clearAllMocks()
})

describe('Add connect account correctly', () => {
  test('Should call add connect account function correctly when it resoled', async () => {
    mockPostAxios.mockResolvedValue({
      data: { USER_ID, ADDED_BILL_ID, APPLICATION_CONNECT_ACCOUNT },
    })

    const data = await addConnectAccount(
      USER_ID,
      ADDED_BILL_ID,
      APPLICATION_CONNECT_ACCOUNT,
    )

    expect(data).toEqual({
      USER_ID,
      ADDED_BILL_ID,
      APPLICATION_CONNECT_ACCOUNT,
    })
  })

  test('should call add connect account function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addConnectAccount(
        USER_ID,
        ADDED_BILL_ID,
        APPLICATION_CONNECT_ACCOUNT,
      )
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  test('should call add connect account function correctly when it rejected with axios error', async () => {
    const messageError = { message: SERVER_ERROR }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await addConnectAccount(
        USER_ID,
        ADDED_BILL_ID,
        APPLICATION_CONNECT_ACCOUNT,
      )
    } catch (error) {
      expect(error).toEqual({ message: SERVER_ERROR })
    }
  })
})
