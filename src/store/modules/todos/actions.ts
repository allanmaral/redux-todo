import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { ToDo } from '../../../interfaces/todo';


export const doCreateTodo = createAction<ToDo>('@todo/createToDo');
export const doUpdateTodo = createAction<ToDo>('@todo/updateToDo');
export const doDeleteTodo = createAction<ToDo>('@todo/deleteToDo');

export const doRequestSagaToDo = createAction<void>('@todo/requestSagaToDo/pending');
export const doRequestSagaToDoFulfilled = createAction<ToDo[]>('@todo/requestSagaToDo/fulfilled');
export const doRequestSagaToDoRejected = createAction<Error>('@todo/requestSagaToDo/rejected');

export const doRequestRemoteToDo = createAsyncThunk('@todo/requestRemoteToDo', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const articles = (await response.json() as ToDo[]).slice(0, 5);
  return articles;
});