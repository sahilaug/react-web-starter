import React from 'react';
import { connect } from 'react-redux';
import browserHistory from 'utils/history';

export default function RedirectToApp(Component) {
  class RedirectToAppComponent extends React.Component {
    componentDidMount() {
      this.checkAndRedirect(this.props.accessToken);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAndRedirect(nextProps.accessToken);
    }

    checkAndRedirect = (accessToken) => {
      if (accessToken) {
        browserHistory.push('/explore-services');
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

  return connect(mapStateToProps, null)(RedirectToAppComponent);
}
