import React from 'react'
import { shallow } from 'enzyme'
import Delete from '../../../../src/components/delete/Delete'

describe('Delete Component', () => {
  const onClickMock = jest.fn()
  let wrapper

  beforeEach(() => {
    const props = {
      onClick: onClickMock
    }

    wrapper = shallow(<Delete {...props} />)
  })

  test('calls on click handler', () => {
    wrapper.find('button').simulate('click')

    expect(onClickMock).toHaveBeenCalled()
  })
})
