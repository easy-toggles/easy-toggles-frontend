import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Rules from '../../../../src/details/containers/Rules'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { types } from '../../../../src/details/detailsActions'

const mockStore = configureStore([asyncMiddleware])

describe('Rules Container', () => {
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
    wrapper = shallow(<Rules store={store} rules={[rule]} path={['feature']} />)
  })

  test('dispatches add rule action', () => {
    const path = ['feature']
    const expectedAction = {
      type: types.ADD_RULE,
      payload: { path }
    }

    wrapper.props().addRule(path)

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
