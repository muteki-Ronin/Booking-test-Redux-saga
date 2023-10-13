// CORE
import { takeEvery } from 'redux-saga/effects';
// ACTIONS
import { getHotelsAsync } from './asyncActions';
// WORKERS
import { callGetHotelsWorker } from './workers/callGetHotelsWorker';

export function* hotelsWatcher() {
  yield takeEvery(getHotelsAsync.type, callGetHotelsWorker);
}
