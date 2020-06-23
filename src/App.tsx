import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import store from './store';
import { Layout } from './components/layout';

function App() {
  return (
    <Provider store={store}>
      <Layout title="Today" />
    </Provider>
  );
}

export default App;
