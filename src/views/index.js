/* Dependencies */
import React, { useMemo, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainNavbar } from '@components/navigation'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import paletteConfig from '@utils/paletteConfig'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeContext } from '@src/utils/ThemeContext'
import PlatformRoutes from './platform'

const Components = () => {
  const { preferDarkMode } = useContext(ThemeContext)
  const theme = useMemo(
    () => createMuiTheme(preferDarkMode ? paletteConfig.darkTheme : paletteConfig.lightTheme),
    [preferDarkMode],
  )
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <MainNavbar />
          <Switch>
            <Route component={PlatformRoutes} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default Components
