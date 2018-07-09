import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className="uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-height-1-1">
        <h1>Home Page</h1>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export default Homepage;
