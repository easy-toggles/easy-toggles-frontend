import { all, fork } from 'redux-saga/effects'
import initWatcher from './sagas/initWatcher'
import publishWatcher from './sagas/publishWatcher'
import confirmInputModalWatcher from './sagas/confirmInputModalWatcher'

export default function* configureSagas() {
  yield all([fork(initWatcher), fork(publishWatcher), fork(confirmInputModalWatcher)])
}
