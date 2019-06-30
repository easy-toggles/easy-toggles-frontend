import React from 'react'
import { Provider } from 'react-redux'
import { reduxForm } from 'redux-form'
import ReactModal from 'react-modal'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import FormModal from '../../../../src/modal/components/FormModal'
import asyncMiddleware from '../../../../src/asyncMiddleware'

ReactModal.setAppElement('*')
const mockStore = configureStore([asyncMiddleware])

describe('FormModal Component', () => {
  const onCloseMock = jest.fn()
  const onConfirmMock = jest.fn()

  const fields = [{ name: 'name', label: 'lavel', type: 'text' }]
  const state = {
    modal: {
      open: true,
      action: 'addFeature',
      title: 'title',
      fields
    }
  }

  let wrapper, store

  beforeEach(() => {
    const props = {
      title: 'title',
      fields,
      open: true,
      onClose: onCloseMock,
      onSubmit: onConfirmMock
    }

    store = mockStore(state)
    const DecoratedForm = reduxForm({ form: 'testForm' })(FormModal)
    wrapper = mount(
      <Provider store={store}>
        <DecoratedForm {...props} />
      </Provider>
    )
  })

  test('calls onClose handler if overlay is clicked', () => {
    wrapper.find('.input-modal-overlay').simulate('click')

    expect(onCloseMock).toHaveBeenCalled()
  })
})
