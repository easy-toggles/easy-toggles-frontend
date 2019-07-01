import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Details from '../../../../src/details/components/Details'
import Feature from '../../../../src/details/containers/Feature'
import Empty from '../../../../src/components/empty/Empty'

describe('Details Component', () => {
  const loadApplicationStub = jest.fn()
  const publishStub = jest.fn()
  const addFeatureStub = jest.fn()
  
  const buildComponent = (data = {}) => {
    const props = {
      config: data,
      loadApplication: loadApplicationStub,
      addFeature: addFeatureStub,
      publish: publishStub,
      match: {
        params: {
          id: 1
        }
      }
    }

    return shallow(<Details {...props} />)
  }

  test('renders a list of feeatures', () => {

    const wrapper = buildComponent({
      someFeature: {
        enabled: true
      }
    })

    expect(wrapper.find(Feature).length).toBe(1)
  })

  test('renders a empty message it there is no feeature', () => {
    const wrapper = buildComponent()

    expect(wrapper.find(Empty).exists()).toBe(true)
  })

  test('calls change application', () => {
    const wrapper = buildComponent()

    expect(loadApplicationStub).toBeCalledWith(1)
  })

  test('calls publish', () => {
    const wrapper = buildComponent()

    wrapper.find('.publish-button').simulate('click')

    expect(publishStub).toBeCalledTimes(1)
  })

  test('calls add feature', () => {
    const wrapper = buildComponent()

    wrapper.find('.add-feature-button').simulate('click')

    expect(addFeatureStub).toBeCalledTimes(1)
  })
})
