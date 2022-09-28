import mockAxios from 'axios'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

// Mocks
import { EDIT_LINK_BILL, USER_GOAL, USER_ID } from '@mocks/mockData'

// Services
import { deleteLinkedBill, editLinkedBill } from '@services/linkedBill'

const mockDeleteAxios = jest.mocked(mockAxios.delete)
const mockPutAxios = jest.mocked(mockAxios.put)

/**
 * Delete linked bill
 */
describe('delete linked bill correctly', () => {
  it('should call delete linked bill function correctly when it resolved', async () => {
    mockDeleteAxios.mockResolvedValue({
      data: USER_GOAL,
    })

    const data = await deleteLinkedBill(USER_ID, USER_ID)

    expect(data).toEqual(USER_GOAL)
  })

  it('should call delete linked bill function correctly when it rejected with server error', async () => {
    mockDeleteAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await deleteLinkedBill(USER_ID, USER_ID)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})

/**
 * Edit linked bill
 */
describe('edit linked bill correctly', () => {
  it('should call edit linked bill function correctly when it resolved', async () => {
    mockPutAxios.mockResolvedValue({
      data: EDIT_LINK_BILL,
    })

    const data = await editLinkedBill(EDIT_LINK_BILL, USER_ID)

    expect(data).toEqual(EDIT_LINK_BILL)
  })

  it('should call edit linked bill function correctly when it rejected with server error', async () => {
    mockPutAxios.mockRejectedValue(new Error(SERVER_ERROR))

    try {
      await editLinkedBill(EDIT_LINK_BILL, USER_ID)
    } catch (error) {
      expect(error).toEqual(SERVER_ERROR)
    }
  })
})
