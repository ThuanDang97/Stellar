import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { useTheme } from 'styled-components'

// Components
import MenuProfile from '@components/MenuProfile'

// Props type
import { MenuProps } from '@self-types/components/Menu.props'
import Avatar from '@components/Avatar'

// Constants
import { USER_FULL_NAME } from '@mocks/mockData'
import { WrapperAvatarStyled } from '@layouts/Header/HeaderStyled'
import { MENU_STATUS } from '@constants/variables'

export default {
  title: 'Components/MenuProfile',
  component: MenuProfile,
}

const Template: Story<MenuProps> = () => {
  const theme = useTheme()
  const [menuStatus, setMenuStatus] = useState<string>()

  // Show menu when click avatar on header
  const handleToggleMenu = () => {
    if (menuStatus === MENU_STATUS.FADE_IN) {
      setMenuStatus(MENU_STATUS.FADE_OUT)
    } else {
      setMenuStatus(MENU_STATUS.FADE_IN)
    }
  }
  return (
    <WrapperAvatarStyled
      columnGap={theme.metrics.dimensions.base}
      display="flex"
      position="relative"
      justifyContent="flex-end"
    >
      <Avatar
        imageUrl="https://picsum.photos/20"
        fullName={USER_FULL_NAME}
        handleToggleMenu={handleToggleMenu}
      />
      <MenuProfile
        menuStatus={menuStatus}
        fullName={USER_FULL_NAME}
        imageUrl="https://picsum.photos/20"
        setMenuStatus={setMenuStatus}
      />
    </WrapperAvatarStyled>
  )
}

export const MenuHeader = Template.bind({})
