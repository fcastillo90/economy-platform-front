import React from 'react'
import { shallow } from 'enzyme'
import { InfoCard } from '.'

const cardsTestProps = {
  key: 'cobre',
  name: 'Precio del Cobre, dólares por libra',
  unit: 'dolar',
  date: 1584489600,
  value: 2.39,
}

describe('Cards tests', () => {
  it('InfoCard renders without crashing', () => {
    shallow(<InfoCard infoObject={cardsTestProps} noWrap />)
  })
})
