import React from 'react';
import { Provider } from 'react-redux';

import history from './services/history';
import GlobalStyled from './styles/global';
import './config/ReactrotronConfig';
import store from './store';
import { Router } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyled />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
