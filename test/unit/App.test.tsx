import { shallow } from 'enzyme'
import React from 'react'
import Details from '../../src/details/containers/Details'
import App from '../../src/App'
import Footer from '../../src/list/containers/Footer'
import InputModal from '../../src/modal/containers/InputModal'

describe('App Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders details', () => {
    expect(wrapper.find(Details).exists()).toBe(true)
  })

  test('renders footer', () => {
    expect(wrapper.find(Footer).exists()).toBe(true)
  })

  test('renders input modal', () => {
    expect(wrapper.find(InputModal).exists()).toBe(true)
  })
})
