import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import Footer from '../../../../src/list/containers/Footer'
import { types } from '../../../../src/details/detailsActions'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { State } from '../../../../src/store'

const mockStore = configureStore([asyncMiddleware])

describe('Footer Container', () => {
  const state: State = { 
    details: {
      id: 1, 
      name: 'Pikachu',
      config: {}
    },
    list: {
      applications: [
        { name: 'Pikachu', id: 1 }
      ]
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = mount(<Footer store={store} />)
  })

  test('dispatches start publish action', () => {
    const expectedAction = {
      type: types.START_PUBLISH
    }

    wrapper.find('.publish-button').simulate('click')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
