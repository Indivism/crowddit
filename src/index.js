import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/storage'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/index';
import logger from 'redux-logger'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'

let store = configureStore()

render(
  <Provider store={ store }>
      <ConnectedRouter history={ history }>
        <Routes />
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();