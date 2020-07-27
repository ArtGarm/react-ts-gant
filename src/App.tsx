import React from 'react';
import { Provider } from 'react-redux';

import createStore from './createStore';
import Router from './ui/router';

// create store
const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
