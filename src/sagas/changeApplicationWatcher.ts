import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as projectsActions from '../projects/projectsActions'
import * as detailsActions from '../details/detailsActions'

function* changeApplication({ payload }) {
  const loadConfigAction = yield call(detailsActions.creators.loadConfig, null, { id: payload.id })
  yield put(loadConfigAction)
}

function* changeApplicationWatcher() {
  yield takeEvery(projectsActions.types.CHANGE_APPLICATION, changeApplication)
}

export default changeApplicationWatcher
