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
import thunk from 'redux-thunk'

import { persistor, store } from './store'

// const persistConfig = {
//   key: 'root',
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const persist = () => {
//   let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
//   let persistor = persistStore(store)
//   return { store, persistor }
// } 

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk, logger)
// )

// window.store = persist.store

render(
  <Provider store={ store }>
      <Routes />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
