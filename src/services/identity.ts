import axios from 'axios'

// Constants
import { IDENTITY_ENDPOINT, SERVER_ERROR } from '@constants/index'

// Types
import { IdentityAccount, IUser } from '@self-types/api'

// Services
import { axiosInstance } from '@services/index'

export const addIdentity = async (
  userId: string,
  identity: IdentityAccount,
): Promise<IUser> => {
  try {
    const response = await axiosInstance.post(
      IDENTITY_ENDPOINT(userId),
      identity,
    )

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}
