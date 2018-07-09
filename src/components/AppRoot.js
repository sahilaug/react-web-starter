import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import AppShell from 'components/hocs/AppShell';
import history from 'utils/history';
import Homepage from 'components/homepage/Homepage';

class AppRoot extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      store: null,
    };
  }

  componentWillMount() {
    // eslint-disable-next-line
    const authState = JSON.parse(localStorage.getItem('authState'));
    if (!authState) {
      this.setState({ store: configureStore() });
    } else {
      this.setState({ store: configureStore({ auth: authState }) });
    }
  }

  render() {
    return (
      <div>
        {this.state.store ? (
          <Provider store={this.state.store}>
            <Router history={history}>
              <div>
                <Route exact path="/" component={AppShell(Homepage)} />
              </div>
            </Router>
          </Provider>
        ) : null}
      </div>
    );
  }
}

export default AppRoot;
