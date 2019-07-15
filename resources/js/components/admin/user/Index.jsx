import React, { Component, Fragment } from 'react';
import AddModal from './AddModal.jsx';

class Index extends Component {

  handleclickModal(modalVisible) {
    this.refs.child.setModalVisible(modalVisible);
  }

  render() {
    return (
      <Fragment>
        <AddModal ref="child"/>
        <table className="ui compact celled definition table">
          <thead>
            <tr>
              <th />
              <th>Name</th>
              <th>Registration Date</th>
              <th>E-mail address</th>
              <th>Password Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="collapsing">
                <div className="ui fitted slider checkbox">
                  <input type="radio" /> <label />
                </div>
              </td>
              <td>John Lilki</td>
              <td>September 14, 2013</td>
              <td>jhlilk22@yahoo.com</td>
              <td>No</td>
            </tr>
          </tbody>
          <tfoot className="full-width">
            <tr>
              <th />
              <th colSpan="4">
                <div 
                  className="ui right floated small primary labeled icon button"
                  onClick={() => this.handleclickModal(true)}>
                  <i className="user icon" /> Add User
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
