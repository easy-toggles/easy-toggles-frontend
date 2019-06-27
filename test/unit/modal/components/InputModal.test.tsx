import React from 'react'
import { shallow } from 'enzyme'
import InputModal from '../../../../src/modal/components/InputModal'

describe('InputModal Component', () => {
  let wrapper
  const onCloseStub = jest.fn()
  const onConfirmStub = jest.fn()

  beforeEach(() => {
    const props = {
      label: 'feature',
      value: 'value',
      open: true,
      onClose: onCloseStub,
      onConfirm: onConfirmStub
    }
    wrapper = shallow(<InputModal {...props} />)
  })

  test('sets initial value', () => {
    wrapper.setProps({ value: 'pikachu' })

    expect(wrapper.find('Autocomplete').prop('value')).toEqual('pikachu')
  })

  test('renders label', () => {
    wrapper.setProps({ value: 'pikachu' })
    
    expect(wrapper.find('label').text()).toEqual('feature')
  })

  test('calls onClose if cancel button is clicked', () => {
    wrapper.find('.cancel-button').simulate('click')

    expect(onCloseStub).toBeCalledTimes(1)
  })

  test('calls onConfirm handler', () => {
    wrapper.setProps({ value: 'pikachu' })

    wrapper.find('.confirm-button').simulate('click')

    expect(onConfirmStub).toHaveBeenCalledWith('pikachu')
  })
})
