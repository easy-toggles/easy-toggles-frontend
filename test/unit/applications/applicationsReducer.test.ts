import * as actions from '../../../src/applications/applicationsActions'
import { applicationsReducer } from '../../../src/applications/applicationsReducer'
import applicationsResponse from '../../stubs/applications.json'
import applicationResponse from '../../stubs/application.json'

describe('Applications Reducer', () => {
  const scenarios = [
    {
      name: 'loads applications',
      action: {
        type: actions.types.LOAD.RESPONSE,
        payload: {
          data: applicationsResponse
        }
      },
      prevState: {
        data: []
      },
      expectedState: {
        data: applicationsResponse
      }
    },
    {
      name: 'adds application',
      action: {
        type: actions.types.ADD.RESPONSE,
        payload: {
          data: applicationResponse
        }
      },
      prevState: {
        data: []
      },
      expectedState: {
        data: [applicationResponse]
      }
    }
  ]

  scenarios.forEach((scenario) => {
    it(scenario.name, () => {
      expect(applicationsReducer(scenario.prevState, scenario.action)).toEqual(scenario.expectedState)
    })
  })
})
