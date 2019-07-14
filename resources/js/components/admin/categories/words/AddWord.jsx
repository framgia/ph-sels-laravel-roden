import React, { Component, Fragment } from 'react';
import {
  Form,
  Input,
  Icon,
  Col,
  Row,
  Button,
  Modal
} from 'antd';

class AddWord extends Component {

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
  }

  render() {

    return (
      <Fragment>
        <Modal
          title="Add New Word"
          width={700}
          visible={this.state.modalVisible}
          onCancel={() => this.setModalVisible(false)}
        >
          <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
            <Row>
            </Row>
          </form> 
        </Modal>
      </Fragment>
    );
  }
}


export default AddWord;