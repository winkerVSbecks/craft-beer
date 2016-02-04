import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/footer/Footer';

function mapStateToProps(state) {
  return {
    session: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser()),
    logout: () => dispatch(logoutUser()),
  };
}

class App extends Component {

  componentDidMount() {
    componentHandler.upgradeElement(this.refs.mdlJsLayout);
  }

  componentDidUpdate() {
    componentHandler.upgradeElement(this.refs.mdlJsLayout);
  }

  render() {
    const { children } = this.props;
    return (
      <div ref="mdlJsLayout"
        className="cb mdl-layout has-drawer is-upgraded">
        <main className="mdl-layout__content"
          style={{
            paddingBottom: 50,
          }}>
          { children }
        </main>

        <div className="mdl-layout__obfuscator"></div>

        <Footer />
      </div>
    );
  }

}

App.propTypes = { children: React.PropTypes.object };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
