import React from 'react'
import { shallow } from 'enzyme'
import Projects from '../../../../src/projects/components/Projects'

describe('Projects Component', () => {
  let wrapper

  beforeEach(() => {
    const projects = [{ id: 1, name: 'Pikachu' }]
    const props = {
      projects
    }
    wrapper = shallow(<Projects {...props} />)
  })

  test('renders a list of projects', () => {
    expect(wrapper.find('li').length).toBe(1)
  })
})
