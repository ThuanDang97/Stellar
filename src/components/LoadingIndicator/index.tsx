import React, { memo } from 'react'

// Components
import {
  LoadingBackdrop,
  LoadingIndicatorStyled,
} from '@components/LoadingIndicator/LoadingIndicatorStyled'

// Props type
import { LoadingIndicatorProps } from '@self-types/components/LoadingIndicator.props'

const LoadingIndicator = ({ isFull = true }: LoadingIndicatorProps) => (
  <>
    {isFull ? (
      <LoadingBackdrop>
        <LoadingIndicatorStyled />
      </LoadingBackdrop>
    ) : (
      <LoadingIndicatorStyled />
    )}
  </>
)

export default memo(LoadingIndicator)
