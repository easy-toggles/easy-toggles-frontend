import { call, put, takeEvery, select } from 'redux-saga/effects'
import * as actions from '../applications/applicationsActions'

function* addApplication({ payload }) {
  const data = {
    name: payload.values.name, 
    config: {}
  }

  const addAction = yield call(actions.creators.add, { ...data })
  yield put(addAction)
}

function* addApplicationWatcher() {
  yield takeEvery(actions.types.START_ADD, addApplication)
}

export default addApplicationWatcher
