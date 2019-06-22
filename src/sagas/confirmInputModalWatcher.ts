import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as modalActions from '../modal/modalActions'
import * as detailsActions from '../details/detailsActions'
import { InputModalActions } from '../types/modal'

function* onConfirmInputModal({ payload }) {
  if (InputModalActions.AddFeature === payload.action) {
    const nextAction = yield call(detailsActions.creators.addFeature, { name: payload.value })
    yield put(nextAction)
  }

  const closeModalAction = yield call(modalActions.creators.close)
  yield put(closeModalAction)
}

function* confirmInputModalWatcher() {
  yield takeEvery(modalActions.types.CONFIRM, onConfirmInputModal)
}

export default confirmInputModalWatcher
