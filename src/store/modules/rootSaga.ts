import { all } from 'redux-saga/effects';

import todos from './todos/sagas';

export default function* rootSaga() {
  return yield all([todos]);
}