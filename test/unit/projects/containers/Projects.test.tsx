import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import Projects from '../../../../src/projects/containers/Projects'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { State } from '../../../../src/store'

const mockStore = configureStore([asyncMiddleware])

describe('Projects Container', () => {
  const state: State = {
    details: {
      name: 'Pikachu',
      config: {}
    },
    projects: {
      data: [{ name: 'Pikachu', id: 1 }]
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = shallow(<Projects store={store} />).dive()
  })

  test('maps state to props', () => {
    expect(wrapper.props().projects).toEqual([{ name: 'Pikachu', id: 1 }])
  })
})
