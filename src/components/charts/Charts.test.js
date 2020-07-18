import React from 'react'
import { shallow } from 'enzyme'
import { LineChart } from '.'

const data = [
  {
    date: '13-03-2020',
    dolar: 852.06,
  },
  {
    date: '16-03-2020',
    dolar: 836.66,
  },
  {
    date: '17-03-2020',
    dolar: 850.51,
  },
  {
    date: '18-03-2020',
    dolar: 855.09,
  },
]
describe('Charts tests', () => {
  it('LineChart without props renders without crashing', () => {
    shallow(<LineChart />)
  })
  it('LineChart with props renders without crashing', () => {
    shallow(<LineChart data={data} keys="dolar" />)
  })
})
