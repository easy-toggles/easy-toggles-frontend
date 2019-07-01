import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import TurnsOff from '../../../../src/details/containers/TurnsOff'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { types as detailsTypes } from '../../../../src/details/detailsActions'
import { types as modalTypes } from '../../../../src/modal/modalActions'
import * as optionsHelper from '../../../../src/libs/buildOptions'

const mockStore = configureStore([asyncMiddleware])

describe('TurnsOff Container', () => {
  const state = {
    details: {
      config: {
        someFeature: {
          enabled: true,
          turnsOff: ['testFeature']
        },
        otherFeature: {
          enabled: true
        },
        testFeature: {
          enabled: true
        }
      },
      current: 'someFeature'
    }
  }
  const options = [{ label: '', value: '' }, { label: 'otherFeatures', value: 'otherFeature' }]

  let wrapper, store

  beforeEach(() => {
    jest.spyOn(optionsHelper, 'buildOptions').mockImplementation(() => options)

    store = mockStore(state)
    wrapper = shallow(<TurnsOff store={store} features={['testFeature']} />).dive()
  })

  test('dispatches add feature to turns off action', () => {
    const expectedAction = {
      type: modalTypes.OPEN,
      payload: {
        title: 'Add feature to turns off',
        action: detailsTypes.ADD_FEATURE_TO_TURNS_OFF,
        fields: [{ name: 'name', label: 'Name', type: 'select', options }]
      }
    }

    wrapper.props().addFeatureToTurnsOff()

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches delete feature to turns off action', () => {
    const expectedAction = {
      type: detailsTypes.DELETE_FEATURE_TO_TURNS_OFF,
      payload: {
        name: 'someFeature'
      }
    }

    wrapper.props().deleteFeatureToTurnsOff('someFeature')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
