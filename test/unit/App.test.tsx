import { shallow } from 'enzyme'
import React from 'react'
import Details from '../../src/details/containers/Details'
import App from '../../src/App'

describe('App Component', () => {
  test('renders details', () => {
    const app = shallow(<App />)
    expect(app.find(Details).exists()).toBe(true)
  })
})
