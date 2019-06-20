import React from 'react'
import { shallow } from 'enzyme'
import ActionList from '../../../../src/components/actionList/ActionList'

describe('ActionList Component', () => {
  const onAddButtonClickMock = jest.fn()
  let wrapper

  beforeEach(() => {
    const props = {
      buttons: {
        add: {
          label: 'Label',
          onClick: onAddButtonClickMock
        }
      },
      children: <p>children</p>
    }

    wrapper = shallow(<ActionList {...props} />)
  })

  test('renders add button label', () => {
    expect(wrapper.find('button > span').text()).toEqual('Label')
  })

  test('calls add button handler', () => {
    wrapper.find('button').simulate('click')

    expect(onAddButtonClickMock).toHaveBeenCalled()
  })

  test('renders children', () => {
    expect(wrapper.find('p').exists()).toBe(true)
  })
})
