import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers'

export let history = createBrowserHistory()

let middlewares = [
    routerMiddleware(history),
    thunk,
    logger
]

let enhancers = [applyMiddleware(...middlewares)]

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['router']
}

let persistedReducer = persistReducer(
    persistConfig,
    rootReducer(history)
)

export default () => {
    let store = createStore(
        persistedReducer,
        compose(...enhancers)
    )

    let persistor = persistStore(store)
    return { store, persistor }
}




