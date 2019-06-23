import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Feature from '../../../../src/details/containers/Feature'
import { types as detailsTypes } from '../../../../src/details/detailsActions'
import { types as modalTypes } from '../../../../src/modal/modalActions'
import { InputModalActions } from '../../../../src/types/modal';

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

  test('dispatches edit feature action', () => {
    const expectedAction = {
      type: modalTypes.OPEN,
      payload: {
        content: {
          label: 'Edit feature',
          value: 'someFeature'
        },
        action: InputModalActions.EditFeature
      }
    }

    wrapper.props().onEdit('someFeature')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
