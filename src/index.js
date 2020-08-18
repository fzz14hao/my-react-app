import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router/index'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './redux/store'


ReactDOM.render(
    // 将store传入跟组件
    <Provider store={store}>
      {/* 数据持久化 */}
      <PersistGate persistor={persistor}>
        <Root/>
      </PersistGate>
    </Provider>,
    document.getElementById('app')
);
