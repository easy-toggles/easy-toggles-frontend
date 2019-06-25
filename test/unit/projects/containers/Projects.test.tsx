import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Projects from '../../../../src/projects/containers/Projects'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { State } from '../../../../src/store'
import { types as modalTypes } from '../../../../src/modal/modalActions'
import { types as projectsTypes } from '../../../../src/projects/projectsActions'

const mockStore = configureStore([asyncMiddleware])

describe('Projects Container', () => {
  const state: State = {
    details: {
      name: 'Pikachu',
      config: {}
    },
    projects: {
      data: [{ name: 'Pikachu', id: 1 }]
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = shallow(<Projects store={store} />).dive()
  })

  test('maps state to props', () => {
    expect(wrapper.props().projects).toEqual([{ name: 'Pikachu', id: 1 }])
  })


  test('dispatches start add project action', () => {
    const expectedAction = {
      type: modalTypes.OPEN,
      payload: {
        content: {
          label: 'Add project'
        },
        action: projectsTypes.START_ADD
      }
    }

    wrapper.props().addProject()

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

})
