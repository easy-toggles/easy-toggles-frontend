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
        title: 'title',
        fields: [{ label: 'label', name: 'name', type: 'text' }]
      },
      expectedState: {
        open: false,
        action: null,
        title: '',
        fields: []
      }
    },
    {
      name: 'opens modal',
      action: {
        type: actions.types.OPEN,
        payload: {
          action: 'addFeature',
          title: 'new feature',
          fields: [{ name: 'name', label: 'Name', type: 'text' }]
        }
      },
      prevState: {
        open: false,
        action: null,
        title: '',
        fields: []
      },
      expectedState: {
        open: true,
        action: 'addFeature',
        title: 'new feature',
        fields: [{ name: 'name', label: 'Name', type: 'text' }]
      }
    }
  ]

  scenarios.forEach((scenario) => {
    it(scenario.name, () => {
      expect(modalReducer(scenario.prevState, scenario.action)).toEqual(scenario.expectedState)
    })
  })
})
