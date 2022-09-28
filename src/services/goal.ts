import axios from 'axios'

// Constants
import { SERVER_ERROR, GOAL_ENDPOINT } from '@constants/index'

// Types
import { GoalListProps } from '@self-types/components/Table.props'

// Services
import { axiosInstance } from '.'

export const addGoals = async (
  goals: string[],
  userId: string,
): Promise<GoalListProps[]> => {
  try {
    const response = await axiosInstance.post(GOAL_ENDPOINT(userId), goals)

    return response.data as GoalListProps[]
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data
    }

    throw SERVER_ERROR
  }
}

export const deleteGoal = async (id: string, userId: string) => {
  try {
    const response = await axiosInstance.delete(GOAL_ENDPOINT(userId), {
      data: id,
    })

    return response.data
  } catch {
    throw SERVER_ERROR
  }
}
