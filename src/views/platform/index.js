/* React */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { URL_DASHBOARD, URL_GRAPHICS, URL_SEARCH } from '@constants/routes'
import Dashboard from './containers/Dashboard'
import Graphics from './containers/Graphics'
import Search from './containers/Search'

const PlatformRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path={URL_DASHBOARD.URL} component={Dashboard} />
        <Route exact path={URL_GRAPHICS.URL} component={Graphics} />
        <Route exact path={URL_SEARCH.URL} component={Search} />
      </Switch>
    </>
  )
}

export default PlatformRoutes
