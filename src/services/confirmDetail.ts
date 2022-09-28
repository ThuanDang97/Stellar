// Constants
import { CONFIRM_DETAIL_ENDPOINT } from '@constants/endPoints'
import { SERVER_ERROR } from '@constants/errorMessage'

// Types
import { IUpdateLinkedBill } from '@self-types/api'

// Services
import { axiosInstance } from '@services/index'

export const handleAddConfirmDetailRequest = async (
  userId: string,
  payload: IUpdateLinkedBill,
) => {
  try {
    const response = await axiosInstance.post(CONFIRM_DETAIL_ENDPOINT(userId), {
      ...payload,
    })

    return response.data
  } catch {
    throw SERVER_ERROR
  }
}
