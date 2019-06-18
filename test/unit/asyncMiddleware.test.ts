import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import { createActions } from 'redux-arc'
import asyncMiddleware from '../../src/asyncMiddleware'

const mockAxios = axios as jest.Mocked<typeof axios>

describe('asyncMiddleware', () => {
  let store

  const state = {
    details: {}
  }

  afterEach(() => {
    mockAxios.request.mockRestore()
  })

  const getAxiosParameters = () => mockAxios.request.mock.calls[0][0] as any

  const simulateRequest = () => {
    const { creators } = createActions('details', {
      doRequest: { url: '/details', method: 'get' }
    })
    return store.dispatch(creators.doRequest())
  }

  beforeEach(() => {
    mockAxios.request.mockImplementationOnce(() =>
      Promise.resolve({
        status: 200,
        statusText: 'OK',
        request: {}
      })
    )
    store = configureMockStore([asyncMiddleware])(state)
  })

  it('uses passed method', () => {
    simulateRequest()

    expect(getAxiosParameters().method).toEqual('get')
  })

  it('uses passed url', () => {
    simulateRequest()

    expect(getAxiosParameters().url).toEqual('/details')
  })
})
