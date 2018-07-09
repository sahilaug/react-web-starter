import React from 'react';
import { connect } from 'react-redux';

export default function requiresAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentDidMount() {
      this.checkAndRedirect(this.props.accessToken);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAndRedirect(nextProps.accessToken);
    }

    checkAndRedirect = (accessToken) => {
      if (!accessToken) {
        window.location = '/';
      }
    };

    render() {
      return <Component {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    const accessToken = state.auth.accessToken;
    return {
      accessToken,
    };
  }

  return connect(mapStateToProps, null)(AuthenticatedComponent);
}
