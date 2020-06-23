/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import { ToDo } from '../../../interfaces/todo';

import { doRequestRemoteToDo, doCreateTodo, doUpdateTodo, doDeleteTodo, doRequestSagaToDoFulfilled, doRequestSagaToDoRejected, doRequestSagaToDo } from './actions';

export interface ToDoReducerState {
  todos: ToDo[];
  error?: Error;
  loading: boolean;
}

const initialState: ToDoReducerState = {
  todos: [],
  error: undefined,
  loading: false
};

export default createReducer(initialState, (builder) => {
  builder.addCase(doCreateTodo, (state, action) => {
    state.todos.push(action.payload);
  });
  builder.addCase(doUpdateTodo, (state, action) => {
    state.todos = state.todos.map(
      todo => todo.id === action.payload.id 
        ? action.payload 
        : todo
    );
  });
  builder.addCase(doDeleteTodo, (state, action) => {
    state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
  });
  
  // Thunk reducers
  builder.addCase(doRequestRemoteToDo.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(doRequestRemoteToDo.fulfilled, (state, action) => {
    state.loading = false;
    state.todos.push(...action.payload);
  });
  builder.addCase(doRequestRemoteToDo.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error as Error;
  });

  // Saga reducers
  builder.addCase(doRequestSagaToDo, (state) => {
    state.loading = true;
  });
  builder.addCase(doRequestSagaToDoFulfilled, (state, action) => {
    state.loading = false;
    state.todos.push(...action.payload);
  });
  builder.addCase(doRequestSagaToDoRejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
});