// Utils
import { IGoal } from '@self-types/api'
import { saveDataToJSON } from '@utils/fileSystem'
import {
  filterDataByArrStringValue,
  findItemByValue,
  getUniqueStringArray,
} from '@utils/index'

// Types
import { GoalListProps } from '@self-types/components/Table.props'

// JSON data
import goalUsers from '../../../json/goalUsers.json'
import allGoals from '../../../json/goals.json'

/**
 * Get user's goals
 */
const getUserGoal = (userId: string): GoalListProps[] | boolean => {
  const currentUserGoals = findItemByValue({
    data: goalUsers,
    value: userId,
    key: 'userId',
  })

  if (currentUserGoals) {
    const detailGoals = filterDataByArrStringValue<GoalListProps>({
      data: allGoals,
      arrValue: currentUserGoals.goals,
      key: 'value',
    })

    return detailGoals
  }

  return false
}

/**
 * Add new goal
 */
const addNewGoals = (userId: string, goals: string[]): GoalListProps[] => {
  const currentUserGoals = findItemByValue({
    data: goalUsers,
    value: userId,
    key: 'userId',
  })

  // Add goals for new user
  if (!currentUserGoals) {
    const newGoals = getUniqueStringArray(goals)
    const newGoalUser = { userId, goals: newGoals }

    const updatedGoalUsers = [...goalUsers, newGoalUser]

    saveDataToJSON('goalUsers', updatedGoalUsers)

    const detailNewGoals = filterDataByArrStringValue<GoalListProps>({
      data: allGoals,
      arrValue: newGoalUser.goals,
      key: 'value',
    })

    return detailNewGoals
  }

  // Update goals for user already had goals
  const updatedGoals = getUniqueStringArray(goals)

  const updatedGoalUser = {
    userId,
    goals: updatedGoals,
  }

  // Update list goal users
  const updatedGoalUsers = goalUsers.map((goalUser) =>
    goalUser.userId === userId ? updatedGoalUser : goalUser,
  )

  saveDataToJSON('goalUsers', updatedGoalUsers)

  const detailGoals = filterDataByArrStringValue<GoalListProps>({
    data: allGoals,
    arrValue: updatedGoalUser.goals,
    key: 'value',
  })

  return detailGoals
}

/**
 * Edit goal
 */
const editGoal = ({
  newGoal,
  oldGoal,
  userId,
}: {
  newGoal: string
  oldGoal: string
  userId: string
}): IGoal | boolean => {
  const currentUserGoals = findItemByValue({
    data: goalUsers,
    value: userId,
    key: 'userId',
  })

  if (currentUserGoals) {
    // Replace old goal with new goal
    const updatedGoals = currentUserGoals.goals.map((goal) =>
      goal === oldGoal ? newGoal : goal,
    )
    // Update goals for current user
    const updatedGoalUser = { userId, goals: updatedGoals }

    // Update list goal users
    const updatedGoalUsers = goalUsers.map((goalUser) =>
      goalUser.userId === userId ? updatedGoalUser : goalUser,
    )

    saveDataToJSON('goalUsers', updatedGoalUsers)

    return updatedGoalUser
  }

  return false
}

/**
 * Delete goal
 */
const deleteGoal = (deletedGoal: string, userId: string): boolean => {
  const currentUserGoals = findItemByValue({
    data: goalUsers,
    value: userId,
    key: 'userId',
  })

  if (currentUserGoals) {
    // Delete goal from user's goal list
    const updatedGoalUser = currentUserGoals.goals.filter(
      (goal) => goal !== deletedGoal,
    )

    // Update list goal users
    const updatedGoalUsers = goalUsers.map((goalUser) =>
      goalUser.userId === userId
        ? { ...goalUser, goals: updatedGoalUser }
        : goalUser,
    )

    saveDataToJSON('goalUsers', updatedGoalUsers)

    return true
  }

  return false
}

export const goalControllers = {
  getUserGoal,
  addNewGoals,
  editGoal,
  deleteGoal,
}
