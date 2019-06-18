import React from 'react'
import { shallow } from 'enzyme'
import Rule from '../../../../src/details/components/Rule'

describe('Rule Component', () => {
  test('renders a list of rules', () => {
    const data = {
      pokemon: ['pikachu', 'psyduck']
    }
    const wrapper = shallow(<Rule rule={data} />)

    expect(wrapper.find('th').text()).toBe('pokemon')
  })
})