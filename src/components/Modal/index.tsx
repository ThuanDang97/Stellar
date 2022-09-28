import React, { memo, useCallback } from 'react'
import { useTheme } from 'styled-components'

// Components
import Image from 'next/image'
import {
  BackDropStyled,
  ImageWrapper,
  ModalStyled,
} from '@components/Modal/ModalStyled'

// Props type
import { ModalProps } from '@self-types/components/Modal.props'

const Modal = ({ children, isOpen, onClose, ...props }: ModalProps) => {
  const theme = useTheme()

  const preventCloseModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation(),
    [],
  )

  if (!isOpen) {
    return null
  }

  return (
    <BackDropStyled
      pBottom={props.pBottom}
      onClick={onClose}
      data-testid="backdrop"
    >
      {/* Modal wrapper */}
      <ModalStyled
        onClick={preventCloseModal}
        shadowType="regular"
        minWidth={props.minWidth || theme.metrics.modal.default}
        maxWidth={props.maxWidth || theme.metrics.modal.max}
        mLeft={props.mLeft || theme.metrics.dimensions.md}
        mRight={props.mRight || theme.metrics.dimensions.md}
        {...props}
      >
        {/* Modal close icon */}
        <ImageWrapper data-testid="close-icon" onClick={onClose}>
          <Image src="/icons/close.svg" layout="fill" alt="close-icon" />
        </ImageWrapper>
        {/* Modal content */}
        {children}
      </ModalStyled>
    </BackDropStyled>
  )
}

export default memo(Modal)
