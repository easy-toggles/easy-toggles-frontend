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
    wrapper = shallow(<Rule store={store} rule={rule} path={['feature', 0]} />)
  })

  test('dispatches delete criteria action', () => {
    const path = ['feature', 0, 'criteria']
    const expectedAction = {
      type: types.DELETE_CRITERIA,
      payload: { path }
    }

    wrapper.props().deleteCriteria(path)

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches add criteria action', () => {
    const path = ['feature', 0]
    const expectedAction = {
      type: types.ADD_CRITERIA,
      payload: { path }
    }

    wrapper.props().addCriteria(path)

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches delete rule action', () => {
    const path = ['feature', 0]
    const expectedAction = {
      type: types.DELETE_RULE,
      payload: { path }
    }

    wrapper.props().deleteRule(path)

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches update criteria values action', () => {
    const path = ['feature', 0, 'criteria']
    const values = ['value', 'other-value']
    const expectedAction = {
      type: types.UPDATE_CRITERIA_VALUES,
      payload: { path, values }
    }

    wrapper.props().updateCriteriaValues(path, values)

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
