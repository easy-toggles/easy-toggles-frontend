import { shallow } from 'enzyme'
import React from 'react'
import App from '../../src/App'
import FormModal from '../../src/modal/containers/FormModal'

describe('App Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders input modal', () => {
    expect(wrapper.find(FormModal).exists()).toBe(true)
  })
})
