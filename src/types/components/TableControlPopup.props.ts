export interface TableControlPopupProps {
  idItem: string
  nameTable?: string
  handleEditTable?: (id: string) => void
  handleDeleteTable: (id: string) => void
}
