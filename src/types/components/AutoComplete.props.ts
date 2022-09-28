export type EventProps = {
  target: {
    value?: string
  }
}

export interface AutoCompleteProps {
  billerItem: string
  setBillerItem: (active: string) => void
}
