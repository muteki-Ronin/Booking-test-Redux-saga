// CORE
import { takeEvery } from 'redux-saga/effects';
// ACTIONS
import { getDestinationsAsync } from './asyncActions';
// WORKERS
import { callGetDestinationsWorker } from './workers/callGetDestinationsWorker';

export function* destinationsWatcher() {
  yield takeEvery(getDestinationsAsync.type, callGetDestinationsWorker);
}
