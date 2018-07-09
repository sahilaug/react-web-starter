import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'reducers';
import sagas from 'sagas';
import { AuthActions } from 'actions';
import { setAuthHeaders } from 'api';

const localStorageMiddleware = ({ getState }) => next => (action) => {
  const result = next(action);
  if (action.type === AuthActions.SET_AUTH_USER || action.type === AuthActions.UPDATE_AUTH_USER) {
    // eslint-disable-next-line
    localStorage.setItem('authState', JSON.stringify(getState().auth));
    setAuthHeaders(getState().auth.authToken);
  }
  if (action.type === AuthActions.LOGOUT) {
    // eslint-disable-next-line
    localStorage.removeItem('authState');
    setAuthHeaders('');
  }
  return result;
};

const networkErrorMiddleware = store => next => (action) => {
  if (action.payload && action.payload.code === 9999) {
    return store.dispatch({ type: 'NETWORK_ERROR' });
  }
  return next(action);
};

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  if (initialState) {
    setAuthHeaders(initialState.auth.authToken);
  } else {
    initialState = {};
  }
  const middleware = [sagaMiddleware, localStorageMiddleware, networkErrorMiddleware];
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
  sagaMiddleware.run(sagas);
  return store;
}
