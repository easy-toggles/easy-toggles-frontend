import { all, fork } from 'redux-saga/effects'
import initWatcher from './sagas/initWatcher'
import changeApplicationWatcher from './sagas/changeApplicationWatcher'

export default function *configureSagas() {
  yield all([
    fork(initWatcher),
    fork(changeApplicationWatcher)
  ])
}
