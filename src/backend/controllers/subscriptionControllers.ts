// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue } from '@utils/index'

// Types
import { IUser, SubscriptionPlan } from '@self-types/api'

// JSON data
import users from '../../../json/users.json'

export const selectSubscriptionPlan = (
  userId: string,
  subscriptionPlan: SubscriptionPlan,
): void => {
  const currentUser = findItemByValue({
    data: users,
    value: userId,
    key: 'userId',
  }) as IUser

  const updatedUserInfo = { ...currentUser, subscriptionPlan }

  // Update list users
  const updatedUsers = users.map((user) =>
    user.userId === userId ? updatedUserInfo : user,
  )

  saveDataToJSON('users', updatedUsers)
}
