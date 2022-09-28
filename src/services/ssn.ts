import axios from 'axios'

// Constants
import { SSN_ENDPOINT, SERVER_ERROR } from '@constants/index'

// Types
import { IUser } from '@self-types/api'

// Services
import { axiosInstance } from '@services/index'

export const addSSN = async (userId: string, ssn: string): Promise<IUser> => {
  try {
    const response = await axiosInstance.post(SSN_ENDPOINT(userId), ssn)

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}
