// Types
import { IBills } from '@self-types/api'

// JSON data
import bills from '../../../tmp/bills.json'

export const getBills = (useId: string): IBills[] | false => {
  if (useId) {
    return bills
  }
  return false
}
