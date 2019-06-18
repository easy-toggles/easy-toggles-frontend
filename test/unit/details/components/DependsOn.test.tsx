import React from 'react'
import { shallow } from 'enzyme'
import DependsOn from '../../../../src/details/components/DependsOn'

describe('DependsOn Component', () => {
  let wrapper
  beforeEach(() => {
    const data = [ 'someFeature', 'otherFeature' ]

    wrapper = shallow(<DependsOn features={data} />)
  })

  test('renders a list of features', () => {
    expect(wrapper.find('tr').length).toBe(2)
  })
})
