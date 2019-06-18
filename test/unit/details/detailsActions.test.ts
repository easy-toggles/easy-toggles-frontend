import configureStore from 'redux-mock-store'
import * as actions from '../../../src/details/detailsActions'
import asyncMiddleware from '../../../src/asyncMiddleware'

describe('Details Actions', () => {
  const scenarios = [
    {
      name: 'changes feature',
      action: 'changeFeature',
      expectedAction: {
        type: actions.types.CHANGE_FEATURE,
        payload: {}
      }
    },
    {
      name: 'load config',
      action: 'loadConfig',
      expectedAction: {
        type: actions.types.LOAD_CONFIG.REQUEST,
        payload: {},
        meta: {
          id: '123',
          url: 'api/application/123',
          method: 'get'
        }
      }
    },
    {
      name: 'publish request',
      action: 'publish',
      expectedAction: {
        type: actions.types.PUBLISH.REQUEST,
        payload: {},
        meta: {
          id: '123',
          url: 'api/application/123',
          method: 'patch'
        }
      }
    }
  ]

  scenarios.forEach((scenario) => {
    test(`dispatches ${scenario.name}`, () => {
      const store = configureStore([asyncMiddleware])({})
      store.dispatch(actions.creators[scenario.action](scenario.expectedAction.payload, scenario.expectedAction.meta))

      expect(store.getActions()[0]).toEqual(scenario.expectedAction)
    })
  })
})
