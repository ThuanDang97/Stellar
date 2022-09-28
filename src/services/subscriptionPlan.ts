import axios from 'axios'

// Constants
import { SERVER_ERROR, SUBSCRIPTION_ENDPOINT } from '@constants/index'

// Services
import { IUser, SubscriptionPlan } from '@self-types/api'
import { axiosInstance } from '.'

// Types

export const addSubscriptionPlan = async (
  plan: SubscriptionPlan,
  userId: string,
): Promise<Pick<IUser, 'userId' | 'subscriptionPlan'>> => {
  try {
    const response = await axiosInstance.post(
      SUBSCRIPTION_ENDPOINT(userId),
      plan,
    )

    return response.data as Pick<IUser, 'userId' | 'subscriptionPlan'>
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}
