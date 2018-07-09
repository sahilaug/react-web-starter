import { createAction } from 'redux-actions';

export const LOGIN = 'AUTH/LOGIN';
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST';
export const LOGIN_FAILURE = 'AUTH/LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'AUTH/LOGIN_SUCCESS';

export const login = createAction(LOGIN);
export const loginRequest = createAction(LOGIN_REQUEST);
export const loginFailure = createAction(LOGIN_FAILURE);
export const loginSuccess = createAction(LOGIN_SUCCESS);

// State for SIGNUP process
export const SIGNUP = 'AUTH/SIGNUP';
export const SIGNUP_REQUEST = 'AUTH/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'AUTH/SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'AUTH/SIGNUP_FAILURE';

export const signup = createAction(SIGNUP);
export const signupRequest = createAction(SIGNUP_REQUEST);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const signupFailure = createAction(SIGNUP_FAILURE);

export const SET_AUTH_USER = 'AUTH/SET_AUTH_USER';
export const setAuthUser = createAction(SET_AUTH_USER);

export const UPDATE_AUTH_USER = 'AUTH/UPDATE_AUTH_USER';
export const updateAuthUser = createAction(UPDATE_AUTH_USER);

export const LOGOUT = 'AUTH/LOGOUT';
export const logout = createAction(LOGOUT);
