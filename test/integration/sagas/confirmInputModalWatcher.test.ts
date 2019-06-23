import { expectSaga } from 'redux-saga-test-plan'
import sagas from '../../../src/sagas/confirmInputModalWatcher'
import * as detailsActions from '../../../src/details/detailsActions'
import * as modalActions from '../../../src/modal/modalActions'
import { InputModalActions } from '../../../src/types/modal'

describe('confirmInputModalWatcher', () => {
  test('adds feature', () => {
    return expectSaga(sagas)
      .dispatch({
        type: modalActions.types.CONFIRM,
        payload: { action: InputModalActions.AddFeature, label: 'new feature', newValue: 'value' }
      })
      .put(detailsActions.creators.addFeature({ name: 'value' }))
      .put(modalActions.creators.close())
      .silentRun()
  })

  test('edits feature', () => {
    return expectSaga(sagas)
      .dispatch({
        type: modalActions.types.CONFIRM,
        payload: { action: InputModalActions.EditFeature, label: 'edit feature', oldValue: 'value', newValue: 'value2' }
      })
      .put(detailsActions.creators.renameFeature({ path: ['value'], newValue: 'value2' }))
      .put(modalActions.creators.close())
      .silentRun()
  })
})
