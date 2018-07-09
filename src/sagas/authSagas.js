import { put, call, all, fork, takeLatest } from 'redux-saga/effects';
import { AuthActions } from '../actions';
import { POST } from '../api';

function* doLogin(action) {
  yield put(AuthActions.loginRequest());
  try {
    yield put(AuthActions.loginSuccess());
    yield put(AuthActions.setAuthUser({
      data: { user: action.payload, token: 'dummyToken' },
    }));
    // const loginURL = '';
    // const { response } = yield call(POST, `/${loginURL}`, action.payload);
    // const { active } = response.data.user;
    // if (active) {
    //   yield put(AuthActions.loginSuccess());
    //   yield put(AuthActions.setAuthUser(response));
    // } else {
    //   yield put(AuthActions.loginFailure('User not active yet. Check your email!'));
    // }
  } catch (error) {
    let msgError = `${error}`;
    if (error.data) {
      const { message } = error.data;
      msgError = `${message}`;
    }
    yield put(AuthActions.loginFailure(msgError));
  }
}

function* doSignUp(action) {
  yield put(AuthActions.signupRequest());
  const signupURL = '';
  try {
    const { response } = yield call(POST, `/${signupURL}`, action.payload);
    yield put(AuthActions.signupSuccess({ response }));
  } catch (error) {
    let msgError = `${error}`;
    if (error.data) {
      const { message, errors } = error.data;
      msgError = `${message} ${errors || ''}`;
    }
    yield put(AuthActions.signupFailure({ msgError }));
  }
}

export default function* authSagas() {
  yield all([
    fork(takeLatest, AuthActions.LOGIN, doLogin),
    fork(takeLatest, AuthActions.SIGNUP, doSignUp),
  ]);
}
