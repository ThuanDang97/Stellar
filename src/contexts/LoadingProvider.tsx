import React, { createContext, useMemo, useState } from 'react'

// Types
import { ILoadingContext } from '@self-types/contexts/LoadingContext'

export const LoadingContext = createContext<ILoadingContext>({
  loading: false,
  setLoading: () => undefined,
})

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [loading, setLoading] = useState(false)

  const value = useMemo(
    () => ({
      loading,
      setLoading: (isLoading: boolean) => setLoading(isLoading),
    }),
    [loading],
  )

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  )
}
