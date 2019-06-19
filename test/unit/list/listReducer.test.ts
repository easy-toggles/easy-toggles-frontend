import * as actions from '../../../src/list/listActions'
import { listReducer } from '../../../src/list/listReducer'
import response from '../../stubs/applications.json'

describe('List Reducer', () => {
  const scenarios = [
    {
      name: 'loads applications',
      action: {
        type: actions.types.LOAD_APPLICATIONS.RESPONSE,
        payload: {
          data: response
        }
      },
      prevState: {
        applications: []
      },
      expectedState: {
        applications: response
      }
    }
  ]

  scenarios.forEach((scenario) => {
    it(scenario.name, () => {
      expect(listReducer(scenario.prevState, scenario.action)).toEqual(scenario.expectedState)
    })
  })
})
