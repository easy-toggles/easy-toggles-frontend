import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../projects/projectsActions'
import initWatcher from './initWatcher'

function* addProject({ payload }) {
  const data = {
    name: payload.value,
    config: {}
  }

  const addAction = yield call(actions.creators.add, { ...data })
  yield put(addAction)
}

function* addProjectWatcher() {
  yield takeEvery(actions.types.START_ADD, addProject)
}

export default addProjectWatcher
