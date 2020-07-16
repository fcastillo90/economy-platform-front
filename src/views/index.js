/* Dependencies */
import React, { useMemo, useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainNavbar } from '@components/navigation'
import { ThemeProvider, createMuiTheme, Container } from '@material-ui/core'
import paletteConfig from '@utils/paletteConfig'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeContext } from '@utils/ThemeContext'
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
        <Router>
          <CssBaseline />
          <MainNavbar />
          <Container fixed style={{ paddingTop: 20 }}>
            <Switch>
              <Route path="/" component={PlatformRoutes} />
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default Components
