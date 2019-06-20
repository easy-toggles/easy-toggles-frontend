import React from 'react'
import { shallow } from 'enzyme'
import EditableText from '../../../../src/components/editableText/EditableText'

describe('EditableText Component', () => {
  const onFocusMock = jest.fn()
  const onFocusOutMock = jest.fn()
  let wrapper

  beforeEach(() => {
    const props = {
      text: 'text',
      onFocus: onFocusMock,
      onFocusOut: onFocusOutMock
    }

    wrapper = shallow(<EditableText {...props} />)
  })

  test('sets text as value', () => {
    expect(wrapper.find('label').text()).toEqual('text')
  })

  test('enters in edit mode', () => {
    wrapper.find('label').simulate('click')

    expect(wrapper.find('input').prop('value')).toEqual('text')
    expect(onFocusMock).toHaveBeenCalled()
  })

  test('leaves edit mode when enter key is pressed', () => {
    wrapper.find('label').simulate('click')
    wrapper.find('input').simulate('keyup', { keyCode: 13 })

    expect(wrapper.find('input').exists()).toBe(false)
    expect(onFocusOutMock).toHaveBeenCalled()
  })

  test('leaves edit mode when input loses focus', () => {
    wrapper.find('label').simulate('click')
    wrapper.find('input').simulate('blur')

    expect(wrapper.find('input').exists()).toBe(false)
    expect(onFocusOutMock).toHaveBeenCalled()
  })
})
