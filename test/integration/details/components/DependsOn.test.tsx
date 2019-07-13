import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import DependsOn from '../../../../src/details/components/DependsOn'
import asyncMiddleware from '../../../../src/asyncMiddleware'

const mockStore = configureStore([asyncMiddleware])

describe('DependsOn Component', () => {
  const addDependencyStub = jest.fn()
  const deleteDependencyStub = jest.fn()
  
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
      addDependency: addDependencyStub,
      deleteDependency: deleteDependencyStub
    }

    store = mockStore(state)
    wrapper = mount(
      <Provider store={store}>
        <DependsOn {...props} />
      </Provider>
    )
  })

  test('calls add dependency handler', () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click')

    expect(addDependencyStub).toHaveBeenCalled()
  })
})
