import { expectSaga } from 'redux-saga-test-plan'
import sagas from '../../../src/sagas/addApplicationWatcher'
import * as applicationssActions from '../../../src/applications/applicationsActions'

describe('addApplicationWatcher', () => {
  test('adds feature', () => {
    return expectSaga(sagas)
      .dispatch({
        type: applicationssActions.types.START_ADD,
        payload: { values: { name: 'value'} }
      })
      .put(applicationssActions.creators.add({ name: 'value', config: {} }))
      .silentRun()
  })
})
