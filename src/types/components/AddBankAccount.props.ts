export interface BankNumberType {
  id: string
  bankNumber: string
  bankName: string
}
export interface AddBankAccountProps {
  handleSubmitContinue?: () => void
  handleAddBankAccount?: () => void
  bankNumbers?: BankNumberType[]
}
