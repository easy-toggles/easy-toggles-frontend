import React from 'react'
import { shallow } from 'enzyme'
import InputModal from '../../../../src/modal/components/InputModal'

describe('Footer Component', () => {
  let wrapper
  const onCloseMock = jest.fn()
  const onConfirmMock = jest.fn()

  beforeEach(() => {
    const props = {
      label: 'feature',
      value: 'value',
      open: true,
      onClose: onCloseMock,
      onConfirm: onConfirmMock
    }
    wrapper = shallow(<InputModal {...props} />)
  })

  test('renders label', () => {
    expect(wrapper.find('label').text()).toEqual('feature')
  })

  test('sets input value', () => {
    expect(wrapper.find('input').prop('defaultValue')).toEqual('value')
  })

  test('calls onClose if cancel button is clicked', () => {
    wrapper.find('.cancel-button').simulate('click')

    expect(onCloseMock).toBeCalledTimes(1)
  })
})
