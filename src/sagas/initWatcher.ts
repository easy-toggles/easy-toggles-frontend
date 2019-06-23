import { call, put } from 'redux-saga/effects'
import * as actions from '../projects/projectsActions'

function* initWatcher() {
  const loadApplicationsAction = yield call(actions.creators.loadApplications)
  yield put(loadApplicationsAction)
}

export default initWatcher
