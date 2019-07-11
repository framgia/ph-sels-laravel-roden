import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { checkAuth } from '../../actions';
import { authLogout } from '../../actions';
import { logout } from '../../actions';
import { Link } from 'react-router-dom';

class NavHeader extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  handleLogout() {
    this.props.authLogout().then(() => {
      return <Redirect to="/login" />;
    });
  }

  renderLogout() {
    return (
      <button
        onClick={this.handleLogout.bind(this)}
        className="item"
        style={{ cursor: "pointer" }}
      >
        Logout
      </button>
    );
  }

  renderLogin() {
    return (
      <Fragment>
        <Link to="/login" className="item">
          Login
        </Link>
        <Link to="/register" className="item">
          Register
        </Link>
      </Fragment>
    );
  }

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          S*ELS
        </Link>
        <div className="right menu">
          {this.props.isAuth ? this.renderLogout() : this.renderLogin()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isAuth: state.authUser.isAuthenticated };
};

export default connect(
  mapStateToProps,
  { checkAuth, authLogout }
)(NavHeader);