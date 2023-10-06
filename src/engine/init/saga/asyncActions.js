// CORE
import { createAction } from '@reduxjs/toolkit';

const destinationAsyncActions = Object.freeze({
  getDestinationsAsync: createAction('GET_DESTINATIONS_ASYNC'),
});

export const { getDestinationsAsync } = destinationAsyncActions;
