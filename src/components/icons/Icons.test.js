import React from 'react'
import { shallow } from 'enzyme'
import { ReactLogo } from '.'

describe('Icons tests', () => {
  it('ReactLogo renders without crashing', () => {
    shallow(<ReactLogo />)
  })
})
