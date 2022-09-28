import React from 'react'

// Props Type
import { HeaderTypeProps } from '..'

export interface PageLayoutProps {
  children: React.ReactNode
  headerType?: HeaderTypeProps
  hasLoginBtn?: boolean
  hasArrow?: boolean
}
