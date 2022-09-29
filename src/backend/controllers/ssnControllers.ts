// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue, getCurrentTimeStamp } from '@utils/index'

// Types
import { IUser } from '@self-types/api'

// Constants
import { FREE_CREDIT_SCORE } from '@constants/variables'

// Data
import users from '../../../tmp/users.json'

/**
 * Add new ssn
 */
export const addNewSSN = (userId: string, ssn: string): IUser => {
  const currentUser = findItemByValue({
    data: users,
    value: userId,
    key: 'userId',
  }) as IUser

  const freeFicoScore = {
    score: FREE_CREDIT_SCORE,
    created: getCurrentTimeStamp(),
  }

  // Update ssn for user already had ssn
  const updatedSSNUser = { ...currentUser, ssn, ficoScore: freeFicoScore }

  // Update list users
  const updatedUsers = users.map((user) =>
    user.userId === userId ? updatedSSNUser : user,
  )

  saveDataToJSON('users', updatedUsers)

  return updatedSSNUser
}
