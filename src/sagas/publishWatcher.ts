import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as detailsActions from '../details/detailsActions'

function* publish({ payload }) {
  const publishAction = yield call(detailsActions.creators.publish, null, { id: payload.id })
  yield put(publishAction)
}

function* changeApplicationWatcher() {
  yield takeEvery(detailsActions.types.START_PUBLISH, publish)
}

export default changeApplicationWatcher
