import { expectSaga } from 'redux-saga-test-plan'
import sagas from '../../../src/sagas/changeApplicationWatcher'
import * as listActions from '../../../src/list/listActions'
import * as detailsActions from '../../../src/details/detailsActions'

describe('changeApplicationWatcher', () => {
  test('changes application', () => {
    return expectSaga(sagas)
      .dispatch({ type: listActions.types.CHANGE_APPLICATION, payload: { id: 1 } })
      .put(detailsActions.creators.loadConfig(null, { id: 1 }))
      .silentRun()
  })
})
