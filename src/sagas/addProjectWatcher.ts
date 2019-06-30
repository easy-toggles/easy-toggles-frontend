import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as actions from '../projects/projectsActions'

function* addProject({ payload }) {
  const data = {
    name: payload.values.name, 
    config: {}
  }

  const addAction = yield call(actions.creators.add, { ...data })
  yield put(addAction)
}

function* addProjectWatcher() {
  yield takeEvery(actions.types.START_ADD, addProject)
}

export default addProjectWatcher
