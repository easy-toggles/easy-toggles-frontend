import configureStore from 'redux-mock-store'
import * as actions from '../../../src/details/detailsActions'
import asyncMiddleware from '../../../src/asyncMiddleware'
import { detailsReducer } from '../../../src/details/detailsReducer'

describe('Details Reducer', () => {
  const scenarios = [
    {
      name: 'toggles feature',
      action: {
        payload: {
          name: 'someFeature',
          data: {
            enabled: false,
          }
        },
        type: actions.types.CHANGE_FEATURE
      },
      prevState: {
        name: 'app',
        environment: 'dev',
        config: {
          someFeature: {
            enabled: true
          }
        }
      },
      expectedState: {
        name: 'app',
        environment: 'dev',
        config: {
          someFeature: {
            enabled: false
          }
        }
      }
    },
    {
      name: 'loads config data',
      action: {
        payload: {
          data: {
            someFeature: {
              enabled: true
            }
          }
        },
        type: actions.types.LOAD_CONFIG.RESPONSE
      },
      prevState: {},
      expectedState: {
        someFeature: {
          enabled: true
        }
      }
    }
  ]

  scenarios.forEach((scenario) => {
    it(scenario.name, () => {
      expect(detailsReducer(scenario.prevState, scenario.action)).toEqual(scenario.expectedState)
    })
  })
})
