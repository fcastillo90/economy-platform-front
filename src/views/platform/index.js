/* React */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './containers/Main'

const PlatformRoutes = () => {
  return (
    <>
      <Switch>
        <Route component={Main} />
      </Switch>
    </>
  )
}

export default PlatformRoutes
