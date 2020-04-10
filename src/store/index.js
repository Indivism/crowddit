import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createRootReducer from '../reducers'

export let history = createBrowserHistory()

const persistConfig = {
    key: 'app',
    storage,
    whitelist: ['app']
}

export default () => {
    return createStore(
        persistReducer(persistConfig, createRootReducer(history)),
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                logger
            )
        )
    )
}




