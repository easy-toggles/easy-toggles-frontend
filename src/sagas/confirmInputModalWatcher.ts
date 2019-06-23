import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as modalActions from '../modal/modalActions'
import * as detailsActions from '../details/detailsActions'
import { InputModalActions } from '../types/modal'

function* onConfirmInputModal({ payload }) {
  let nextAction

  if (InputModalActions.AddFeature === payload.action) {
    nextAction = yield call(detailsActions.creators.addFeature, { name: payload.newValue })
  } else if (InputModalActions.EditFeature === payload.action) {
    nextAction = yield call(detailsActions.creators.renameFeature, {
      path: [payload.oldValue],
      newValue: payload.newValue
    })
  }

  if (nextAction) {
    yield put(nextAction)
  }

  const closeModalAction = yield call(modalActions.creators.close)
  yield put(closeModalAction)
}

function* confirmInputModalWatcher() {
  yield takeEvery(modalActions.types.CONFIRM, onConfirmInputModal)
}

export default confirmInputModalWatcher
