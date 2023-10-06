// CORE
import { all, call } from 'redux-saga/effects';
// WATCHERS
import { destinationsWatcher } from './saga/watcher';

export function* rootSaga() {
  yield all([call(destinationsWatcher)]);
}
