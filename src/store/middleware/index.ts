import { getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

export const saga = createSagaMiddleware();

export const middleware = [
  ...getDefaultMiddleware(),
  saga
];