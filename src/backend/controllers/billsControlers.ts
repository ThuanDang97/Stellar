// Types
import { IBills } from '@self-types/api'

// JSON data
import bills from '../../../json/bills.json'

export const getBills = (useId: string): IBills[] | false => {
  if (useId) {
    return bills
  }
  return false
}
