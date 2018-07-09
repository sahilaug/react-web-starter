import ip from 'icepick';
import { AuthActions } from 'actions';

const requestStatus = ['REQUESTING', 'FAILED', 'SUCCESS'];
const initialState = {
  loginRequestStatus: null,
  loginError: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AuthActions.LOGIN_REQUEST:
      return ip.setIn(state, ['loginRequestStatus'], requestStatus[0]);

    case AuthActions.LOGIN_FAILURE:
      state = ip.setIn(state, ['loginError'], action.payload);
      return ip.setIn(state, ['loginRequestStatus'], requestStatus[1]);

    case AuthActions.LOGIN_SUCCESS:
      return ip.setIn(state, ['loginRequestStatus'], requestStatus[2]);

    default:
      return state;
  }
}
