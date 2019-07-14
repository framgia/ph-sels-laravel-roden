import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {
  Form,
  Input,
  Icon,
  Col,
  Button,
  Modal
} from 'antd';
import { addCategory } from '../actions';

class AddModal extends Component {

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  constructor(props){
    super(props)

    this.state={
      modalVisible: false,
      form:{
        title : '',
        description: ''
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

    this.props.addCategory(this.state.from)
  }

  render() {

    return (
      <Fragment>
        <Modal
          title="Add New Category"
          centered
          visible={this.state.modalVisible}
          onCancel={() => this.setModalVisible(false)}
        >
         <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="field">
              <label>Title</label>
              <input 
                type="text" 
                name="full-name" 
                placeholder="Full Name" 
                value  = {this.state.form.title}
                onChange={(e) => { this.setState({ form: { ...this.state.form, title: e.target.value} })}}/>
            </div>
            <div className="field">
              <label>Description</label>
              <textarea 
                name="description"
                placeholder="description"
                value = {this.state.form.description}
                onChange={(e) => { this.setState({ form: { ...this.state.form, description: e.target.value} })}}>
              </textarea>
            </div>
            <button className="ui button" type="submit">Submit</button>
          </form> 
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state =>{
  return {'errMsg': ''}
}

export default connect(mapStateToProps , { addCategory })(AddModal);