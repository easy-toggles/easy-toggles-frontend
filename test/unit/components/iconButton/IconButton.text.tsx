import React from 'react'
import { shallow } from 'enzyme'
import IconButton, { IconButtonTypes } from '../../../../src/components/iconButton/IconButton'

describe('Delete Component', () => {
  const onClickMock = jest.fn()
  let wrapper

  beforeEach(() => {
    const props = {
      onClick: onClickMock,
      type: IconButtonTypes.Delete
    }

    wrapper = shallow(<IconButton {...props} />)
  })

  test('renders icon', () => {
    expect(wrapper.find('button i').text()).toEqual(IconButtonTypes.Delete)
  })

  test('calls on click handler', () => {
    wrapper.find('button').simulate('click')

    expect(onClickMock).toHaveBeenCalled()
  })
})
