// CORE
import { call, put, delay } from 'redux-saga/effects';

import { setLoading } from '../../../core/destination/slice';

export function* callGetDestinationsWorker() {
  try {
    yield put(setLoading(true));
    yield delay(2000);
    yield put(setLoading(false));
  } catch (e) {
    console.warn(e);
  }
}
