import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import Rules from '../../../../src/details/components/Rules'
import asyncMiddleware from '../../../../src/asyncMiddleware'

const mockStore = configureStore([asyncMiddleware])

describe('Rules Component', () => {
  const addRuleMock = jest.fn()
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
      rules: [rule],
      path: ['feature'],
      addRule: addRuleMock
    }

    store = mockStore(state)
    wrapper = mount(
      <Provider store={store}>
        <Rules {...props} />
      </Provider>
    )
  })

  test('calls add rule handler', () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click')

    expect(addRuleMock).toHaveBeenCalledWith(['feature'])
  })
})
