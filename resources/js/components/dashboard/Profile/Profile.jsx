import React, { Component, Fragment } from 'react';
import { Row, Avatar, Col, Typography } from 'antd';
import { connect } from 'react-redux';

const { Title } = Typography;

import './Profile.css';

class Profile extends Component {
  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  render() {
    return (
      <Fragment>
        <Row>
          <div className="profile-avatar">
            <Col span={14}>
              <Avatar size={150} shape="square" icon="user" />
            </Col>
            <Col span={10} className="profile-info">
              <Row>
                <a>{this.state ? this.state.user.name : ""}</a>
              </Row>
              <Row>
                <a>Learned 20 words</a>
              </Row>
              <Row>
                <a>Learned 5 Lessons</a>
              </Row>
            </Col>
          </div>
        </Row>
        <Row />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.authUser.user };
};

export default connect(mapStateToProps)(Profile);