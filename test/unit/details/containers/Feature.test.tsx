import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Feature from '../../../../src/details/containers/Feature'
import { types as detailsTypes } from '../../../../src/details/detailsActions'
import { types as modalTypes } from '../../../../src/modal/modalActions'

const mockStore = configureStore()

describe('Feature Container', () => {
  const someFeature = { enabled: true, rules: [], dependsOn: [], turnsOff: [] }
  let store, wrapper

  beforeEach(() => {
    const state = { details: { config: { someFeature } }, current: 'someFeature' }
    store = mockStore(state)
    wrapper = shallow(<Feature store={store} name="someFeature" feature={someFeature} />).dive()
  })

  test('dispatches toggle feature action', () => {
    const expectedAction = {
      type: detailsTypes.TOGGLE_FEATURE,
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
      type: detailsTypes.DELETE_FEATURE,
      payload: {
        path: ['someFeature']
      }
    }

    wrapper.props().onDelete('someFeature')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches change feature action', () => {
    const expectedAction = {
      type: detailsTypes.CHANGE_FEATURE,
      payload: {
        name: 'someFeature'
      }
    }

    wrapper.props().onChange('someFeature')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches edit feature action', () => {
    const expectedAction = {
      type: modalTypes.OPEN,
      payload: {
        title: 'Edit feature',
        fields: [{ name: 'name', label: 'Name', type: 'text', value: 'someFeature' }],
        action: detailsTypes.RENAME_FEATURE
      }
    }

    wrapper.props().onEdit('someFeature')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
