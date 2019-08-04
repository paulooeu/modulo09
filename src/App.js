import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactrotronConfig';
import { Router } from 'react-router-dom';
import { store, pesistor } from './store';
import history from './services/history';
import Routes from './routes';
import GlobalStyled from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={pesistor}>
        <Router history={history}>
          <GlobalStyled />
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
