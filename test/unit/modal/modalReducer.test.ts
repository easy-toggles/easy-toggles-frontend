import * as actions from '../../../src/modal/modalActions'
import { modalReducer } from '../../../src/modal/modalReducer'

describe('Modal Reducer', () => {
  const scenarios = [
    {
      name: 'closes modal',
      action: {
        type: actions.types.CLOSE
      },
      prevState: {
        open: true,
        action: 'addFeature',
        content: {
          label: 'new feature'
        }
      },
      expectedState: {
        open: false,
        action: null,
        content: {}
      }
    },
    {
      name: 'opens modal',
      action: {
        type: actions.types.OPEN,
        payload: {
          action: 'addFeature',
          content: {
            label: 'new feature'
          }
        }
      },
      prevState: {
        open: false,
        action: null,
        content: {}
      },
      expectedState: {
        open: true,
        action: 'addFeature',
        content: {
          label: 'new feature'
        }
      }
    }
  ]

  scenarios.forEach((scenario) => {
    it(scenario.name, () => {
      expect(modalReducer(scenario.prevState, scenario.action)).toEqual(scenario.expectedState)
    })
  })
})
