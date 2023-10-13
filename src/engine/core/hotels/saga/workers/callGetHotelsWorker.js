// CORE
import { call, put, delay } from 'redux-saga/effects';
import { push } from 'redux-first-history';
// SLICES
import { setItems, setLoading } from '../../slice';
// API
import api from '../../../../config/axios';
import { links } from '../../../../config/links';

export function* callGetHotelsWorker(action) {
  const { payload } = action;

  try {
    yield put(setLoading(true));
    const { data, status } = yield call(api.getHotels, { ...payload });

    if (status === 200) {
      yield put(setItems(data));
      yield delay(2000);
      yield put(push(links.hotels));
    }

    yield put(setLoading(false));
  } catch (e) {
    console.warn(e);
  }
}
