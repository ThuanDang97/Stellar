import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Services
import { addSubscriptionPlan } from '@services/subscriptionPlan'

// Mocks
import {
  SUBSCRIPTION_PLAN,
  USER_ID,
  USER_SUBSCRIPTION_PLAN,
} from '@mocks/mockData'

const mockPostAxios = jest.mocked(mockAxios.post)
const mockIsAxiosError = jest.mocked(mockAxios.isAxiosError)

afterEach(() => {
  jest.clearAllMocks()
})

/**
 * Add subscription plan
 */
describe('add subscription plan correctly', () => {
  it('should call add subscription plan function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({
      data: USER_SUBSCRIPTION_PLAN,
    })

    const data = await addSubscriptionPlan(SUBSCRIPTION_PLAN, USER_ID)

    expect(data).toEqual(USER_SUBSCRIPTION_PLAN)
  })

  it('should call add subscription plan function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addSubscriptionPlan(SUBSCRIPTION_PLAN, USER_ID)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  it('should call add subscription plan function correctly when it rejected with axios error', async () => {
    const messageError = { message: SERVER_ERROR }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await addSubscriptionPlan(SUBSCRIPTION_PLAN, USER_ID)
    } catch (error) {
      expect(error).toEqual({ message: SERVER_ERROR })
    }
  })
})
