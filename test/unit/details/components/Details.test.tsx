import React from 'react'
import { shallow } from 'enzyme'
import Details from '../../../../src/details/components/Details'
import Feature from '../../../../src/details/containers/Feature'

describe('Details Component', () => {
  const publishMock = jest.fn()
  const loadConfigMock = jest.fn()
  const data = {
    someFeature: {
      enabled: true,
      rules: [],
      turnsOff: [],
      dependsOn: []
    }
  }
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Details config={data} publish={publishMock} loadConfig={loadConfigMock} />)
  })

  test('loads data', () => {
    expect(loadConfigMock).toHaveBeenCalled()
  })

  test('renders a list of feeatures', () => {
    expect(wrapper.find(Feature).length).toBe(1)
  })

  test('publishes data', () => {
    wrapper.find('.publish-button').simulate('click')

    expect(publishMock).toHaveBeenCalled()
  })
})
