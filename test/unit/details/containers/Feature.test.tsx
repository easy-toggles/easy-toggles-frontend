import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Feature from '../../../../src/details/containers/Feature'
import { types } from '../../../../src/details/detailsActions'
import Switch from '../../../../src/components/switch/Switch'

const mockStore = configureStore()

describe('Feature Container', () => {
  test('dispatches changeFeature action', () => {
    const someFeature = { enabled: true, rules: [], dependsOn: [], turnsOff: [] }
    const state = { details: { config: { someFeature } } }
    const store = mockStore(state)
    const wrapper = shallow(<Feature store={store} name="someFeature" feature={someFeature} />).dive()
    const expectedAction = {
      type: types.CHANGE_FEATURE,
      payload: {
        path: ['someFeature'],
        data: someFeature
      }
    }

    wrapper.find(Switch).simulate('change', { target: { checked: true } })

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
