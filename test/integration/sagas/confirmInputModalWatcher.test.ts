import { expectSaga } from 'redux-saga-test-plan'
import sagas from '../../../src/sagas/confirmInputModalWatcher'
import * as listActions from '../../../src/list/listActions'
import * as detailsActions from '../../../src/details/detailsActions'
import * as modalActions from '../../../src/modal/modalActions'

describe('confirmInputModalWatcher', () => {
  test('adds feature', () => {
    return expectSaga(sagas)
      .dispatch({
        type: modalActions.types.CONFIRM,
        payload: { action: 'addFeature', label: 'new feature', value: 'value' }
      })
      .put(detailsActions.creators.addFeature({ name: 'value' }))
      .silentRun()
  })
})
