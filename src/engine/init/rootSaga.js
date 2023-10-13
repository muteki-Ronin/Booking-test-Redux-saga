// CORE
import { all, call } from 'redux-saga/effects';
// WATCHERS
import { destinationsWatcher } from '../core/destination/saga/watcher';
import { hotelsWatcher } from '../core/hotels/saga/watcher';

export function* rootSaga() {
  yield all([
    call(destinationsWatcher), 
    call(hotelsWatcher)
  ]);
}
