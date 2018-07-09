import React from 'react';
import { Link } from 'react-router-dom';

class LoginButton extends React.PureComponent {
  render() {
    return (
      <Link className="uk-navbar-item" to="/login">
        Login
      </Link>
    );
  }
}

export default LoginButton;
