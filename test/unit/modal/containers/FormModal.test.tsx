import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import FormModal from '../../../../src/modal/containers/FormModal'
import asyncMiddleware from '../../../../src/asyncMiddleware'
import { types } from '../../../../src/modal/modalActions'

const mockStore = configureStore([asyncMiddleware])

describe('FormModal Container', () => {
  const fields = [{ name: 'name', label: 'Name', type: 'text' }]
  const state = {
    modal: {
      open: true,
      action: 'SOME_ACTION',
      title: 'title',
      fields
    },
    form: {
      formModal: {
        values: {
          name: 'newValue'
        }
      }
    }
  }

  let wrapper, store

  beforeEach(() => {
    store = mockStore(state)
    wrapper = shallow(<FormModal store={store} />).dive()
  })

  test('maps state to props', () => {
    expect(wrapper.props().open).toBe(true)
    expect(wrapper.props().title).toEqual('title')
    expect(wrapper.props().fields).toEqual(fields)
  })

  test('dispatches on close action', () => {
    const expectedAction = {
      type: types.CLOSE
    }

    wrapper.props().onClose()

    expect(store.getActions()[0]).toEqual(expectedAction)
  })

  test('dispatches custom action', () => {
    const expectedAction = {
      type: 'SOME_ACTION',
      payload: {
        fields: [{ name: 'name', label: 'Name', type: 'text'}],
        values: {
          name: 'newValue'
        }
      }
    }

    wrapper.props().onSubmit()

    expect(store.getActions()[0]).toEqual(expectedAction)
  })
})
