import { shallow } from 'enzyme'
import React from 'react'
import Details from '../../src/details/containers/Details'
import App from '../../src/App'
import InputModal from '../../src/modal/containers/InputModal'

describe('App Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders input modal', () => {
    expect(wrapper.find(InputModal).exists()).toBe(true)
  })
})
