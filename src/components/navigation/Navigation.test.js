import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { MainNavbar } from '.'

describe('Navigation tests', () => {
  it('MainNavbar renders without crashing', () => {
    shallow(
      <MemoryRouter>
        <MainNavbar />
      </MemoryRouter>,
    )
  })
})
