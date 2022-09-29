// Utils
import { saveDataToJSON } from '@utils/fileSystem'
import { findItemByValue } from '@utils/index'

// Types
import { IConnectAccount } from '@self-types/api'
import { AddedBillListProps } from '@self-types/components/Table.props'

// JSON data
import linkedBills from '../../../tmp/linkedBills.json'
import addedBills from '../../../tmp/addedBills.json'

/**
 * Connect account
 */
export const connectAccount = (
  userId: string,
  addedBillId: string,
  credentials: IConnectAccount,
) => {
  // Get user's added bill
  const userAddedBills = findItemByValue({
    data: addedBills,
    value: userId,
    key: 'userId',
  })?.addedBills as AddedBillListProps[]

  const selectedAddedBill = findItemByValue({
    data: userAddedBills,
    value: addedBillId,
    key: 'id',
  }) as AddedBillListProps

  // Get user's linked bill
  const userLinkedBills = findItemByValue({
    data: linkedBills,
    value: userId,
    key: 'userId',
  })

  const newLinkedBill = { ...selectedAddedBill, ...credentials }

  // Add credentials for link bill of new user
  if (!userLinkedBills) {
    const newUserLinkedBills = {
      userId,
      linkedBills: [newLinkedBill],
    }

    const updatedLinkedBills = [...linkedBills, newUserLinkedBills]

    saveDataToJSON('linkedBills', updatedLinkedBills)

    return newUserLinkedBills
  }

  const existedLinkBill = findItemByValue({
    data: userLinkedBills.linkedBills,
    key: 'id',
    value: addedBillId,
  })

  // If the link bill exist, edit credentials for this one
  if (existedLinkBill) {
    const editedCredentialsBill = userLinkedBills.linkedBills.map((bill) =>
      bill.id === addedBillId ? { ...existedLinkBill, ...credentials } : bill,
    )

    const updatedUserLinkedBills = {
      userId,
      linkedBills: editedCredentialsBill,
    }

    const updatedLinkedBills = linkedBills.map((userLinkBill) =>
      userLinkBill.userId === userId ? updatedUserLinkedBills : userLinkBill,
    )

    saveDataToJSON('linkedBills', updatedLinkedBills)

    return updatedUserLinkedBills
  }

  // If the link bill is new, add new one
  const updatedLinkedBill = [...userLinkedBills.linkedBills, newLinkedBill]

  const updatedUserLinkedBills = {
    userId,
    linkedBills: updatedLinkedBill,
  }

  const updatedLinkedBills = linkedBills.map((userLinkBill) =>
    userLinkBill.userId === userId ? updatedUserLinkedBills : userLinkBill,
  )

  saveDataToJSON('linkedBills', updatedLinkedBills)

  return updatedUserLinkedBills
}
