import * as actions from '../../../src/projects/projectsActions'
import { projectsReducer } from '../../../src/projects/projectsReducer'
import projectsResponse from '../../stubs/applications.json'
import projectResponse from '../../stubs/project.json'

describe('Projects Reducer', () => {
  const scenarios = [
    {
      name: 'loads applications',
      action: {
        type: actions.types.LOAD_APPLICATIONS.RESPONSE,
        payload: {
          data: projectsResponse
        }
      },
      prevState: {
        data: []
      },
      expectedState: {
        data: projectsResponse
      }
    },
    {
      name: 'adds project',
      action: {
        type: actions.types.ADD.RESPONSE,
        payload: {
          data: projectResponse
        }
      },
      prevState: {
        data: []
      },
      expectedState: {
        data: [projectResponse]
      }
    }
  ]

  scenarios.forEach((scenario) => {
    it(scenario.name, () => {
      expect(projectsReducer(scenario.prevState, scenario.action)).toEqual(scenario.expectedState)
    })
  })
})
