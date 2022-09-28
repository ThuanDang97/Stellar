import { memo } from 'react'
import Link from 'next/link'
import { useTheme } from 'styled-components'

// Props type
import { LinkComponentProps } from '@self-types/components/Link.props'

// Components
import { ButtonLinkStyled } from '@components/styled-components/LinkStyled'

const LinkComponent = ({
  linkTypes,
  width,
  href,
  iconLeftUrl,
  iconRightUrl,
  text,
  mRight,
  pTop,
  pBottom,
  onClick,
  ...props
}: LinkComponentProps) => {
  const theme = useTheme()

  return (
    <Link href={href} passHref>
      <ButtonLinkStyled
        width={width}
        mRight={mRight}
        pTop={pTop ?? theme.metrics.dimensions.base}
        pBottom={pBottom ?? theme.metrics.dimensions.base}
        linkTypes={linkTypes}
        iconLeftUrl={iconLeftUrl}
        iconRightUrl={iconRightUrl}
        onClick={onClick}
        {...props}
        data-testid="link"
      >
        {text}
      </ButtonLinkStyled>
    </Link>
  )
}

export default memo(LinkComponent)
