import React, { memo } from 'react'
import { useTheme } from 'styled-components'

// Components
import Image from 'next/image'
import { TextStyled, BoxShadowStyled } from '@components/styled-components'
import { WrapperImage } from '@components/CardGoal/CardGoalStyled'

// Props type
import { CardGoalProps } from '@self-types/components/CardGold.props'

const CardGoal = ({
  title,
  iconUrl,
  isActive = false,
  handleSelectGoal,
  disable,
}: CardGoalProps) => {
  const theme = useTheme()

  return (
    <BoxShadowStyled
      cursor="pointer"
      onClick={handleSelectGoal}
      data-testid="card-goal"
      shadowType="small"
      padding={theme.metrics.dimensions.md}
      bgColor={isActive ? theme.colors.frenchRose : theme.colors.white}
      margin={theme.metrics.dimensions.sm}
      width={160}
      height={120}
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      flexDirection="column"
      className={disable ? 'disable-item' : ''}
    >
      <WrapperImage mBottom={theme.metrics.dimensions.sm}>
        <Image
          src={isActive ? `${iconUrl}-active.svg` : `${iconUrl}.svg`}
          layout="fill"
          alt="Card Goal"
        />
      </WrapperImage>
      <TextStyled
        as="p"
        lineHeight={theme.typography.lineHeight.xs}
        textAlign="left"
        fontSize={theme.typography.fontSize.base}
        color={isActive ? theme.colors.white : theme.colors.cello}
        display="-webkit-box"
        maxWidth={200}
        webkitLineClamp={2}
        webkitBoxOrient="vertical"
        overflow="hidden"
        whiteSpace="pre-line"
      >
        {title}
      </TextStyled>
    </BoxShadowStyled>
  )
}

export default memo(CardGoal)
