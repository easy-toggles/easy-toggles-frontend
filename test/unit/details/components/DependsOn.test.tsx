import React from 'react'
import { shallow } from 'enzyme'
import DependsOn from '../../../../src/details/components/DependsOn'

describe('DependsOn Component', () => {
  const addDependencyStub = jest.fn()

  let wrapper

  beforeEach(() => {
    const data = ['someFeature', 'otherFeature']

    wrapper = shallow(<DependsOn features={data} addDependency={addDependencyStub} />)
  })

  test('renders a list of features', () => {
    expect(wrapper.find('tr').length).toBe(2)
  })
})
