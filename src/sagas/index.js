import { fork, all } from 'redux-saga/effects';
import authSagas from './authSagas';

export default function* sagas() {
  yield all([fork(authSagas)]);
}
