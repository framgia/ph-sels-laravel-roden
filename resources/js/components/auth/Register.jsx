import React,{ Component } from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom';

import { registerUser  } from '../../actions';


class Register extends Component{
	
	constructor(props){
		super(props)

		this.state = {
			errorMsg: '',
			name : '',
			email: '',
			password: '',
			passwordConfirmation : ''
		}
	}

	handleSubmit(event) {

	    this.props.registerUser(this.state)
	        .then((response) => {
          		return <Redirect to='/dashboard' />
	        }).catch(err => {
				this.setState({errorMsg: err})
	        })

	  }

	render(){
		
		return(
				<div className="container ui">
					<form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
				        <div className="field">
				        	<label> Name </label>
				        	<input 
				        		type="text" 
				        		name="name" 
				        		value={this.state.name}
				        		onChange= {(e) => { this.setState({name : e.target.value})}}/>
				        </div>
				        <div className="field">
				        	<label> Email </label>
				        	<input 
				        		type="email" 
				        		name="email"
				        		value={this.state.email}
				        		onChange={(e) => { this.setState({email: e.target.value })}}/>
				        </div>
				        <div className="field">
				        	<label> Password </label>
				        	<input 
				        		type="password" 
				        		name="password"
				        		value={this.state.password}
				        		onChange={(e) => { this.setState({password: e.target.value })}}/>
				        </div>
				        <div className="field">
				        	<label> Confirm Password </label>
				        	<input 
				        		type="password" 
				        		name="re-password"
				        		onChange={(e) => { this.setState({passwordConfirmation: e.target.value })}}/>
				        </div>
				        <div className="field">
				        	<button className="button ui center">Submit</button>
				        </div>
				      </form>
				</div>
			);
	}
} 

const mapStateToProps = (state) => {
    return { 'authUser' : state.authUser}
}

export default connect(mapStateToProps , { registerUser })(Register);