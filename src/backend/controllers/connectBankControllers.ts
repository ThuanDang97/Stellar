// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue } from '@utils/index'

// Types
import { BankNumberType } from '@self-types/components/AddBankAccount.props'
import { IBankAccount } from '@self-types/api'

// JSON data
import bankAccount from '../../../json/bankAccount.json'

/**
 * Get user's bank account
 */
const getUserBankAccount = (userId: string): IBankAccount | boolean => {
  const currentUser = findItemByValue({
    data: bankAccount,
    value: userId,
    key: 'userId',
  })

  if (currentUser) {
    return currentUser
  }

  return false
}

/**
 * Add bank account
 */
const addBankAccount = (
  userId: string,
  newBankAccount: BankNumberType,
): IBankAccount => {
  const currentUser = findItemByValue({
    data: bankAccount,
    value: userId,
    key: 'userId',
  })

  // Add bank account for new user
  if (!currentUser) {
    const newBankAccountUser = { userId, account: [newBankAccount] }

    const updatedBankAccountUsers = [...bankAccount, newBankAccountUser]

    saveDataToJSON('bankAccount', updatedBankAccountUsers)

    return newBankAccountUser
  }

  // Update bank numbers for user already had bank numbers
  const updatedBankAccountNumbers = [...currentUser.account, newBankAccount]
  const updatedBankAccountUser = {
    userId,
    account: updatedBankAccountNumbers,
  }

  // Update list bank account
  const updatedBankAccountUsers = bankAccount.map((currentAccount) =>
    currentAccount.userId === userId ? updatedBankAccountUser : currentAccount,
  )

  saveDataToJSON('bankAccount', updatedBankAccountUsers)

  return updatedBankAccountUser
}

/**
 * Check bank already linked
 */
const checkLinkedBank = (userId: string, bankId: string): boolean => {
  const currentUser = findItemByValue({
    data: bankAccount,
    value: userId,
    key: 'userId',
  })

  if (currentUser) {
    const isBankLinked = !!findItemByValue({
      data: currentUser.account,
      key: 'id',
      value: bankId,
    })

    return isBankLinked
  }

  return false
}

export const connectBankControllers = {
  getUserBankAccount,
  addBankAccount,
  checkLinkedBank,
}
