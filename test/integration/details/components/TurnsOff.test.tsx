import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import TurnsOff from '../../../../src/details/components/TurnsOff'
import asyncMiddleware from '../../../../src/asyncMiddleware'

const mockStore = configureStore([asyncMiddleware])

describe('TurnsOff Component', () => {
  const addFeatureToTurnsOffStub = jest.fn()
  const rule = { pokemon: ['pikachu', 'psyduck'] }
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
    const props = {
      features: ['someFeature', 'otherFeature'],
      addFeatureToTurnsOff: addFeatureToTurnsOffStub
    }

    store = mockStore(state)
    wrapper = mount(
      <Provider store={store}>
        <TurnsOff {...props} />
      </Provider>
    )
  })

  test('calls add feature to turns off handler', () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click')

    expect(addFeatureToTurnsOffStub).toHaveBeenCalled()
  })
})
