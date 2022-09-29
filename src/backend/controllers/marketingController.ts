// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue, getUniqueStringArray } from '@utils/index'

// Types
import { IMarketing } from '@self-types/api'

// JSON data
import marketingUsers from '../../../json/marketingUsers.json'

/**
 * Find existed user
 */
export const findExistedUserMarketings = (userId: string): IMarketing => {
  const currentUserMarketings = findItemByValue({
    data: marketingUsers,
    value: userId,
    key: 'userId',
  }) as IMarketing

  return currentUserMarketings
}

/**
 * Add new marketings
 */
export const addNewMarketings = (
  userId: string,
  marketings: string[],
): IMarketing => {
  const currentUserMarketings = findItemByValue({
    data: marketingUsers,
    value: userId,
    key: 'userId',
  })

  // Add marketings for new user
  if (!currentUserMarketings) {
    const newMarketings = getUniqueStringArray(marketings)
    const newMarketingUser = { userId, marketings: newMarketings }

    const updatedMarketingUsers = [...marketingUsers, newMarketingUser]

    saveDataToJSON('marketingUsers', updatedMarketingUsers)

    return newMarketingUser
  }

  // Update marketings for user already had marketings
  const updatedMarketings = getUniqueStringArray(marketings)
  const updatedMarketingUser = {
    userId,
    marketings: updatedMarketings,
  }

  // Update list marketing
  const updatedMarketingUsers = marketingUsers.map((marketingUser) =>
    marketingUser.userId === userId ? updatedMarketingUser : marketingUser,
  )

  saveDataToJSON('marketingUsers', updatedMarketingUsers)

  return updatedMarketingUser
}
