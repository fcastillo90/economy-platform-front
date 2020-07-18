import React from 'react'
import { shallow } from 'enzyme'
import Components from '.'

describe('Views tests', () => {
  it('Components renders without crashing', () => {
    shallow(<Components />)
  })
})
