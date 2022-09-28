import axios from 'axios'

// Constants
import { SERVER_ERROR, MARKETING_ENDPOINT } from '@constants/index'

// Services
import { axiosInstance } from '.'

export const addMarketings = async (
  marketings: string[],
  userId: string,
): Promise<string[]> => {
  try {
    const response = await axiosInstance.post(
      MARKETING_ENDPOINT(userId),
      marketings,
    )

    return response.data as string[]
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}
