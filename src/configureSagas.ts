import { all, fork } from 'redux-saga/effects'
import initWatcher from './sagas/initWatcher'
import publishWatcher from './sagas/publishWatcher'
import addProjectWatcher from './sagas/addProjectWatcher'

export default function* configureSagas() {
  yield all([fork(initWatcher), fork(publishWatcher), fork(addProjectWatcher)])
}
