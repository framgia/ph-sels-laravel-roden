import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Icon, Col, Button, Modal } from 'antd';
import { addCategory } from '../actions';

class AddModal extends Component {
  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      form: {
        title: '',
        description: ''
      },
      errMsg: ''
    };
  }

  setModalVisible(modalVisible) {
    this.setState({
      modalVisible: modalVisible
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props
      .addCategory(this.state.form)
      .then(response => {
        var form = {...this.state.form}
        form.title = ''
        form.description = ''
        this.setState({form})
        this.setModalVisible(false)
      })
      .catch(err => {
        this.setState({ errMsg: err });
      });
  }

  mapObject(object, callback) {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
  }

  parseError() {
    if (this.state.errMsg != '') {
      return (
        <div className="ui error message">
          {this.mapObject(this.state.errMsg , function(key , value){
            return (
                <ul className="list" key={key}>
                  <li>{value}</li>
                </ul>
            );
          })}
        </div>
      );
    }
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
          {this.parseError()}
          <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="field">
              <label>Title</label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={this.state.form.title}
                onChange={e => {
                  this.setState({
                    form: { ...this.state.form, title: e.target.value }
                  });
                }}
              />
            </div>
            <div className="field">
              <label>Description</label>
              <textarea
                name="description"
                placeholder="description"
                value={this.state.form.description}
                onChange={e => {
                  this.setState({
                    form: { ...this.state.form, description: e.target.value }
                  });
                }}
              />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { errMsg: "" };
};

export default connect(
  mapStateToProps,
  { addCategory }
)(AddModal);