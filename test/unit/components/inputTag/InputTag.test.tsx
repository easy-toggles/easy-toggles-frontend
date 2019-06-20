import React from 'react'
import { shallow } from 'enzyme'
import InputTag from '../../../../src/components/inputTag/InputTag'

describe('InputTag Component', () => {
  const onChangeMock = jest.fn()
  let wrapper

  beforeEach(() => {
    const props = {
      tags: ['tag-1', 'tag-2'],
      onChange: onChangeMock
    }

    wrapper = shallow(<InputTag {...props} />)
  })

  test('initializes tags with props', () => {
    expect(wrapper.find('.tag').length).toBe(2)
  })

  test('removes tag', () => {
    wrapper
      .find('.tag i')
      .first()
      .simulate('click')

    expect(onChangeMock).toHaveBeenCalledWith(['tag-2'])
  })

  test('adds tag when enter is pressed', () => {
    wrapper.find('input').simulate('change', { target: { value: 'tag-3' } })
    wrapper.find('input').simulate('keyUp', { keyCode: 13 })

    expect(onChangeMock).toHaveBeenCalledWith(['tag-1', 'tag-2', 'tag-3'])
    expect(wrapper.find('input').prop('value')).toEqual('')
  })

  test('adds tag when comma is pressed', () => {
    wrapper.find('input').simulate('change', { target: { value: 'tag-3' } })
    wrapper.find('input').simulate('keyUp', { keyCode: 188 })

    expect(onChangeMock).toHaveBeenCalledWith(['tag-1', 'tag-2', 'tag-3'])
    expect(wrapper.find('input').prop('value')).toEqual('')
  })

  test('edits last tag when backspace is pressed', () => {
    wrapper.find('input').simulate('keyDown', { keyCode: 8 })

    expect(onChangeMock).toHaveBeenCalledWith(['tag-1'])
    expect(wrapper.find('input').prop('value')).toEqual('tag-2')
  })
})
