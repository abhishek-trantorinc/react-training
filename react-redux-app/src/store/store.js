import React from 'react';
import {compose, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';
const persistConfig = {
    key: 'root',
    storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(persistedReducer,composeEnhancers())
let persistor = persistStore(store)
export  { store, persistor }