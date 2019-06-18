import React from 'react'
import { shallow } from 'enzyme'
import Rules from '../../../../src/details/components/Rules'
import Rule from '../../../../src/details/components/Rule'

describe('Rules Component', () => {
  let wrapper
  beforeEach(() => {
    const data = [
      {
        pokemon: ['pikachu', 'snorlax']
      }
    ]

    wrapper = shallow(<Rules rules={data} />)
  })

  test('renders a list of rules', () => {
    expect(wrapper.find(Rule).length).toBe(1)
  })
})
