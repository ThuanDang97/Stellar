import { IMarketing, IGoal, IUser, IBankAccount } from '@self-types/api'

export interface MarketingList {
  status: 'string'
  value: IMarketing
}

export interface GoalList {
  status: 'string'
  value: IGoal[]
}

export interface UserInfo {
  status: 'string'
  value: Omit<IUser, 'password'>
}

export interface BankAccount {
  status: 'string'
  reason?: 'string'
  value?: IBankAccount
}
