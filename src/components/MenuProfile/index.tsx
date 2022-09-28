import { FC, memo, useCallback } from 'react'
import { useTheme } from 'styled-components'
import { useRouter } from 'next/router'
import { useSWRConfig } from 'swr'
import Link from 'next/link'

// Props types
import { CacheSWRProps } from '@self-types/swr'
import { MenuProps } from '@self-types/components/Menu.props'

// Components
import {
  ListItemStyled,
  ListStyled,
} from '@components/styled-components/ListStyled'
import { WrapperAvatarStyled } from '@layouts/Header/HeaderStyled'
import LinkComponent from '@components/Link'
import Avatar from '@components/Avatar'
import Button from '@components/Button'
import {
  BoxShadowAnimationStyled,
  TextStyled,
  ViewStyled,
} from '@components/styled-components'

// Constants
import {
  DEFAULT_HEADER_URL,
  LOCAL_STORAGE_KEY,
  MENU_STATUS,
  PRIMARY_HEADER_URL,
} from '@constants/index'

// Utils
import { pxToRem } from '@utils/theme'
import { clearLocalStorageItem } from '@utils/localStorage'
import { useAuthContext } from '@hooks/useAuthContext'

const MenuProfile: FC<MenuProps> = ({
  imageUrl,
  fullName,
  menuStatus,
  setMenuStatus,
}) => {
  const theme = useTheme()
  const router = useRouter()
  const { setUserId } = useAuthContext()
  const { cache } = useSWRConfig()
  const cacheFetchingData = cache as CacheSWRProps
  const handleLogout = useCallback(() => {
    setMenuStatus(MENU_STATUS.NONE)
    clearLocalStorageItem(LOCAL_STORAGE_KEY.USER_ID)
    setUserId('')
    cacheFetchingData.clear()
    router.push(DEFAULT_HEADER_URL.LOGIN.URL)
  }, [cacheFetchingData, router, setMenuStatus, setUserId])

  const closeMenu = useCallback(() => {
    setMenuStatus(MENU_STATUS.NONE)
  }, [setMenuStatus])

  const handleClickDashboardMenu = () => {
    setMenuStatus(MENU_STATUS.NONE)
    if (router.pathname === PRIMARY_HEADER_URL.DASHBOARD.URL) router.reload()
  }

  return (
    <BoxShadowAnimationStyled
      data-testid="menuHeader"
      textAlign="center"
      flexDirection="column"
      alignItems="initial"
      flexWrap="wrap"
      position="absolute"
      width={theme.metrics.width.xl}
      bgColor={theme.colors.white}
      zIndex={theme.metrics.zIndex.top}
      top={50}
      right={1}
      borderRadius={theme.metrics.borderRadius.default}
      duration={0.3}
      fadeInOut={menuStatus}
    >
      <ListStyled width={theme.metrics.width.full}>
        <ListItemStyled bgColorHover={theme.colors.white} pTop={0} pBottom={0}>
          <WrapperAvatarStyled
            columnGap={theme.metrics.dimensions.base}
            display="flex"
            borderBottom={`${pxToRem(
              theme.metrics.borderWidth.default,
            )} solid ${theme.colors.silverLight}`}
            pBottom={theme.metrics.dimensions.md}
            pTop={theme.metrics.dimensions.md}
            mLeft={theme.metrics.dimensions.md}
            mRight={theme.metrics.dimensions.md}
          >
            <Avatar
              width={theme.metrics.dimensions.xxl}
              height={theme.metrics.dimensions.xxl}
              fullName={fullName}
              imageUrl={imageUrl}
            />
            <ViewStyled
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <TextStyled
                fontWeight={theme.typography.fontWeight.bold}
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overflow="hidden"
                maxWidth={130}
              >
                {fullName}
              </TextStyled>
              <LinkComponent
                href={PRIMARY_HEADER_URL.USER_PROFILE.URL}
                bgColorHover={theme.colors.ironLight}
                text="See Your Profile"
                display="inline"
                fontSize={theme.typography.fontSize.xss}
                color={theme.colors.bigStone}
                textAlign="left"
                pTop={theme.metrics.dimensions.xs}
                pBottom={theme.metrics.dimensions.xs}
                fontFamily="AdobeCleanLight"
                letterSpacing={theme.typography.letterSpacing.xxl}
                onClick={closeMenu}
              />
            </ViewStyled>
          </WrapperAvatarStyled>
        </ListItemStyled>
        <Link href={PRIMARY_HEADER_URL.REFER_A_FRIEND.URL} passHref>
          <ListItemStyled
            textAlign="left"
            pTop={0}
            pBottom={0}
            bgColorHover={theme.colors.ironLight}
            onClick={closeMenu}
          >
            <ViewStyled
              borderBottom={`${pxToRem(
                theme.metrics.borderWidth.default,
              )} solid ${theme.colors.silverLight}`}
              pTop={theme.metrics.dimensions.md}
              pBottom={theme.metrics.dimensions.md}
              mLeft={theme.metrics.dimensions.md}
              mRight={theme.metrics.dimensions.md}
            >
              <LinkComponent
                onClick={closeMenu}
                href={PRIMARY_HEADER_URL.REFER_A_FRIEND.URL}
                linkTypes="forgotPasswordLink"
                text="Refer A Friend"
                display="inline"
                fontSize={theme.typography.fontSize.sm}
                fontWeight={theme.typography.fontWeight.bold}
              />
            </ViewStyled>
          </ListItemStyled>
        </Link>
        <Link
          href={{
            pathname: DEFAULT_HEADER_URL.CONNECT_BANK.URL,
            query: { returnUrl: router.route },
          }}
          passHref
        >
          <ListItemStyled
            textAlign="left"
            pTop={0}
            pBottom={0}
            bgColorHover={theme.colors.ironLight}
            onClick={closeMenu}
          >
            <ViewStyled
              borderBottom={`${pxToRem(
                theme.metrics.borderWidth.default,
              )} solid ${theme.colors.silverLight}`}
              pTop={theme.metrics.dimensions.md}
              pBottom={theme.metrics.dimensions.md}
              mLeft={theme.metrics.dimensions.md}
              mRight={theme.metrics.dimensions.md}
            >
              <LinkComponent
                onClick={closeMenu}
                href={{
                  pathname: DEFAULT_HEADER_URL.CONNECT_BANK.URL,
                  query: { returnUrl: router.route },
                }}
                linkTypes="forgotPasswordLink"
                text="Connect Bank"
                display="inline"
                fontSize={theme.typography.fontSize.sm}
                fontWeight={theme.typography.fontWeight.bold}
              />
            </ViewStyled>
          </ListItemStyled>
        </Link>
        <ListItemStyled
          textAlign="left"
          bgColorHover={theme.colors.white}
          pTop={0}
          pBottom={0}
          mTop={theme.metrics.dimensions.sm}
          onClick={closeMenu}
        >
          <ListStyled
            display="block"
            width={theme.metrics.width.full}
            onClick={closeMenu}
          >
            <Link href={PRIMARY_HEADER_URL.DASHBOARD.URL} passHref>
              <ListItemStyled
                pTop={0}
                pBottom={0}
                bgColorHover={theme.colors.ironLight}
                onClick={closeMenu}
              >
                <LinkComponent
                  mLeft={theme.metrics.dimensions.md}
                  href={PRIMARY_HEADER_URL.DASHBOARD.URL}
                  linkTypes="forgotPasswordLink"
                  text="Dashboard"
                  display="inline"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.bold}
                  onClick={handleClickDashboardMenu}
                />
              </ListItemStyled>
            </Link>
            <Link href={PRIMARY_HEADER_URL.HELP.URL}>
              <ListItemStyled
                pTop={0}
                pBottom={0}
                bgColorHover={theme.colors.ironLight}
                onClick={closeMenu}
              >
                <LinkComponent
                  onClick={closeMenu}
                  href={PRIMARY_HEADER_URL.HELP.URL}
                  linkTypes="forgotPasswordLink"
                  text="Help & Support"
                  display="inline"
                  fontSize={theme.typography.fontSize.sm}
                  fontWeight={theme.typography.fontWeight.bold}
                  mLeft={theme.metrics.dimensions.md}
                />
              </ListItemStyled>
            </Link>
            <ListItemStyled
              pTop={0}
              pBottom={0}
              bgColorHover={theme.colors.ironLight}
              onClick={closeMenu}
            >
              <Button
                fontSize={theme.typography.fontSize.sm}
                fontWeight={theme.typography.fontWeight.bold}
                color={theme.colors.shark}
                variant="dark"
                size="default"
                title="Log Out"
                padding={1}
                textAlign="start"
                data-testid="buttonLogout"
                mLeft={theme.metrics.dimensions.md}
                onClick={handleLogout}
              />
            </ListItemStyled>
          </ListStyled>
        </ListItemStyled>
        <ListItemStyled bgColorHover={theme.colors.white}>
          <TextStyled textAlign="start" pLeft={theme.metrics.dimensions.base}>
            <LinkComponent
              bgColorHover={theme.colors.ironLight}
              padding={theme.metrics.dimensions.xs}
              href={PRIMARY_HEADER_URL.PRIVACY_POLICY.URL}
              onClick={closeMenu}
              text="Privacy Policy"
              display="inline"
              mLeft={theme.metrics.dimensions.tiny}
              fontSize={theme.typography.fontSize.xss}
              textAlign="left"
              fontFamily="AdobeCleanLight"
              letterSpacing={theme.typography.letterSpacing.xs}
              color={theme.colors.spanishGray}
            />
            <TextStyled color={theme.colors.spanishGray}>{` - `}</TextStyled>
            <LinkComponent
              onClick={closeMenu}
              href={PRIMARY_HEADER_URL.TERMS_OF_USE.URL}
              padding={theme.metrics.dimensions.xs}
              bgColorHover={theme.colors.ironLight}
              text="Terms of Use"
              display="inline"
              mLeft={theme.metrics.dimensions.tiny}
              fontSize={theme.typography.fontSize.xss}
              textAlign="left"
              fontFamily="AdobeCleanLight"
              letterSpacing={theme.typography.letterSpacing.xs}
              color={theme.colors.spanishGray}
            />
          </TextStyled>
        </ListItemStyled>
      </ListStyled>
    </BoxShadowAnimationStyled>
  )
}

export default memo(MenuProfile)
