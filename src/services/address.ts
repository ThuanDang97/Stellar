import axios from 'axios'

// Constants
import { ADDRESS_ENDPOINT, SERVER_ERROR } from '@constants/index'

// Types
import { AddressUser, IUser } from '@self-types/api'

// Services
import { axiosInstance } from '@services/index'

export const addAddress = async (
  userId: string,
  address: AddressUser,
): Promise<IUser> => {
  try {
    const response = await axiosInstance.post(ADDRESS_ENDPOINT(userId), address)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}
