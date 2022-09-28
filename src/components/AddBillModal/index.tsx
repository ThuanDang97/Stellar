import React from 'react'
import { useTheme } from 'styled-components'
import _ from 'lodash'

// Components
import AutoComplete from '@components/AutoComplete'
import Button from '@components/Button'
import Input from '@components/Input'
import Modal from '@components/Modal'
import { ViewStyled } from '@components/styled-components'
import { TitlePageStyled } from '@components/Title/TitleStyled'

// Props type
import { AddBillModalProps } from '@self-types/components/AddBillModal.props'

// Constants
import { LIST_BILLER } from '@constants/variables'

// Utils
import { findItemByValue } from '@utils/index'

const AddBillModal = ({
  isOpen,
  onClose,
  onClick,
  amount,
  handleChangeValue,
  billerItem,
  setBillerItem,
  onSubmit,
}: AddBillModalProps) => {
  const theme = useTheme()

  const billItem =
    findItemByValue({
      data: LIST_BILLER,
      value: billerItem,
      key: 'title',
    }) || {}

  const isDisabled = _.isEmpty(billItem) || !amount

  return (
    <Modal minWidth={theme.metrics.width.xl} isOpen={isOpen} onClose={onClose}>
      <ViewStyled
        display="flex"
        as="form"
        justifyContent="center"
        flexDirection="column"
        onSubmit={onSubmit}
        alignItems="initial"
        width={theme.metrics.width.full}
        pLeft={theme.metrics.dimensions.base}
        pRight={theme.metrics.dimensions.base}
      >
        <TitlePageStyled
          fontFamily="AdobeCleanExtraBold"
          color={theme.colors.black}
          fontSize={theme.typography.fontSize.xlg}
          fontWeight={theme.typography.fontSize.xlg}
          pBottom={theme.metrics.dimensions.base}
          pLeft={theme.metrics.dimensions.xmd}
          pRight={theme.metrics.dimensions.xmd}
        >
          Add Your Bill
        </TitlePageStyled>
        <AutoComplete billerItem={billerItem} setBillerItem={setBillerItem} />
        <Input
          type="text"
          value={amount}
          iconUrl="/icons/currency-dollar"
          onChange={handleChangeValue}
          name="amount"
          placeholder="Enter Amount"
          mTop={theme.metrics.dimensions.base}
          mBottom={theme.metrics.dimensions.sm}
          maxLength={12}
        />
        <Button
          {...(!isDisabled && { cursor: 'pointer' })}
          title="Confirm & Add Bill"
          type="submit"
          disabled={isDisabled}
          btnHeight={45}
          letterSpacing={theme.typography.letterSpacing.xl}
          onClick={onClick}
          mTop={theme.metrics.dimensions.xl}
          mBottom={theme.metrics.dimensions.base}
        />
      </ViewStyled>
    </Modal>
  )
}

export default React.memo(AddBillModal)
