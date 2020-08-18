import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// 引入redux-persist
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage/session'

import * as reducers from './reducers'

// 首先定义一个对
const persistConfig = {
  key: 'root',
  storage,
};

let _reducers = Object.assign(reducers, {})

let _AllReducers = combineReducers(_reducers)
// 使用redux-persist合并
const persistedReducer = persistReducer(persistConfig, _AllReducers)

// 这里我使用了thunk，具体原理我也没去细研究，使用redux的createStore去合并，最终产出我们需要传入Provider的store
let store = createStore(persistedReducer, applyMiddleware(thunk));
// 这里就是应用redux-persist以完成数据持久化

let persistor = persistStore(store);

export {persistor, store}



