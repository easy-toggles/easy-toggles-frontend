import React from 'react'
import { shallow } from 'enzyme'
import Applications from '../../../../src/applications/components/Applications'

describe('Applications Component', () => {
  const addApplicationStub = jest.fn()
  let wrapper

  beforeEach(() => {
    const applications = [{ id: 1, name: 'Pikachu' }]
    const props = {
      applications,
      addApplication: addApplicationStub
    }
    wrapper = shallow(<Applications {...props} />)
  })

  test('renders a list of applications', () => {
    expect(wrapper.find('li').length).toBe(1)
  })

  test('calls add application handler', () => {
    wrapper.find('.add-application-button').simulate('click')

    expect(addApplicationStub).toHaveBeenCalled()
  })
})
