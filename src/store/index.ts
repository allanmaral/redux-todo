import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { middleware, saga } from './middleware';

const store = configureStore({
  reducer: rootReducer,
  middleware
});

saga.run(rootSaga);

export type StoreType = ReturnType<typeof rootReducer>;

export default store;