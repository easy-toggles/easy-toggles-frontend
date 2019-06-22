import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import InputModal from '../../../../src/modal/containers/InputModal'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { types } from '../../../../src/modal/modalActions'

const mockStore = configureStore([asyncMiddleware])

describe('InputModal Container', () => {
  const onCloseMock = jest.fn()
  const onConfirmMock = jest.fn()

  const state = {
    modal: {
      open: true,
      action: 'addFeature',
      content: {
        label: 'label'
      }
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = shallow(<InputModal store={store} />).dive()
  })

  test('maps state to props', () => {
    expect(wrapper.props().open).toBe(true)
    expect(wrapper.props().label).toEqual('label')
  })

  test('dispatches on close action', () => {
    const expectedAction = {
      type: types.CLOSE
    }

    wrapper.props().onClose()

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches on confirm action', () => {
    const expectedAction = {
      type: types.CONFIRM,
      payload: {
        action: 'addFeature',
        label: 'label',
        value: 'newValue'
      }
    }

    wrapper.props().onConfirm('newValue')

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

})
