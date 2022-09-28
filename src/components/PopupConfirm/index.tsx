import { memo } from 'react'
import { useTheme } from 'styled-components'

// Props Type
import { PopupConfirmProps } from '@self-types/components/PopupConfirm.props'

// Utils
import { pxToRem } from '@utils/theme'

// Components
import Modal from '@components/Modal'
import { TextStyled, ViewStyled } from '@components/styled-components'
import Button from '@components/Button'
import { TitlePopupStyled } from '@components/Title/TitleStyled'

const PopupConfirm = ({
  isOpen,
  textConfirm,
  onClose,
  handleDelete,
}: PopupConfirmProps) => {
  const theme = useTheme()

  return (
    <Modal pBottom={200} minWidth={275} isOpen={isOpen} onClose={onClose}>
      <ViewStyled
        width={theme.metrics.width.full}
        display="flex"
        justifyContent="flex-start"
      >
        <TitlePopupStyled
          fontSize={theme.typography.fontSize.lg}
          lineHeight={theme.typography.fontSize.lg}
          color={theme.colors.shark}
          pBottom={theme.metrics.dimensions.sm}
          pLeft={theme.metrics.dimensions.base}
          fontWeight={theme.typography.fontWeight.medium}
        >
          Delete Confirmation
        </TitlePopupStyled>
      </ViewStyled>
      <ViewStyled
        borderBottom={`${pxToRem(theme.metrics.borderWidth.default)} solid ${
          theme.colors.silverLight
        }`}
        borderTop={`${pxToRem(theme.metrics.borderWidth.default)} solid ${
          theme.colors.silverLight
        }`}
        padding={pxToRem(theme.metrics.dimensions.sm)}
        mLeft={theme.metrics.dimensions.xs}
      >
        <TextStyled
          as="p"
          fontSize={theme.typography.fontSize.md}
          lineHeight={theme.typography.fontSize.lg}
          color={theme.colors.shark}
        >
          {textConfirm}
        </TextStyled>
      </ViewStyled>
      <ViewStyled
        width={theme.metrics.width.full}
        display="flex"
        justifyContent="flex-end"
        gap={theme.metrics.dimensions.base}
        pTop={theme.metrics.dimensions.sm}
      >
        <Button
          bgColorHover={theme.colors.ironLight}
          onClick={onClose}
          size="medium"
          title="Cancel"
          color={theme.colors.shark}
          variant="dark"
        />
        <Button
          onClick={handleDelete}
          size="medium"
          variant="warning"
          title="Delete"
          bgColor={theme.colors.pomegranate}
          bgColorHover={theme.colors.cardinal}
        />
      </ViewStyled>
    </Modal>
  )
}

export default memo(PopupConfirm)
