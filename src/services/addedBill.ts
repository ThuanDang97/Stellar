// Constants
import { SERVER_ERROR, ADDED_BILL_ENDPOINT } from '@constants/index'

// Types
import { IAddedBill, IBillPayload } from '@self-types/api'

// Services
import { axiosInstance } from '.'

export const deleteAddedBill = async (id: string, userId: string) => {
  try {
    const response = await axiosInstance.delete(ADDED_BILL_ENDPOINT(userId), {
      data: id,
    })

    return response.data
  } catch {
    throw SERVER_ERROR
  }
}

export const addBill = async (
  userId: string,
  payload: IBillPayload,
): Promise<IAddedBill> => {
  try {
    const response = await axiosInstance.post(
      ADDED_BILL_ENDPOINT(userId),
      payload,
    )

    return response.data as IAddedBill
  } catch {
    throw SERVER_ERROR
  }
}
