import React, { useEffect, useState, useCallback } from 'react'
import { useMediaQuery } from '@material-ui/core'

export const ThemeContext = React.createContext([{}, () => {}])

export const ThemeProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [darkModeThemeState, setDarkModeThemeState] = useState(false)
  const handleToggleTheme = () => setDarkModeThemeState((oldState) => !oldState)

  const handleInitTheme = useCallback(() => {
    setDarkModeThemeState(prefersDarkMode)
  }, [prefersDarkMode])
  useEffect(() => {
    handleInitTheme()
  }, [handleInitTheme])
  return (
    <ThemeContext.Provider
      value={{
        preferDarkMode: darkModeThemeState,
        toggleTheme: handleToggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
