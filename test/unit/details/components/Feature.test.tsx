import React from 'react'
import { shallow } from 'enzyme'
import Feature from '../../../../src/details/components/Feature'
import Rules from '../../../../src/details/components/Rules'
import DependsOn from '../../../../src/details/components/DependsOn'
import TurnsOff from '../../../../src/details/components/TurnsOff'

describe('Feature Component', () => {
  let wrapper

  beforeEach(() => {
    const onChangeFeatureToggleMock = jest.fn()
    const data = {
      enabled: true,
      rules: [],
      turnsOff: ['someFeature'],
      dependsOn: ['otherFeature']
    }
    wrapper = shallow(<Feature feature={data} name="someFeature" onChangeFeatureToggle={onChangeFeatureToggleMock} />)
  })

  test('renders feature name', () => {
    expect(wrapper.find('h2').text()).toEqual('someFeature')
  })

  test('renders Rules component', () => {
    expect(wrapper.find(Rules).exists()).toBe(true)
    expect(wrapper.find(Rules).prop('rules')).toEqual([])
  })

  test('renders DependsOn component', () => {
    expect(wrapper.find(DependsOn).exists()).toBe(true)
    expect(wrapper.find(DependsOn).prop('features')).toEqual(['otherFeature'])
  })

  test('renders TurnsOff component', () => {
    expect(wrapper.find(TurnsOff).exists()).toBe(true)
    expect(wrapper.find(TurnsOff).prop('features')).toEqual(['someFeature'])
  })
})
