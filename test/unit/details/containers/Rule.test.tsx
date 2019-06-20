import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Rule from '../../../../src/details/containers/Rule'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { types } from '../../../../src/details/detailsActions'

const mockStore = configureStore([asyncMiddleware])

describe('Details Container', () => {
  const rule = { criteria: ['value'] }
  const state = {
    details: {
      config: {
        feature: {
          rules: [rule]
        }
      }
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = shallow(<Rule store={store} rule={rule} path={['feature', 0]}/>).dive()
  })

  test('dispatches delete criteria action', () => {
    const expectedAction = {
      type: types.DELETE_CRITERIA,
      payload: {
        path: ['feature', 0, 'criteria']
      }
    }

    wrapper.find('Delete').simulate('click')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches add criteria action', () => {
    const expectedAction = {
      type: types.ADD_CRITERIA,
      payload: {
        path: ['feature', 0]
      }
    }

    wrapper.find('.add-criteria-button').simulate('click')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches delete rule action', () => {
    const expectedAction = {
      type: types.DELETE_RULE,
      payload: {
        path: ['feature', 0]
      }
    }

    wrapper.find('.delete-rule-button').simulate('click')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
