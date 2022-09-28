import { Cache } from 'swr'

export interface CacheSWRProps extends Cache {
  clear: () => void
}
