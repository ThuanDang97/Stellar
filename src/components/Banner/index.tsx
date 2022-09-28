import React, { memo, useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

// Components
import Image from 'next/image'
import {
  TitleSecSionStyled,
  ViewStyled,
  TextDescriptionStyled,
} from '@components/styled-components'
import { BannerStyled, ImageWrapper } from '@components/Banner/BannerStyled'

// Props type
import { BannerProps } from '@self-types/components/Banner.props'

// Constants
import { BANNER_TITLE, BANNER_DESCRIPTION } from '@constants/index'

const Banner = ({ isLinkBill }: BannerProps) => {
  const theme = useTheme()
  const [innerWidth, setInnerWidth] = useState(window.screen.width)

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.screen.width)
    }
    // Add event  and remove event resize screen
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = innerWidth <= theme.metrics.breakPoints.xs
  return (
    <BannerStyled>
      {/* Text */}
      <ViewStyled
        width="55%"
        mBottom={isMobile ? theme.metrics.dimensions.base : 0}
      >
        <TitleSecSionStyled
          fontSize={theme.typography.fontSize.lg}
          fontFamily="AdobeCleanExtraBold"
          textAlign="left"
          mRight={theme.metrics.dimensions.xs}
        >
          {isLinkBill ? BANNER_TITLE.LINKED_BILL : BANNER_TITLE.NO_LINK_BILL}
        </TitleSecSionStyled>
        <Image
          src={isLinkBill ? '/icons/party.svg' : '/icons/flame.svg'}
          width={theme.metrics.dimensions.md}
          height={theme.metrics.dimensions.md}
          alt="flame"
        />

        <TextDescriptionStyled
          textAlign="left"
          as="p"
          mTop={theme.metrics.dimensions.sm}
          fontSize={theme.typography.fontSize.sm}
          nameComponent="banner"
        >
          {isLinkBill
            ? BANNER_DESCRIPTION.LINKED_BILL
            : BANNER_DESCRIPTION.NO_LINK_BILL}
        </TextDescriptionStyled>
      </ViewStyled>

      {/* Dog Image */}
      <ImageWrapper>
        <Image src="/images/space-dog.png" layout="fill" alt="space-dog" />
      </ImageWrapper>
    </BannerStyled>
  )
}

export default memo(Banner)
