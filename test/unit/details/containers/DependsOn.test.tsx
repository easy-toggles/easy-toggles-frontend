import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import DependsOn from '../../../../src/details/containers/DependsOn'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { types as detailsTypes } from '../../../../src/details/detailsActions'
import { types as modalTypes } from '../../../../src/modal/modalActions'

const mockStore = configureStore([asyncMiddleware])

describe('DependsOn Container', () => {
  const state = {
    details: {
      config: {
        someFeature: {
          enabled: true
        },
        otherFeature: {
          enabled: true
        }
      },
      current: 'someFeature'
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = shallow(<DependsOn store={store} />).dive()
  })

  test('dispatches add dependency action', () => {
    const expectedAction = {
      type: modalTypes.OPEN,
      payload: {
        title: 'Add dependency',
        action: detailsTypes.ADD_DEPENDENCY,
        fields: [
          {
            name: 'name',
            label: 'Name',
            type: 'select',
            options: [
              { label: '', value: '' },
              { label: 'otherFeature', value: 'otherFeature' }
            ]
          }
        ]
      }
    }

    wrapper.props().addDependency()

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
