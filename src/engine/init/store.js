// CORE
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
// REDUCERS
import destination from '../core/destination/slice';
import hotels from '../core/hotels/slice';
// MIDDLEWARE
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

export const store = configureStore({
  reducer: {
    router: routerReducer,
    destination,
    hotels,
  },
  middleware: () => [sagaMiddleware, routerMiddleware],
});

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);
