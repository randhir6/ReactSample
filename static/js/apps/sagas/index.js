import {fork} from 'redux-saga/effects';
import productSaga from './products'

export default function *rootSaga() {
  yield [
    fork(productSaga)
  ]
}