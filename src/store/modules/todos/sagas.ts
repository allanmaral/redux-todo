import { all, call, put, takeEvery } from 'redux-saga/effects';

import { doRequestSagaToDoFulfilled, doRequestSagaToDoRejected, doRequestSagaToDo } from './actions';
import { ToDo } from '../../../interfaces/todo';


function* doRequestSagaToDoGenerator() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos');
    const todoList = (yield call([response, 'json'])) as ToDo[];
    const payload = todoList.slice(10, 15);
    yield put(doRequestSagaToDoFulfilled(payload));
  } catch (error) {
    yield put(doRequestSagaToDoRejected(error));
  }
}

export default all([
  takeEvery(doRequestSagaToDo.toString(), doRequestSagaToDoGenerator)
]);