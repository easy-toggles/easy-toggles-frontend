import React from 'react'
import { shallow } from 'enzyme'
import FormModal from '../../../../src/modal/components/FormModal'

describe('FormModal Component', () => {
  let wrapper
  const onCloseStub = jest.fn()
  const onSubmitStub = jest.fn()

  beforeEach(() => {
    const props = {
      title: 'feature',
      fields: [{ name: 'name', label: 'label', type: 'text' }],
      open: true,
      onClose: onCloseStub,
      onSubmit: onSubmitStub
    }
    wrapper = shallow(<FormModal {...props} />)
  })

  test('renders title', () => {
    expect(wrapper.find('h4').text()).toEqual('feature')
  })

  test('renders fields', () => {
    expect(wrapper.find('Field').props().name).toEqual('name')
  })

  test('calls onClose if cancel button is clicked', () => {
    wrapper.find('.cancel-button').simulate('click')

    expect(onCloseStub).toBeCalledTimes(1)
  })

  test('calls onSubmit handler', () => {
    wrapper.find('form').simulate('submit')

    expect(onSubmitStub).toHaveBeenCalled()
  })
})
