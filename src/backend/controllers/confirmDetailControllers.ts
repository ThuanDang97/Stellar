// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue } from '@utils/index'

// Types
import {
  IAddedBill,
  ILinkedBill,
  IUpdateLinkedBill,
  IUser,
} from '@self-types/api'
import { LinkedBillListProps } from '@self-types/components/Table.props'

// Controllers
import { addedBillControllers } from '@backend/controllers/addedBillControllers'

// JSON data
import linkedBills from '../../../tmp/data/linkedBills.json'
import addedBills from '../../../tmp/data/addedBills.json'
import users from '../../../tmp/data/users.json'

export const confirmDetail = (
  userId: string,
  userDetail: IUpdateLinkedBill,
): ILinkedBill => {
  const { countBill, ...newUserDetail } = userDetail

  // Get current user's bills
  const currentLinkBills = findItemByValue({
    data: linkedBills,
    value: userId,
    key: 'userId',
  }) as ILinkedBill

  // Get current user's added bills
  const currentUserAddedBills = findItemByValue({
    data: addedBills,
    value: userId,
    key: 'userId',
  }) as IAddedBill

  const existedAddBill = findItemByValue({
    data: currentUserAddedBills.addedBills,
    key: 'id',
    value: newUserDetail.id,
  })

  const currentUserCountBill = findItemByValue({
    data: users,
    value: userId,
    key: 'userId',
  }) as IUser

  // Remove corresponding added bill if any
  if (existedAddBill) {
    addedBillControllers.deleteAddedBill(newUserDetail.id, userId)
  }

  // Update fields
  const updatedLinkBills: LinkedBillListProps[] =
    currentLinkBills.linkedBills.map((bill) =>
      bill.id === newUserDetail.id
        ? { ...bill, ...newUserDetail, status: 'unpaid' }
        : bill,
    )

  const updatedUserBill = {
    userId,
    linkedBills: updatedLinkBills,
  }

  const updatedUserLinkBill = linkedBills.map((currentUser) =>
    currentUser.userId === userId ? updatedUserBill : currentUser,
  )

  const updateCountBillUser = { ...currentUserCountBill, countBill }

  // Update list users
  const updatedUsers = users.map((user) =>
    user.userId === userId ? updateCountBillUser : user,
  )

  saveDataToJSON('linkedBills', updatedUserLinkBill)

  saveDataToJSON('users', updatedUsers)

  return updatedUserBill
}
