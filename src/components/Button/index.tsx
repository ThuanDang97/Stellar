// Library
import React, { memo } from 'react'

// Styles
import { ButtonStyled, ButtonIconStyled } from '@components/Button/ButtonStyled'

// Props type
import { ButtonProps } from '@self-types/components/Button.props'

// Themes
import { theme } from '@themes/index'

// Components
import Image from 'next/image'
import { BadgeNotifStyled, ViewStyled } from '@components/styled-components'

const Button = ({
  onClick,
  title,
  label,
  size = 'default',
  variant,
  imgUrl,
  disabled,
  width,
  height,
  count = 0,
  titleHover,
  ...props
}: ButtonProps) => (
  <ButtonStyled
    data-testid="button"
    onClick={onClick}
    size={size}
    variant={disabled ? 'disabled' : variant}
    disabled={disabled}
    title={titleHover}
    {...props}
  >
    {!!imgUrl && (
      <ButtonIconStyled>
        <ViewStyled
          position="relative"
          display="inline-block"
          width={width}
          height={height}
          mRight={title || label ? theme.metrics.dimensions.xs : 0}
        >
          <Image layout="fill" src={imgUrl} />

          {count > 0 && <BadgeNotifStyled>{count}</BadgeNotifStyled>}
        </ViewStyled>
        {label}
      </ButtonIconStyled>
    )}
    {title}
  </ButtonStyled>
)

// Check re-render for Button component
const buttonPropsAreEqual = (
  prevButton: ButtonProps,
  nextButton: ButtonProps,
) =>
  prevButton.title === nextButton.title &&
  prevButton.label === nextButton.label &&
  prevButton.variant === nextButton.variant &&
  prevButton.width === nextButton.width &&
  prevButton.height === nextButton.height &&
  prevButton.imgUrl === nextButton.imgUrl &&
  prevButton.disabled === nextButton.disabled &&
  prevButton.onClick === nextButton.onClick

export default memo(Button, buttonPropsAreEqual)
