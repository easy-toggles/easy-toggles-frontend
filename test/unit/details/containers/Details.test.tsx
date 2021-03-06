import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Details from '../../../../src/details/containers/Details'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { types as detailsTypes } from '../../../../src/details/detailsActions'
import { types as modalTypes } from '../../../../src/modal/modalActions'

const mockStore = configureStore([asyncMiddleware])

describe('Details Container', () => {
  const state = {
    details: {
      config: {}
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = shallow(<Details store={store} />).dive()
  })

  test('maps config to props', () => {
    expect(wrapper.find('Details').prop('config')).toEqual({})
  })

  test('dispatches load application details action', () => {
    const expectedAction = {
      type: detailsTypes.LOAD_CONFIG.REQUEST,
      meta: {
        id: 3,
        method: 'get',
        url: 'api/applications/3'
      },
      payload: null
    }

    wrapper.props().loadApplication(3)

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches add feature action', () => {
    const expectedAction = {
      type: modalTypes.OPEN,
      payload: {
        title: 'Add feature',
        action: detailsTypes.ADD_FEATURE,
        fields: [
          { name: 'name', label: 'Name', type: 'text' }
        ]
      }
    }

    wrapper.props().addFeature('someFeature')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches start publish action', () => {
    const expectedAction = {
      type: detailsTypes.START_PUBLISH,
      payload: { id: 3 }
    }

    wrapper.props().publish(3)

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
