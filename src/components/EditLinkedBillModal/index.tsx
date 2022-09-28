import React, {
  memo,
  FC,
  useMemo,
  useState,
  useCallback,
  useEffect,
  FormEvent,
} from 'react'
import { useTheme } from 'styled-components'

// Props type
import { EditLinkedBillProps } from '@self-types/components/EditLinkedBillModal.props'

// Components
import Button from '@components/Button'
import Input from '@components/Input'
import Avatar from '@components/Avatar'
import Picker from '@components/Picker'
import Select from '@components/Select'
import Modal from '@components/Modal'
import { ViewStyled } from '@components/styled-components'
import AutoComplete from '@components/AutoComplete'
import {
  TitlePageStyled,
  TitlePopupStyled,
} from '@components/Title/TitleStyled'

// Constants
import {
  LIST_BILLER,
  LIST_PAYMENTS_BY_MONTH,
  MAX_LENGTH_INPUT,
  TITLE_EDIT_LINKED_BILL,
} from '@constants/index'

// Utils
import { findItemByValue, formatStringToCurrency } from '@utils/index'
import ConnectAccountForm from '@components/ConnectAccountForm'

const initBillInfo = { title: '', imgUrl: '' }

const EditLinkedBillModal: FC<EditLinkedBillProps> = ({
  editLinkedBillForm,
  appName,
  appImage,
  listBankNumber,
  status,
  isOpen,
  onClose,
  billItem,
  setBillItem,
  onSubmitBill,
  handleChangeAmount,
  handleChangeBankNumber,
  handleChangePayByDay,
  handleChangePayByMonth,
  handleSubmit,
  isConnectAccount,
  setIsConnectAccount,
  newAppImage,
  newAppName,
  errorMessageConnectAccount,
  loginConnectAccount,
  handleChangeEmail,
  handleChangePassword,
  handleSubmitConnectAccount,
}) => {
  const theme = useTheme()
  const [isSelectBill, setIsSelectBill] = useState(false)
  const [billInfo, setBillInfo] = useState(initBillInfo)

  const isDisabled = status === 'paid'

  const selectedBill = findItemByValue({
    data: LIST_BILLER as { id: string; src: string; title: string }[],
    value: billItem,
    key: 'title',
  })

  useEffect(() => {
    if (selectedBill && isSelectBill) {
      setBillInfo({ title: selectedBill.title, imgUrl: selectedBill.src })
    }
  }, [billItem, isSelectBill, selectedBill])

  const onCloseSelectBiller = useCallback(() => {
    setIsSelectBill(false)
    setBillItem('')
  }, [setBillItem])

  const handleCloseConnectAccountForm = useCallback(() => {
    setIsConnectAccount(false)
  }, [setIsConnectAccount])

  const onOpenSelectBiller = useCallback(() => setIsSelectBill(true), [])

  const onCloseModal = useCallback(() => {
    setIsSelectBill(false)
    setIsConnectAccount(false)
    setBillInfo(initBillInfo)

    if (onClose) {
      onClose()
    }
  }, [onClose, setIsConnectAccount])

  const handleSubmitAccount = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      handleSubmitConnectAccount(e)

      setIsSelectBill(false)
      setBillInfo(initBillInfo)
    },
    [handleSubmitConnectAccount],
  )

  // Render avatar and title confirm detail form
  const renderHeaderForm = useMemo(() => {
    return (
      <ViewStyled
        display="flex"
        justifyContent="center"
        flexDirection="column"
        minWidth={theme.metrics.width.xl}
      >
        <Avatar
          imageUrl={billInfo.imgUrl ? billInfo.imgUrl : appImage}
          width={80}
          height={80}
        />
        <ViewStyled display="flex">
          <TitlePopupStyled
            fontSize={theme.typography.fontSize.md}
            color={theme.colors.black}
            lineHeight={theme.typography.lineHeight.md}
            fontWeight={theme.typography.fontWeight.bold}
            display="flex"
          >
            {`${billInfo.title ? billInfo.title : appName || ''} Account`}
          </TitlePopupStyled>

          {!isSelectBill && !isDisabled && (
            <Button
              onClick={onOpenSelectBiller}
              imgUrl="/icons/pencil-square.svg"
              data-testid="iconEdit"
              variant="icon"
              size="noPadding"
              width={theme.metrics.dimensions.base}
              height={theme.metrics.dimensions.base}
              mLeft={theme.metrics.dimensions.xs}
              mTop={3}
              titleHover="Change Biller"
            />
          )}
        </ViewStyled>
      </ViewStyled>
    )
  }, [
    theme.metrics.width.xl,
    theme.metrics.dimensions.base,
    theme.metrics.dimensions.xs,
    theme.typography.fontSize.md,
    theme.typography.lineHeight.md,
    theme.typography.fontWeight.bold,
    theme.colors.black,
    billInfo.imgUrl,
    billInfo.title,
    appImage,
    appName,
    isSelectBill,
    isDisabled,
    onOpenSelectBiller,
  ])

  return (
    <Modal
      isOpen={isOpen}
      onClose={onCloseModal}
      minWidth={theme.metrics.width.xl}
    >
      {isConnectAccount ? (
        <ConnectAccountForm
          isEditModal
          email={loginConnectAccount.email}
          password={loginConnectAccount.password}
          handleChangeEmail={handleChangeEmail}
          handleChangePassword={handleChangePassword}
          handleSubmit={handleSubmitAccount}
          errorMessage={errorMessageConnectAccount}
          nameApplication={newAppName}
          imageApplication={newAppImage}
          onCloseConnectAccountForm={handleCloseConnectAccountForm}
        />
      ) : (
        <>
          <TitlePageStyled
            fontFamily="AdobeCleanExtraBold"
            color={theme.colors.black}
            fontSize={theme.typography.fontSize.xlg}
            pBottom={theme.metrics.dimensions.xs}
          >
            {TITLE_EDIT_LINKED_BILL}
          </TitlePageStyled>
          <ViewStyled
            data-testid="editLinkedBillForm"
            as="form"
            onSubmit={isSelectBill ? onSubmitBill : handleSubmit}
            noValidate
            padding={theme.metrics.dimensions.base}
            textAlign="center"
            bgColor={theme.colors.white}
            width={theme.metrics.width.full}
          >
            {renderHeaderForm}

            {isSelectBill ? (
              <>
                <AutoComplete
                  billerItem={billItem}
                  setBillerItem={setBillItem}
                />

                <ViewStyled
                  width={theme.metrics.width.full}
                  display="flex"
                  justifyContent="flex-end"
                  gap={theme.metrics.dimensions.base}
                  mTop={theme.metrics.dimensions.xxl}
                >
                  <Button
                    bgColorHover={theme.colors.ironLight}
                    onClick={onCloseSelectBiller}
                    title="Cancel"
                    color={theme.colors.shark}
                    variant="dark"
                    btnWidth="25%"
                  />
                  <Button
                    type="submit"
                    title="Continue"
                    btnWidth="28%"
                    disabled={!selectedBill}
                  />
                </ViewStyled>
              </>
            ) : (
              <>
                <Input
                  placeholder="&nbsp;Amount"
                  type="text"
                  name="amount"
                  mTop={theme.metrics.dimensions.tiny}
                  width={13}
                  mRight={-1}
                  value={formatStringToCurrency(editLinkedBillForm.amount)}
                  onChange={handleChangeAmount}
                  iconUrl={
                    isDisabled
                      ? '/icons/currency-dollar-disable'
                      : '/icons/currency-dollar'
                  }
                  readOnly={isDisabled}
                  maxLength={MAX_LENGTH_INPUT}
                />
                <Select
                  fontSize={theme.typography.fontSize.base}
                  defaultValue={editLinkedBillForm.bankName}
                  width={theme.metrics.width.full}
                  handleSelect={handleChangeBankNumber}
                  listOption={listBankNumber}
                  readOnly={isDisabled}
                  color={
                    isDisabled ? theme.colors.spanishGray : theme.colors.shark
                  }
                  borderColor={
                    isDisabled ? theme.colors.spanishGray : theme.colors.shark
                  }
                  {...{ cursor: isDisabled ? 'mouse' : 'pointer' }}
                />
                <Picker
                  onChange={handleChangePayByDay}
                  isMinDate
                  isMaxDate
                  defaultDate={editLinkedBillForm.draftDate}
                  disabled={isDisabled}
                  borderColor={
                    isDisabled ? theme.colors.spanishGray : theme.colors.cello
                  }
                  mTop={theme.metrics.dimensions.lg}
                  mBottom={theme.metrics.dimensions.sm}
                />
                <Select
                  fontSize={theme.typography.fontSize.base}
                  defaultValue={editLinkedBillForm.payPeriod}
                  width={theme.metrics.width.full}
                  handleSelect={handleChangePayByMonth}
                  listOption={LIST_PAYMENTS_BY_MONTH}
                />

                <Button
                  mTop={theme.metrics.dimensions.xxl}
                  {...{ cursor: 'pointer' }}
                  type="submit"
                  title="Confirm & Link Bill"
                  btnWidth={theme.metrics.width.full}
                  size="large"
                  disabled={!editLinkedBillForm.amount}
                />
              </>
            )}
          </ViewStyled>
        </>
      )}
    </Modal>
  )
}

export default memo(EditLinkedBillModal)
