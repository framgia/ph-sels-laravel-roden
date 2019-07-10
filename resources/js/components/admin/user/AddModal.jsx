import React, { Component, Fragment } from 'react';
import {
  Form,
  Input,
  Icon,
  Col,
  Button,
  Modal
} from 'antd';

class AddModal extends Component {

  constructor(props){
    super(props)

    this.state={
      modalVisible: false,
      form:{
        defaultPassword : 'sels123',
        name : '',
        email: ''
      }
    }
  }

  setModalVisible(modalVisible){
    
     this.setState({
        modalVisible: modalVisible,
      });
  }

  handleSubmit(e){
    e.preventDefault()
  }

  render() {

    return (
      <Fragment>
        <Modal
          title="Add New User"
          centered
          visible={this.state.modalVisible}
          onCancel={() => this.setModalVisible(false)}
        >
         <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="field">
              <label>Name</label>
              <input 
                type="text" 
                name="full-name" 
                placeholder="Full Name" 
                value  = {this.state.form.name}
                onChange={(e) => { this.setState({ form: { ...this.state.form, name: e.target.value} })}}/>
            </div>
            <div className="field">
              <label>Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="Email Address"
                value  = {this.state.form.email}
                onChange={(e) => { this.setState({ form: { ...this.state.form, email: e.target.value} })}}/>
            </div>
            <div className="field">
              <label>Password</label>
              <input 
                type="text" 
                name="last-name" 
                placeholder="Password" 
                value = {this.state.form.defaultPassword}
                disabled/>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form> 
        </Modal>
      </Fragment>
    );
  }
}


export default AddModal;