import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Mocks
import { GOAL, USER_GOAL, USER_ID } from '@mocks/mockData'

// Services
import { addGoals, deleteGoal } from '@services/goal'

const mockPostAxios = jest.mocked(mockAxios.post)
const mockDeleteAxios = jest.mocked(mockAxios.delete)
const mockIsAxiosError = jest.mocked(mockAxios.isAxiosError)

afterEach(() => {
  jest.clearAllMocks()
})

/**
 * Add goal
 */
describe('add goal correctly', () => {
  it('should call add goal function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({
      data: USER_GOAL,
    })

    const data = await addGoals(GOAL, USER_ID)

    expect(data).toEqual(USER_GOAL)
  })

  it('should call add goal function correctly when it rejected with server error', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addGoals(GOAL, USER_ID)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })

  it('should call add goal function correctly when it rejected with axios error', async () => {
    const messageError = { message: SERVER_ERROR }

    mockPostAxios.mockRejectedValue({ response: { data: messageError } })

    mockIsAxiosError.mockReturnValue(true)

    try {
      await addGoals(GOAL, USER_ID)
    } catch (error) {
      expect(error).toEqual({ message: SERVER_ERROR })
    }
  })
})

/**
 * Delete goal
 */
describe('delete goal correctly', () => {
  it('should call delete goal function correctly when it resolved', async () => {
    mockDeleteAxios.mockResolvedValue({
      data: USER_GOAL,
    })

    const data = await deleteGoal(USER_ID, USER_ID)

    expect(data).toEqual(USER_GOAL)
  })

  it('should call delete goal function correctly when it rejected with server error', async () => {
    mockDeleteAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await deleteGoal(USER_ID, USER_ID)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})
