/* React */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './containers/Main'

const DashboardRoutes = () => {
  return (
    <>
      <Switch>
        <Route component={Main} />
      </Switch>
    </>
  )
}

export default DashboardRoutes
