'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Using suppressHydrationWarning to avoid the hydration mismatch error
  // This is a safe approach since theme handling inherently has different server/client states
  return (
    <NextThemesProvider {...props} enableSystem={true} enableColorScheme={true}>
      {children}
    </NextThemesProvider>
  )
}
