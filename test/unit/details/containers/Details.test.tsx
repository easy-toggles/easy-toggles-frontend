import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Details from '../../../../src/details/containers/Details'
import asyncMiddleware from '../../../../src/asyncMiddleware'

const mockStore = configureStore([asyncMiddleware])

describe('Details Container', () => {
  const state = {
    details: {
      config: {}
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = shallow(<Details store={store} />).dive()
  })

  test('maps config to props', () => {
    expect(wrapper.find('Details').prop('config')).toEqual({})
  })
})
