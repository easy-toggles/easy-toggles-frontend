import { call, put } from 'redux-saga/effects'
import * as listActions from '../list/listActions'

function* initWatcher() {
  const loadApplicationsAction = yield call(listActions.creators.loadApplications)
  yield put(loadApplicationsAction)
}

export default initWatcher
