import React, { Component, Fragment } from 'react';
import AddModal from './AddModal.jsx';
import AddWord from './words/AddWord.jsx'
import { Divider } from 'antd';

class Index extends Component {

  handleclickModal(modalVisible) {
    this.category.setModalVisible(modalVisible);
  }

  handleAddWord(modalVisible){
    this.refs.word.setModalVisible(modalVisible);
  }

  render() {
    return (
      <Fragment>
        <AddModal onRef={ref => (this.category = ref)} />
        <AddWord  ref="word"/>
        <table className="ui compact celled definition table">
          <thead>
            <tr>
              <th />
              <th>Title</th>
              <th>Description</th>
              <th width="184px">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="collapsing">
                <div className="ui fitted slider checkbox">
                  <input type="radio" /> <label />
                </div>
              </td>
              <td>Title</td>
              <td>Description</td>
              <td>
                <a onClick={() => this.handleAddWord(true)}>
                  Add Word
                </a>
                <Divider type="vertical"/>
                <a>
                  Edit
                </a>
                <Divider type="vertical"/>
                <a>
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
          <tfoot className="full-width">
            <tr>
              <th />
              <th colSpan="4">
                <div 
                  className="ui right floated small primary labeled icon button"
                  onClick={() => this.handleclickModal(true)}>
                  <i className="clipboard list icon" /> Add Category
                </div>
                <div className="ui small button">Activate</div>
                <div className="ui small  disabled button">Deactivate</div>
              </th>
            </tr>
          </tfoot>
        </table>
      </Fragment>
    );
  }
}

export default Index;
