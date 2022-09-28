import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Mocks
import { BILL_INFO, USER_GOAL, USER_ID } from '@mocks/mockData'

// Services
import { addBill, deleteAddedBill } from '@services/addedBill'

const mockDeleteAxios = jest.mocked(mockAxios.delete)
const mockPostAxios = jest.mocked(mockAxios.post)

/**
 * Add bill
 */
describe('add bill correctly', () => {
  it('should call add bill function correctly when it resolved', async () => {
    mockPostAxios.mockResolvedValue({
      data: BILL_INFO,
    })

    const data = await addBill(USER_ID, BILL_INFO)

    expect(data).toEqual(BILL_INFO)
  })

  it('should call add bill function correctly when it rejected', async () => {
    mockPostAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await addBill(USER_ID, BILL_INFO)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})

/**
 * Delete added bill
 */
describe('delete added bill correctly', () => {
  it('should call delete added bill function correctly when it resolved', async () => {
    mockDeleteAxios.mockResolvedValue({
      data: USER_GOAL,
    })

    const data = await deleteAddedBill(USER_ID, USER_ID)

    expect(data).toEqual(USER_GOAL)
  })

  it('should call delete added bill function correctly when it rejected with server error', async () => {
    mockDeleteAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await deleteAddedBill(USER_ID, USER_ID)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})
