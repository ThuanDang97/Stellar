import React, { useCallback, useState } from 'react'

// Props type
import { TooltipProps } from '@self-types/components/Tooltip.props'

// Components
import { ViewStyled } from '@components/styled-components'

// Styles
import { TooltipStyled } from './TooltipStyled'

export default ({ children, title, bgColor, titleColor }: TooltipProps) => {
  const [isHover, setIsHover] = useState(false)

  const hoverTarget = useCallback(() => setIsHover(true), [])
  const leaveTarget = useCallback(() => setIsHover(false), [])

  return (
    <ViewStyled
      data-testid="tooltip-wrapper"
      position="relative"
      onMouseEnter={hoverTarget}
      onMouseLeave={leaveTarget}
      display="flex"
    >
      {children}

      {isHover && (
        <TooltipStyled
          data-testid="tooltip"
          bgColor={bgColor}
          titleColor={titleColor}
        >
          {title}
        </TooltipStyled>
      )}
    </ViewStyled>
  )
}
