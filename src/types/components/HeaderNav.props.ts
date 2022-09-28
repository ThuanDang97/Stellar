export interface HeaderNavItemProps {
  id: string
  name: string
  url: string
  isActive?: boolean
}

export interface HeaderNavListProps {
  headerNavList: HeaderNavItemProps[]
  isMobile?: boolean
}
