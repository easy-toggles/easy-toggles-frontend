import React from 'react'
import { shallow } from 'enzyme'
import TurnsOff from '../../../../src/details/components/TurnsOff'

describe('TurnsOff Component', () => {
  let wrapper
  beforeEach(() => {
    const data = ['someFeature', 'otherFeature']

    wrapper = shallow(<TurnsOff features={data} />)
  })

  test('renders a list of features', () => {
    expect(wrapper.find('tr').length).toBe(2)
  })
})
