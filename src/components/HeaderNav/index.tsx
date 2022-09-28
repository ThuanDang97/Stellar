import { FC, memo, useMemo, useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Props type
import {
  HeaderNavListProps,
  HeaderNavItemProps,
} from '@self-types/components/HeaderNav.props'

// Themes
import metrics from '@themes/Metrics'
import colors from '@themes/Colors'

// Utils
import { updateActiveNavItem } from '@utils/index'

// Components
import {
  ListItemStyled,
  ListStyled,
} from '@components/styled-components/ListStyled'
import { LinkStyled } from '@components/styled-components/LinkStyled'

const HeaderNav: FC<HeaderNavListProps> = ({ headerNavList, isMobile }) => {
  const router = useRouter()
  const { pathname } = router || {}

  const [currentPage, setCurrentPage] = useState(pathname)

  useEffect(() => {
    setCurrentPage(pathname)
  }, [pathname])

  // Handle change current page
  const handleChangeCurrentPage = useCallback((url: string) => {
    setCurrentPage(url)
  }, [])

  const listNavItemUpdate: HeaderNavItemProps[] = useMemo(
    () => updateActiveNavItem(currentPage, headerNavList),
    [currentPage, headerNavList],
  )

  return (
    <ListStyled flexDirection="row">
      {listNavItemUpdate.map((item: HeaderNavItemProps) => {
        const handleClickItem = () => handleChangeCurrentPage(item.name)
        return (
          <ListItemStyled
            key={item.id}
            bgColorHover="none"
            onClick={handleClickItem}
            data-testid={`item${item.id}`}
          >
            <Link href={item.url} passHref>
              <LinkStyled
                className={item.isActive ? 'active' : ''}
                color={colors.white}
                mLeft={isMobile ? 0 : metrics.dimensions.sm}
                mRight={metrics.dimensions.sm}
                data-testid={`${item.url}-${item.id}`}
              >
                {item.name}
              </LinkStyled>
            </Link>
          </ListItemStyled>
        )
      })}
    </ListStyled>
  )
}

export default memo(HeaderNav)
