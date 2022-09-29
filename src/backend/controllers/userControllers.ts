// Types
import { IUser } from '@self-types/api'

// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue } from '@utils/index'

// JSON data
import users from '../../../tmp/data/users.json'

/**
 * Add new user
 */
const addNewUser = (user: IUser): void => {
  const newData = [...users, user]

  saveDataToJSON('users', newData)
}

/**
 * Find existed user
 */
const findExistedUser = (type: keyof IUser, value: string): IUser | undefined =>
  findItemByValue({ data: users as IUser[], key: type, value })

/**
 * Check if password match
 */
const isMatchPassword = (password: string, userInfo: IUser): boolean =>
  password === userInfo.password

/**
 * Reset password
 */
const resetPassword = (password: string, userInfo: IUser) => {
  const updatedUserInfo = { ...userInfo, password }

  const updatedUserList = users.map((user) =>
    user.userId === userInfo.userId ? updatedUserInfo : user,
  )

  saveDataToJSON('users', updatedUserList)
}

export const userControllers = {
  addNewUser,
  findExistedUser,
  isMatchPassword,
  resetPassword,
}
