import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, compose(applyMiddleware(sagaMiddleware))),
    initialState,
    runSaga: sagaMiddleware.run
  }
}
