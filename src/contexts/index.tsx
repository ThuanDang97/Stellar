// Contexts
import { AuthProvider } from '@contexts/AuthProvider'
import { LoadingProvider } from '@contexts/LoadingProvider'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </AuthProvider>
  )
}

export default AppProvider
