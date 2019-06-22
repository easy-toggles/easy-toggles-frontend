import React from 'react'
import { shallow } from 'enzyme'
import Details from '../../../../src/details/components/Details'
import Feature from '../../../../src/details/containers/Feature'
import Empty from '../../../../src/components/empty/Empty'

describe('Details Component', () => {
  test('renders a list of feeatures', () => {
    const data = {
      someFeature: {
        enabled: true,
        rules: [],
        turnsOff: [],
        dependsOn: []
      }
    }

    const wrapper = shallow(<Details config={data} />)

    expect(wrapper.find(Feature).length).toBe(1)
  })

  test('renders a empty message it there is no feeature', () => {
    const data = {}

    const wrapper = shallow(<Details config={data} />)

    expect(wrapper.find(Empty).exists()).toBe(true)
  })
})
