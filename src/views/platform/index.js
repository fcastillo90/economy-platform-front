/* React */
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { URL_DASHBOARD, URL_GRAPHICS, URL_SEARCH, URL_ABOUT } from '@constants/routes'

const Dashboard = React.lazy(() => import('./containers/Dashboard'))
const Graphics = React.lazy(() => import('./containers/Graphics'))
const Search = React.lazy(() => import('./containers/Search'))
const About = React.lazy(() => import('./containers/About'))

const PlatformRoutes = () => {
  return (
    <Suspense fallback="loading....">
      <Switch>
        <Route exact path={URL_DASHBOARD.url} component={Dashboard} />
        <Route exact path={URL_SEARCH.url} component={Search} />
        <Route exact path={URL_GRAPHICS.url} component={Graphics} />
        <Route exact path={URL_ABOUT.url} component={About} />
      </Switch>
    </Suspense>
  )
}

export default PlatformRoutes
