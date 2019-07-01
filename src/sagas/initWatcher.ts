import { call, put } from 'redux-saga/effects'
import * as actions from '../applications/applicationsActions'

function* initWatcher() {
  const loadApplicationsAction = yield call(actions.creators.load)
  yield put(loadApplicationsAction)
}

export default initWatcher
