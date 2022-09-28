import { FC, memo, useMemo } from 'react'
import { useTheme } from 'styled-components'

// Components
import {
  AvatarStyled,
  AvatarImageStyled,
} from '@components/Avatar/AvatarStyled'
import { ViewStyled } from '@components/styled-components/ViewStyled'

// Props types
import { AvatarProps } from '@self-types/components/Avatar.props'

// Utils
import { getDisplayName } from '@utils/index'

const Avatar: FC<AvatarProps> = ({
  imageUrl,
  fullName = '',
  width,
  height,
  handleToggleMenu,
}) => {
  const theme = useTheme()

  // Get short user name when not have image
  const userName: string = useMemo(() => getDisplayName(fullName), [fullName])

  return (
    <ViewStyled
      borderRadius={theme.metrics.borderRadius.circle}
      width={width || theme.metrics.width.base}
      height={height || theme.metrics.height.base}
      bgColor={theme.colors.gallery}
      position="relative"
      onClick={handleToggleMenu}
      cursor="pointer"
      zIndex={theme.metrics.zIndex.under}
    >
      {imageUrl ? (
        <AvatarImageStyled
          data-testid="imgAvatar"
          src={imageUrl}
          layout="fill"
        />
      ) : (
        <AvatarStyled data-testid="avatarDefault">{userName}</AvatarStyled>
      )}
    </ViewStyled>
  )
}

export default memo(Avatar)
