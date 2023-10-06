// CORE
import { takeEvery } from 'redux-saga/effects';
import { getDestinationsAsync } from './asyncActions';
import { callGetDestinationsWorker } from './workers';

export function* destinationsWatcher() {
  yield takeEvery(getDestinationsAsync.type, callGetDestinationsWorker);
}
