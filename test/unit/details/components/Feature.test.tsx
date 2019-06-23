import React from 'react'
import { shallow } from 'enzyme'
import Feature from '../../../../src/details/components/Feature'
import Rules from '../../../../src/details/containers/Rules'
import DependsOn from '../../../../src/details/components/DependsOn'
import TurnsOff from '../../../../src/details/components/TurnsOff'
import Switch from '../../../../src/components/switch/Switch'

describe('Feature Component', () => {
  const onToggleMock = jest.fn()
  const onDeleteMock = jest.fn()
  const feature = {
    enabled: true,
    rules: [],
    turnsOff: ['someFeature'],
    dependsOn: ['otherFeature']
  }

  let wrapper

  beforeEach(() => {
    const props = {
      feature,
      name: 'someFeature',
      onToggle: onToggleMock,
      onDelete: onDeleteMock
    }

    wrapper = shallow(<Feature {...props} />)
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

  test('calls on toggle handler', () => {
    wrapper.find(Switch).simulate('change', { target: { checked: true } })

    expect(onToggleMock).toHaveBeenCalledWith('someFeature', {...feature, enabled: true })
  })

  test('calls on delete handler', () => {
    wrapper.find('IconButton').at(1).simulate('click')

    expect(onDeleteMock).toHaveBeenCalledWith('someFeature')
  })
})
