import React, { useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'

export const ThemeContext = React.createContext([{}, () => {}])

export const ThemeProvider = ({ children }) => {
  const [darkModeThemeState, setDarkModeThemeState] = useState(false)
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const handleToggleTheme = () => setDarkModeThemeState((oldState) => !oldState)
  useEffect(() => {
    setDarkModeThemeState(prefersDarkMode)
  }, [prefersDarkMode])
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
