import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import rootSaga from './sagas/index';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
