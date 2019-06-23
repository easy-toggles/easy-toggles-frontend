import React from 'react'
import { shallow } from 'enzyme'
import Rules from '../../../../src/details/components/Rules'
import Rule from '../../../../src/details/containers/Rule'

describe('Rules Component', () => {
  let wrapper
  beforeEach(() => {
    const data = [
      {
        pokemon: ['pikachu', 'snorlax']
      }
    ]

    const props = {
      rules: data,
      path: ['feature'],
      addRule: jest.fn()
    }

    wrapper = shallow(<Rules {...props} />)
  })

  test('renders a list of rules', () => {
    expect(wrapper.find(Rule).length).toBe(1)
  })
})
