import ip from 'icepick';
import { AuthActions } from '../actions';

const initialState = {
  isAuthorizedUser: false,
  user: null,
  authToken: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AuthActions.SET_AUTH_USER:
      state = ip.setIn(state, ['isAuthorizedUser'], true);
      state = ip.setIn(state, ['user'], action.payload.data.user);
      state = ip.setIn(state, ['authToken'], action.payload.data.token);
      return state;

    case AuthActions.UPDATE_AUTH_USER:
      return ip.setIn(state, ['user'], action.payload.data.users);

    case AuthActions.LOGOUT:
      return initialState;

    default:
      return state;
  }
}
