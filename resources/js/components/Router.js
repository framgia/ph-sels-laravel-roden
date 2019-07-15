import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from '../utils/route';
import { PublicRoute } from '../utils/route';
import { checkAuth } from '../actions';

import Index from './dashboard/Index.jsx';
import Register from './auth/Register';
import Login from './auth/Login';

import Admin from "./admin/Index.jsx";

class Router extends Component {
	componentDidMount() {
		this.props.checkAuth();
	}

	render() {
		return (
			<Switch>
				<PublicRoute
					exact
					path="/"
					component={Login}
					isAuthenticated={this.props.isAuth}
				/>
				<PublicRoute
					exact
					path="/register"
					component={Register}
					isAuthenticated={this.props.isAuth}
				/>
				<PublicRoute
					exact
					path="/login"
					component={Login}
					isAuthenticated={this.props.isAuth}
				/>
				<ProtectedRoute
					path="/admin"
					component={Admin}
					isAuthenticated={this.props.isAuth}
				/>
				<ProtectedRoute
					exact
					path="/dashboard"
					component={Index}
					isAuthenticated={this.props.isAuth}
				/>

				<Route path="*" component={() => "404 page not found"} />
			</Switch>
		);
	}
}

const mapStateToProps = state => {
	return { isAuth: state.authUser.isAuthenticated };
};

export default connect(
	mapStateToProps,
	{ checkAuth }
)(Router);