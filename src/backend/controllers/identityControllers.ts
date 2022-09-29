// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue } from '@utils/index'

// Types
import { IdentityAccount, IUser } from '@self-types/api'

// Data
import users from '../../../tmp/users.json'

/**
 * Add new Identity
 */
export const addNewIdentity = (
  userId: string,
  identity: IdentityAccount,
): IUser => {
  const currentUserIdentity = findItemByValue({
    data: users,
    value: userId,
    key: 'userId',
  }) as IUser

  // Update identity for user already had Identity
  const updatedIdentityUser = { ...currentUserIdentity, ...identity }

  // Update list users
  const updatedUsers = users.map((user) =>
    user.userId === userId ? updatedIdentityUser : user,
  )

  saveDataToJSON('users', updatedUsers)

  return updatedIdentityUser
}
