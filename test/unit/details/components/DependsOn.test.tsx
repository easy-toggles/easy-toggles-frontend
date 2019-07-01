import React from 'react'
import { shallow } from 'enzyme'
import DependsOn from '../../../../src/details/components/DependsOn'

describe('DependsOn Component', () => {
  const addDependencyStub = jest.fn()
  const deleteDependencyStub = jest.fn()

  let wrapper

  beforeEach(() => {
    const props = {
      features: ['someFeature', 'otherFeature'], 
      deleteDependency: deleteDependencyStub,
      addDependency: addDependencyStub
    }

    wrapper = shallow(<DependsOn {...props} />)
  })

  test('renders a list of features', () => {
    expect(wrapper.find('tr').length).toBe(2)
  })

  test('calls delete dependency handler', () => {
    wrapper.find('IconButton').at(0).simulate('click')

    expect(deleteDependencyStub).toHaveBeenCalledWith('someFeature')
  })
})
