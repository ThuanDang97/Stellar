import axios from 'axios'

// Constants
import { CONNECT_ACCOUNT_ENDPOINT, SERVER_ERROR } from '@constants/index'

// Types
import { IConnectAccount } from '@self-types/api'

// Services
import { axiosInstance } from '@services/index'

export const addConnectAccount = async (
  userId: string,
  addedBillId: string,
  credentials: IConnectAccount,
) => {
  try {
    const response = await axiosInstance.post(
      CONNECT_ACCOUNT_ENDPOINT(userId),
      { addedBillId, credentials },
    )

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}
