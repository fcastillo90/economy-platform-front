import React from 'react'
import { shallow } from 'enzyme'
import { Navbar } from '.'

describe('Navbar tests', () => {
  it('Navbar renders without crashing', () => {
    shallow(<Navbar title="TEST" />)
  })
})
