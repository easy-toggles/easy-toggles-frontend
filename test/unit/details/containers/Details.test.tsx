import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import Details from '../../../../src/details/containers/Details'
import { types } from '../../../../src/details/detailsActions'
import asyncMiddleware from '../../../../src/asyncMiddleware'

const mockStore = configureStore([asyncMiddleware])

describe('Details Container', () => {
  const state = { details: { config: {} } }
  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = mount(<Details store={store} />)
  })

  test('maps config to props', () => {
    expect(wrapper.find('Details').prop('config')).toEqual({})
  })

  test('dispatches loadConfig action', () => {
    const expectedAction = {
      type: types.LOAD_CONFIG.REQUEST,
      payload: {},
      meta: {
        id: '5680529164730368',
        url: 'api/application/5680529164730368',
        method: 'get'
      }
    }

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches publish action', () => {
    const expectedAction = {
      type: types.PUBLISH.REQUEST,
      payload: {
        config: {}
      },
      meta: {
        id: '5680529164730368',
        url: 'api/application/5680529164730368',
        method: 'patch'
      }
    }

    wrapper.find('.publish-button').simulate('click')

    expect(store.getActions()[2]).toEqual(expectedAction)
  })
})
