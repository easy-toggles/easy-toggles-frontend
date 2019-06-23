import * as actions from '../../../src/projects/projectsActions'
import { projectsReducer } from '../../../src/projects/projectsReducer'
import response from '../../stubs/applications.json'

describe('Projects Reducer', () => {
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
        data: []
      },
      expectedState: {
        data: response
      }
    }
  ]

  scenarios.forEach((scenario) => {
    it(scenario.name, () => {
      expect(projectsReducer(scenario.prevState, scenario.action)).toEqual(scenario.expectedState)
    })
  })
})
