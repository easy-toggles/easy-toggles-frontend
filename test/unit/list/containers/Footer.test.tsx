import React from 'react'
import configureStore from 'redux-mock-store'
import { mount } from 'enzyme'
import Footer from '../../../../src/list/containers/Footer'
import { types as detailsTypes } from '../../../../src/details/detailsActions'
import { types as listTypes } from '../../../../src/list/listActions'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { State } from '../../../../src/store'

const mockStore = configureStore([asyncMiddleware])

describe('Footer Container', () => {
  const state: State = { 
    details: {
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

  test('dispatches change application action', () => {
    const expectedAction = {
      type: listTypes.CHANGE_APPLICATION,
      payload: {
        id: 1
      }
    }
  
    wrapper.find('select').simulate('change', { target: { value: 1 } })

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches start publish action', () => {
    const expectedAction = {
      type: detailsTypes.START_PUBLISH,
      payload: {
        id: 1
      }
    }
  
    wrapper.find('select').simulate('change', { target: { value: 1 } })
    wrapper.find('.publish-button').simulate('click')

    expect(store.getActions()[1]).toEqual(expectedAction)
  })
})
