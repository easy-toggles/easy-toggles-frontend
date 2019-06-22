import { all, fork } from 'redux-saga/effects'
import initWatcher from './sagas/initWatcher'
import changeApplicationWatcher from './sagas/changeApplicationWatcher'
import publishWatcher from './sagas/publishWatcher'
import confirmInputModalWatcher from './sagas/confirmInputModalWatcher'

export default function *configureSagas() {
  yield all([
    fork(initWatcher),
    fork(changeApplicationWatcher),
    fork(publishWatcher),
    fork(confirmInputModalWatcher)
  ])
}
