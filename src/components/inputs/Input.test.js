import React from 'react'
import { shallow } from 'enzyme'
import { SearchInput } from '.'

describe('Input tests', () => {
  it('SearchInput renders without crashing', () => {
    shallow(
      <SearchInput
        options={[]}
        keysSelected={[]}
        onSearch={() => {}}
        onDeleteSelected={() => {}}
      />,
    )
  })
})
