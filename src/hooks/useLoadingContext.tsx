import { useContext } from 'react'

// Contexts
import { LoadingContext } from '@contexts/LoadingProvider'

export const useLoadingContext = () => {
  const loadingContext = useContext(LoadingContext)

  return loadingContext
}
