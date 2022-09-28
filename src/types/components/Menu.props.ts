export interface MenuProps {
  imageUrl?: string
  fullName: string
  menuStatus?: string
  setMenuStatus: (active: string) => void
}
