import { BankNumberType } from '@self-types/components/AddBankAccount.props'
import { SignUpAccount } from '@self-types/components/SignUpForm.props'
import {
  AddedBillListProps,
  LinkedBillListProps,
} from '@self-types/components/Table.props'

export type SubscriptionPlan = 'flex' | 'launch'

export interface IFicoScore {
  score: number
  created: string
}

export interface IUser extends SignUpAccount {
  userId: string
  subscriptionPlan?: SubscriptionPlan
  firstName?: string
  lastName?: string
  dateOfBirth?: string
  address?: string
  phoneNumber?: string
  ficoScore?: IFicoScore
}

export interface IGoal {
  userId: string
  goals: string[]
}

export interface IMarketing {
  userId: string
  marketings: string[]
}

export interface IBankAccount {
  userId: string
  account: BankNumberType[]
}

export interface IBillPayload {
  title: string
  amount: number
}

export interface IAddedBill {
  userId: string
  addedBills: AddedBillListProps[]
}

export interface ILinkedBill {
  userId: string
  linkedBills: LinkedBillListProps[]
}

export interface IUpdateLinkedBill {
  id: string
  billName?: string
  amount?: number
  draftDate?: number
  bankName?: string
  payPeriod?: string
  countBill?: number
}

export interface IBills {
  imgUrl?: string
  description?: string
}
export interface IConnectAccount extends IBills {
  email: string
  password: string
}

export interface ICreditScore {
  month: string
  score: number
}

export interface IUserCreditScore {
  userId: string
  data: ICreditScore[]
}

export interface IdentityAccount {
  firstName?: string
  lastName?: string
  dateOfBirth?: string
}

export interface AddressUser {
  address?: string
  phoneNumber?: string
}
