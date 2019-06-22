import React from 'react'
import { shallow } from 'enzyme'
import ActionList from '../../../../src/components/actionList/ActionList'

describe('ActionList Component', () => {
  const onButtonClicked = jest.fn()
  let wrapper

  beforeEach(() => {
    const props = {
      buttons: {
        add: {
          icon: 'add',
          label: 'Label',
          onClick: onButtonClicked
        },
        delete: {
          icon: 'delete',
          label: 'Label',
          onClick: onButtonClicked
        }

      },
      children: <p>children</p>
    }

    wrapper = shallow(<ActionList {...props} />)
  })

  test('renders button label', () => {
    expect(wrapper.find('button').at(0).find('span').text()).toEqual('Label')
  })

  test('calls button handler', () => {
    wrapper.find('button').at(0).simulate('click')

    expect(onButtonClicked).toHaveBeenCalled()
  })

  test('renders children', () => {
    expect(wrapper.find('p').exists()).toBe(true)
  })
})
