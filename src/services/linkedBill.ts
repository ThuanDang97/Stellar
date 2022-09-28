// Constants
import { SERVER_ERROR, LINKED_BILL_ENDPOINT } from '@constants/index'

// Types
import { IUpdateLinkedBill } from '@self-types/api'

// Services
import { axiosInstance } from '.'

export const deleteLinkedBill = async (id: string, userId: string) => {
  try {
    const response = await axiosInstance.delete(LINKED_BILL_ENDPOINT(userId), {
      data: id,
    })

    return response.data
  } catch {
    throw SERVER_ERROR
  }
}

export const editLinkedBill = async (
  updatedFields: IUpdateLinkedBill,
  userId: string,
) => {
  try {
    const response = await axiosInstance.put(LINKED_BILL_ENDPOINT(userId), {
      ...updatedFields,
    })

    return response.data
  } catch {
    throw SERVER_ERROR
  }
}
