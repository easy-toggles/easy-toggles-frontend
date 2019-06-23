import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Feature from '../../../../src/details/containers/Feature'
import { types } from '../../../../src/details/detailsActions'
import Switch from '../../../../src/components/switch/Switch'

const mockStore = configureStore()

describe('Feature Container', () => {
  const someFeature = { enabled: true, rules: [], dependsOn: [], turnsOff: [] }
  let store, wrapper

  beforeEach(() => {
    const state = { details: { config: { someFeature } } }
    store = mockStore(state)
    wrapper = shallow(<Feature store={store} name="someFeature" feature={someFeature} />)
  })

  test('dispatches toggle feature action', () => {
    const expectedAction = {
      type: types.TOGGLE_FEATURE,
      payload: {
        path: ['someFeature'],
        data: someFeature
      }
    }

    wrapper.props().onToggle('someFeature', someFeature)

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches delete feature action', () => {
    const expectedAction = {
      type: types.DELETE_FEATURE,
      payload: {
        path: ['someFeature']
      }
    }

    wrapper.props().onDelete('someFeature')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
