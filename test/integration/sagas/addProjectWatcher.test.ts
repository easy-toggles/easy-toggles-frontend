import { expectSaga } from 'redux-saga-test-plan'
import sagas from '../../../src/sagas/addProjectWatcher'
import * as projectsActions from '../../../src/projects/projectsActions'

describe('addProjectWatcher', () => {
  test('adds feature', () => {
    return expectSaga(sagas)
      .dispatch({
        type: projectsActions.types.START_ADD,
        payload: { value: 'value' }
      })
      .put(projectsActions.creators.add({ name: 'value', config: {} }))
      .silentRun()
  })
})
