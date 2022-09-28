import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/themes'
import '../styles/reset.css'
import '../styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const themeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)

export const decorators = [themeDecorator]
