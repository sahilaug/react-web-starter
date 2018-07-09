import React from 'react';
import { connect } from 'react-redux';

class Footer extends React.PureComponent {
  render() {
    return (
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <div className="uk-navbar-item">
            <a className="uk-text-primary">Contact Us</a>
          </div>
        </div>
        <div className="uk-navbar-right">
          <div className="uk-navbar-item">
            <div className="uk-text-bold">© Numerin All rights reserved</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect(null, {})(Footer);
