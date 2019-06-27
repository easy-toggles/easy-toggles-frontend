import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import ReactModal from 'react-modal'
import configureStore from 'redux-mock-store'
import InputModal from '../../../../src/modal/components/InputModal'
import asyncMiddleware from '../../../../src/asyncMiddleware'

ReactModal.setAppElement('*')

const mockStore = configureStore([asyncMiddleware])

describe('InputModal Component', () => {
  const onCloseMock = jest.fn()
  const onConfirmMock = jest.fn()

  const state = {
    modal: {
      open: true,
      action: 'addFeature',
      content: {
        label: 'label',
        value: 'value'
      }
    }
  }

  let wrapper, store

  beforeEach(() => {
    const props = {
      label: 'feature',
      value: 'value',
      open: true,
      onClose: onCloseMock,
      onConfirm: onConfirmMock
    }

    store = mockStore(state)
    wrapper = mount(
      <Provider store={store}>
        <InputModal {...props} />
      </Provider>
    )
  })

  test('calls onClose handler if overlay is clicked', () => {
    wrapper.find('.input-modal-overlay').simulate('click')

    expect(onCloseMock).toHaveBeenCalled()
  })
})
