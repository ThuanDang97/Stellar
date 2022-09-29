// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue } from '@utils/index'

// Types
import { LinkedBillListProps } from '@self-types/components/Table.props'
import { ILinkedBill, IUpdateLinkedBill } from '@self-types/api'

// JSON data
import linkedBills from '../../../tmp/linkedBills.json'
import allBills from '../../../tmp/bills.json'

/**
 * Get user's linked bills
 */
const getLinkedBills = (userId: string): LinkedBillListProps[] | boolean => {
  // Get current user's link bills
  const currentLinkBills = findItemByValue({
    data: linkedBills,
    value: userId,
    key: 'userId',
  }) as ILinkedBill

  if (currentLinkBills) {
    // Get linked bills
    return currentLinkBills.linkedBills
  }

  return false
}

/**
 * Edit linked bill
 */
const editLinkedBill = (
  userId: string,
  updateFields: IUpdateLinkedBill,
): ILinkedBill | boolean => {
  // Get current user's bills
  const currentLinkBills = findItemByValue({
    data: linkedBills,
    value: userId,
    key: 'userId',
  }) as ILinkedBill

  const { billName, ...rest } = updateFields

  let description:
    | {
        imgUrl: string
        description: string
      }
    | undefined

  // Update description when user change bill name
  if (billName) {
    description = findItemByValue({
      data: allBills,
      key: 'description',
      value: billName,
    }) as {
      imgUrl: string
      description: string
    }
  }

  const updatedDescription = description && { ...description }

  // Update other fields
  const updatedLinkBills = currentLinkBills.linkedBills.map((bill) =>
    bill.id === updateFields.id
      ? { ...bill, ...updatedDescription, ...rest }
      : bill,
  )

  const updatedUserBill = {
    userId,
    linkedBills: updatedLinkBills,
  }

  const updatedUserLinkBill = linkedBills.map((currentUser) =>
    currentUser.userId === userId ? updatedUserBill : currentUser,
  )

  saveDataToJSON('linkedBills', updatedUserLinkBill)

  return updatedUserBill
}

/**
 * Delete bill
 */
const deleteLinkedBill = (userId: string, billId: string) => {
  // Get current user's bills
  const currentLinkBills = findItemByValue({
    data: linkedBills,
    value: userId,
    key: 'userId',
  }) as ILinkedBill

  const updatedLinkBills = currentLinkBills.linkedBills.filter(
    (bill) => bill.id !== billId,
  )

  const updatedUserBill = {
    userId,
    linkedBills: updatedLinkBills,
  }

  const updatedUserLinkBill = linkedBills.map((currentUser) =>
    currentUser.userId === userId ? updatedUserBill : currentUser,
  )

  saveDataToJSON('linkedBills', updatedUserLinkBill)
}

export const linkedBillControllers = {
  getLinkedBills,
  editLinkedBill,
  deleteLinkedBill,
}
