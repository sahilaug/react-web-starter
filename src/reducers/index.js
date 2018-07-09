import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { AuthActions } from 'actions';
import loginReducer from './loginReducer';
import authReducer from './authReducer';

const appReducer = combineReducers({
  form: formReducer,
  login: loginReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === AuthActions.LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
