import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as detailsActions from '../details/detailsActions'

function* publish({ payload }) {
  const { details } = yield select()
  const publishAction = yield call(detailsActions.creators.publish, {...details}, { id: payload.id})
  yield put(publishAction)
}

function* publishWatcher() {
  yield takeEvery(detailsActions.types.START_PUBLISH, publish)
}

export default publishWatcher
