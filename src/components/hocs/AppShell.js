import React from 'react';
import Header from 'components/headers/Header';
import Footer from 'components/footers/Footer';

export default function AppShellHOC(Component) {
  class AppShell extends React.PureComponent {
    componentDidMount() {}

    render() {
      return (
        <div>
          <div className="uk-flex uk-flex-column">
            <Header />
            <div className="app-shell-content" data-uk-height-viewport="expand: true">
              <Component {...this.props} />
            </div>
            <Footer />
          </div>
        </div>
      );
    }
  }
  return AppShell;
}
