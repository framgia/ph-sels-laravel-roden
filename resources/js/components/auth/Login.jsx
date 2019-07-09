import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMsg: '',
      email: '',
      password: ''
    };
  }

  handleRegister(e) {
    this.props.history.push('/register');
  }

  handleLogin(e) {
    this.props
      .loginUser(this.state)
      .then(response => {
        this.props.history.push('/dashboard');
      })
      .catch(err => {
        this.setState({ errorMsg: err });
      });
  }

  renderError() {
    if (this.state.errorMsg != '') {
      return (
        <div className="ui negative message">
          <i className="close icon" />
          <div className="header">{this.state.errorMsg}</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container ui">
        {this.renderError()}

        <div className="ui form">
          <div className="field">
            <label> Email </label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label> Password </label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <button
              className="button success ui center"
              onClick={this.handleLogin.bind(this)}
            >
              Login
            </button>
            <button
              className="button ui center"
              onClick={this.handleRegister.bind(this)}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { errorMsg: state.errorMsg };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);