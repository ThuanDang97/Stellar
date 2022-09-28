// Constants
import {
  CONNECT_BANK_ENDPOINT,
  CREATE_LINK_TOKEN,
  GET_BANK_NUMBER,
  SERVER_ERROR,
} from '@constants/index'

// Types
import { IBankAccount } from '@self-types/api'
import { BankNumberType } from '@self-types/components/AddBankAccount.props'

// Services
import { axiosInstance } from '.'

export const createLinkToken = async (userId: string): Promise<string> => {
  try {
    const response = await axiosInstance.post(CREATE_LINK_TOKEN, userId)

    return response.data as string
  } catch {
    throw SERVER_ERROR
  }
}

export const getBankNumber = async (
  publicToken: string,
  userId: string,
  bankId: string,
): Promise<string> => {
  const response = await axiosInstance.post(GET_BANK_NUMBER, {
    publicToken,
    userId,
    bankId,
  })

  return response.data as string
}

export const addBankAccount = async (
  userId: string,
  bankAccount: BankNumberType,
) => {
  try {
    const response = await axiosInstance.post(
      CONNECT_BANK_ENDPOINT(userId),
      bankAccount,
    )

    return response.data as IBankAccount
  } catch {
    throw SERVER_ERROR
  }
}
