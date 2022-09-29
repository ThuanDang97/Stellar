// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue } from '@utils/index'

// Types
import { AddressUser, IUser } from '@self-types/api'

// Data
import users from '../../../tmp/users.json'

/**
 * Add new address
 */
export const addNewAddress = (userId: string, address: AddressUser): IUser => {
  const currentUserAddress = findItemByValue({
    data: users,
    value: userId,
    key: 'userId',
  }) as IUser

  // Update address for user
  const updatedAddressUser = { ...currentUserAddress, ...address }

  // Update list users
  const updatedUsers = users.map((user) =>
    user.userId === userId ? updatedAddressUser : user,
  )

  saveDataToJSON('users', updatedUsers)

  return updatedAddressUser
}
