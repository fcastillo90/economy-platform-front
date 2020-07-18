import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import About from './containers/About'
import Dashboard from './containers/Dashboard'
import Graphics from './containers/Graphics'
import Search from './containers/Search'
import PlatformRoutes from '.'

describe('Platform tests', () => {
  it('About renders without crashing', () => {
    shallow(<About />)
  })
  it('Dashboard renders without crashing', () => {
    shallow(<Dashboard />)
  })
  it('Graphics renders without crashing', () => {
    shallow(<Graphics />)
  })
  it('Search renders without crashing', () => {
    shallow(<Search />)
  })
  it('PlatformRoutes renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <PlatformRoutes />
      </MemoryRouter>,
    )
  })
})
