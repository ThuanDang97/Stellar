import { ThemeProvider } from 'styled-components'
import { render } from '@testing-library/react'
import { theme } from '@themes/index'

export const renderWithTheme = (component: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>)
}
