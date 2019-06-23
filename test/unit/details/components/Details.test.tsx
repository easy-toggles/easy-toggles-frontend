import React from 'react'
import { shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Details from '../../../../src/details/components/Details'
import Feature from '../../../../src/details/containers/Feature'
import Empty from '../../../../src/components/empty/Empty'

describe('Details Component', () => {
  const loadProjectMock = jest.fn()
  const publishMock = jest.fn()
  const addFeatureMock = jest.fn()
  
  const buildComponent = (data = {}) => {
    const props = {
      config: data,
      loadProject: loadProjectMock,
      addFeature: addFeatureMock,
      publish: publishMock,
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

    expect(loadProjectMock).toBeCalledWith(1)
  })

  test('calls publish', () => {
    const wrapper = buildComponent()

    wrapper.find('.publish-button').simulate('click')

    expect(publishMock).toBeCalledTimes(1)
  })

  test('calls add feature', () => {
    const wrapper = buildComponent()

    wrapper.find('.add-feature-button').simulate('click')

    expect(addFeatureMock).toBeCalledTimes(1)
  })
})
