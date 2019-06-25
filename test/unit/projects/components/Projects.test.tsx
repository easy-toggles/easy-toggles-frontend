import React from 'react'
import { shallow } from 'enzyme'
import Projects from '../../../../src/projects/components/Projects'

describe('Projects Component', () => {
  const addProjectMock = jest.fn()
  let wrapper

  beforeEach(() => {
    const projects = [{ id: 1, name: 'Pikachu' }]
    const props = {
      projects,
      addProject: addProjectMock
    }
    wrapper = shallow(<Projects {...props} />)
  })

  test('renders a list of projects', () => {
    expect(wrapper.find('li').length).toBe(1)
  })

  test('calls add project handler', () => {
    wrapper.find('.add-project-button').simulate('click')

    expect(addProjectMock).toHaveBeenCalled()
  })
})
