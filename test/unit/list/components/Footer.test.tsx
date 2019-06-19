import React from 'react'
import { shallow } from 'enzyme'
import Footer from '../../../../src/list/components/Footer'

describe('Footer Component', () => {
  let wrapper
  const changeApplicationMock = jest.fn()
  const publishMock = jest.fn()

  beforeEach(() => {
    const applications = [{ id: 1, name: 'Pikachu' }]
    wrapper = shallow(
      <Footer applications={applications} changeApplication={changeApplicationMock} publish={publishMock} />
    )
  })

  test('renders a select with a list of applications', () => {
    expect(wrapper.find('select > option').length).toBe(2)
  })

  test('calls change application', () => {
    wrapper.find('select').simulate('change', { target: { value: 1 } })

    expect(changeApplicationMock).toBeCalledWith(1)
  })

  test('calls publish', () => {
    wrapper.find('.publish-button').simulate('click')

    expect(publishMock).toBeCalledTimes(1)
  })
})
