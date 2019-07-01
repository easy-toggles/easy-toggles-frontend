import { expectSaga } from 'redux-saga-test-plan'
import sagas from '../../../src/sagas/initWatcher'
import { creators } from '../../../src/applications/applicationsActions'

describe('initWatcher', () => {
  test('loads applications', () => {
    return expectSaga(sagas)
      .put(creators.load())
      .silentRun()
  })
})
