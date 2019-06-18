import React from 'react'
import { shallow } from 'enzyme'
import ActionList from '../../../../src/components/actionList/ActionList'

describe('ActionList Component', () => {
  let wrapper

  beforeEach(() => {
    const props = {
      buttons: {
        add: {
          label: 'Label'
        }
      }, 
      children: <p>children</p>
    }

    wrapper = shallow(<ActionList {...props} />)
  })

  test('renders add button label', () => {
    expect(wrapper.find('button > span').text()).toEqual('Label')
  })

  test('renders children', () => {
    expect(wrapper.find('p').exists()).toBe(true)
  })
})
