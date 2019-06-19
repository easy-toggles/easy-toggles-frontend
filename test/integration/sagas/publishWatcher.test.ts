import { expectSaga } from 'redux-saga-test-plan'
import sagas from '../../../src/sagas/publishWatcher'
import * as actions from '../../../src/details/detailsActions'

describe('publishWatcher', () => {
  test('publishes', () => {
    return expectSaga(sagas)
      .dispatch({ type: actions.types.START_PUBLISH, payload: { id: 1 } })
      .put(actions.creators.publish(null, { id: 1 }))
      .silentRun()
  })
})
