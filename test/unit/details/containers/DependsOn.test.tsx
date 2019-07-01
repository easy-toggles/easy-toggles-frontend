import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import DependsOn from '../../../../src/details/containers/DependsOn'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { types as detailsTypes } from '../../../../src/details/detailsActions'
import { types as modalTypes } from '../../../../src/modal/modalActions'
import * as optionsHelper from '../../../../src/libs/buildOptions'

const mockStore = configureStore([asyncMiddleware])

describe('DependsOn Container', () => {
  const state = {
    details: {
      config: {
        someFeature: {
          enabled: true,
          dependsOn: ['testFeature']
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
    wrapper = shallow(<DependsOn store={store} features={['testFeature']} />).dive()
  })

  test('dispatches add dependency action', () => {
    const expectedAction = {
      type: modalTypes.OPEN,
      payload: {
        title: 'Add dependency',
        action: detailsTypes.ADD_DEPENDENCY,
        fields: [{ name: 'name', label: 'Name', type: 'select', options }]
      }
    }

    wrapper.props().addDependency()

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches delete dependency action', () => {
    const expectedAction = {
      type: detailsTypes.DELETE_DEPENDENCY,
      payload: {
        name: 'pikachu'
      }
    }

    wrapper.props().deleteDependency('pikachu')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
