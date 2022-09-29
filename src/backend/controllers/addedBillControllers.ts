// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue } from '@utils/index'

// Types
import { IAddedBill, IBillPayload } from '@self-types/api'
import { AddedBillListProps } from '@self-types/components/Table.props'

// JSON data
import addedBills from '../../../tmp/addedBills.json'
import allBills from '../../../tmp/bills.json'

/**
 * Get user's added bills
 */
const getAddedBills = (userId: string): AddedBillListProps[] | boolean => {
  const currentAddedBills = findItemByValue({
    data: addedBills,
    value: userId,
    key: 'userId',
  })

  if (currentAddedBills) {
    return currentAddedBills.addedBills
  }

  return false
}

/**
 * Add new bill
 */
const addNewBill = (
  userId: string,
  billId: string,
  newBill: IBillPayload,
): IAddedBill => {
  const currentAddedBills = findItemByValue({
    data: addedBills,
    value: userId,
    key: 'userId',
  })

  const billDescription = findItemByValue({
    data: allBills,
    key: 'description',
    value: newBill.title,
  }) as {
    imgUrl: string
    description: string
  }

  const addedBillDetail = {
    id: billId,
    ...billDescription,
    amount: newBill.amount,
  }

  // Add bill for new user
  if (!currentAddedBills) {
    const addedBillUser = { userId, addedBills: [addedBillDetail] }

    const updatedUserBill = [...addedBills, addedBillUser]

    saveDataToJSON('addedBills', updatedUserBill)

    return addedBillUser
  }

  // Update bill for user already had bills
  const updatedUserBill = {
    userId,
    addedBills: [...currentAddedBills.addedBills, addedBillDetail],
  }

  // Update list users added bills
  const updatedAddedBills = addedBills.map((currentUser) =>
    currentUser.userId === userId ? updatedUserBill : currentUser,
  )

  saveDataToJSON('addedBills', updatedAddedBills)

  return updatedUserBill
}

const deleteAddedBill = (addedBillId: string, userId: string) => {
  const currentAddedBills = findItemByValue({
    data: addedBills,
    value: userId,
    key: 'userId',
  })

  if (currentAddedBills) {
    // Delete added bill from user's added bill list
    const updatedAddedBillUser = currentAddedBills.addedBills.filter(
      (addedBill) => addedBill.id !== addedBillId,
    )

    // Update list added bill
    const updatedAddedBillUsers = addedBills.map((user) =>
      user.userId === userId
        ? { ...user, addedBills: updatedAddedBillUser }
        : user,
    )

    saveDataToJSON('addedBills', updatedAddedBillUsers)

    return true
  }

  return false
}

export const addedBillControllers = {
  getAddedBills,
  addNewBill,
  deleteAddedBill,
}
