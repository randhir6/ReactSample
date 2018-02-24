import {takeEvery} from 'redux-saga';
import {put, call, fork} from 'redux-saga/effects';
import * as productActions from '../actions'
import {HttpHelper} from './http'

function *getProducts() {
  const response = yield call(HttpHelper, '/items', 'GET', null, null);
  yield put(productActions.getProductsResponse(response.data))
}

/*
 Watchers
 */

function *watchGetProducts() {
  yield *takeEvery(productActions.GET_PRODUCTS, getProducts)
}


export default function *productSaga() {
  yield [
    fork(watchGetProducts)
  ]
}
