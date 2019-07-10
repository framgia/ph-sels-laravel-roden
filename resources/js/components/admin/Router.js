import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ProtectedRoute } from '../../utils/route';
import { PublicRoute } from '../../utils/route';
import { checkAuth } from '../../actions';
import Index from './user/Index.jsx';

class Router extends Component {
	componentDidMount() {
		this.props.checkAuth();
	}

	render() {
		return (
			<Switch>
				<ProtectedRoute
					exact
					path="/admin"
					component={Index}
					isAuthenticated={this.props.isAuth}
				/>
				<ProtectedRoute
					exact
					path="/admin/users"
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