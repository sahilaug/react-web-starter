import React from 'react';
import { Link } from 'react-router-dom';
import { LoginButton } from 'components/common';

class Header extends React.PureComponent {
  render() {
    return (
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <Link className="uk-navbar-item uk-logo" to="/">
            Home
          </Link>
        </div>
        <div className="uk-navbar-right">
          <span className="uk-navbar-item">
            <LoginButton />
          </span>
        </div>
      </nav>
    );
  }
}

export default Header;
