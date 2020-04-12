import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/storage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Routes from './routes'
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store'

let { store, persistor } = configureStore()
window.store = store
export let getStore = () => { return store }

console.log(store, persistor)

render(
  <Provider store={ store }>
    {/* <PersistGate loading={ null } persistor={ persistor } > */}
      <ConnectedRouter history={ history }>
        <Routes />
      </ConnectedRouter>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
