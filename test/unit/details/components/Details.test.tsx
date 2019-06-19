import React from 'react'
import { shallow } from 'enzyme'
import Details from '../../../../src/details/components/Details'
import Feature from '../../../../src/details/containers/Feature'

describe('Details Component', () => {
  const data = {
    someFeature: {
      enabled: true,
      rules: [],
      turnsOff: [],
      dependsOn: []
    }
  }
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Details config={data} />)
  })

  test('renders a list of feeatures', () => {
    expect(wrapper.find(Feature).length).toBe(1)
  })
})
