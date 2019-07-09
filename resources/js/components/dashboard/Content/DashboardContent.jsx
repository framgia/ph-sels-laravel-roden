import React, { Component, Fragment } from 'react';
import { Row, Col, Avatar, Typography } from 'antd';
import './Content.css';

const { Text } = Typography;

class DashboardContent extends Component {
  render() {
    return (
      <Fragment>
        <div className="content-header" style={{ height: "37px" }}>
          <span className="content-title">Activities</span>
        </div>
        <div className="content-body">
          <Row className="activity">
            <Col span={6}>
              <Avatar size={75} shape="square" icon="user" />
            </Col>
            <Col span={18} className="activity-content">
              <div className="activity-body">
                <Text strong>You have learned 20 of 20 words in basic 500</Text>
                <br />
                <Text type="secondary">2 days ago</Text>
              </div>
            </Col>
          </Row>
          <Row className="activity">
            <Col span={6}>
              <Avatar size={75} shape="square" icon="user" />
            </Col>
            <Col span={18} className="activity-content">
              <div className="activity-body">
                <Text strong>You have learned 20 of 20 words in basic 500</Text>
                <br />
                <Text type="secondary">2 days ago</Text>
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default DashboardContent;