import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as listActions from '../list/listActions'
import * as detailsActions from '../details/detailsActions'

function* changeApplication({ payload }) {
  const loadConfigAction = yield call(detailsActions.creators.loadConfig, null, { id: payload.id })
  yield put(loadConfigAction)
}

function* changeApplicationWatcher() {
  yield takeEvery(listActions.types.CHANGE_APPLICATION, changeApplication)
}

export default changeApplicationWatcher
