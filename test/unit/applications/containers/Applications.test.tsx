import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Applications from '../../../../src/applications/containers/Applications'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { State } from '../../../../src/store'
import { types as modalTypes } from '../../../../src/modal/modalActions'
import { types as applicationsTypes } from '../../../../src/applications/applicationsActions'

const mockStore = configureStore([asyncMiddleware])

describe('Applications Container', () => {
  const state: State = {
    details: {
      name: 'Pikachu',
      config: {}
    },
    applications: {
      data: [{ name: 'Pikachu', id: 1 }]
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = shallow(<Applications store={store} />).dive()
  })

  test('maps state to props', () => {
    expect(wrapper.props().applications).toEqual([{ name: 'Pikachu', id: 1 }])
  })


  test('dispatches start add application action', () => {
    const expectedAction = {
      type: modalTypes.OPEN,
      payload: {
        title: 'Add application',
        fields: [{ name: 'name', label: 'Name', type: 'text' }],
        action: applicationsTypes.START_ADD
      }
    }

    wrapper.props().addApplication()

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

})
