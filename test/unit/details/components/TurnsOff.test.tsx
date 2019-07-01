import React from 'react'
import { shallow } from 'enzyme'
import TurnsOff from '../../../../src/details/components/TurnsOff'

describe('TurnsOff Component', () => {
  const addFeatureToTurnsOffStub = jest.fn()
  const deleteFeatureToTurnsOffStub = jest.fn()

  let wrapper

  beforeEach(() => {
    const props = {
      features: ['someFeature', 'otherFeature'],
      addFeatureToTurnsOff: addFeatureToTurnsOffStub,
      deleteFeatureToTurnsOff: deleteFeatureToTurnsOffStub
    }

    wrapper = shallow(<TurnsOff {...props} />)
  })

  test('renders a list of features', () => {
    expect(wrapper.find('tr').length).toBe(2)
  })

  test('calls delete feature to turns off handler', () => {
    wrapper.find('IconButton').at(0).simulate('click')

    expect(deleteFeatureToTurnsOffStub).toHaveBeenCalledWith('someFeature')
  }) 
})
