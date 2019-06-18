import React from 'react'
import { shallow } from 'enzyme'
import Switch from '../../../../src/components/switch/Switch'

describe('Switch Component', () => {
  const onChangeMock = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Switch checked={true} onChange={onChangeMock} />)
  })

  test('renders on', () => {
    expect(wrapper.find('input').prop('checked')).toBe(true)
  })

  test('renders off', () => {
    wrapper.setProps({ checked: false })

    expect(wrapper.find('input').prop('checked')).toBeUndefined()
  })

  test('calls onChange function', () => {
    wrapper.find('input').simulate('change')

    expect(onChangeMock).toHaveBeenCalled()
  })
})
