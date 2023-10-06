// CORE
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// REDUCERS
import destination from '../core/destination/slice';
import hotels from '../core/destination/slice';
// MIDDLEWARE
import { rootSaga } from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    destination,
    hotels,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
