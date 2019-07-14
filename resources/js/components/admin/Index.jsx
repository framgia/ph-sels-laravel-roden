import React, { Component } from 'react';
import { Menu, Icon, Switch, Layout } from 'antd';

import Router from './Router.js';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

class Index extends Component {
  handleClick(e){
      this.props.history.push('/admin/'+e.key)
  }
  render() {
    return (
      <Layout className="dashboard">
        <Sider theme="light" width="300">
          <Menu
            style={{ width: 256 , float: 'right' }}
            defaultSelectedKeys={['users']}
            defaultOpenKeys={['sub1']}
            onClick={this.handleClick.bind(this)}
            mode="inline"
            theme="light"
          >
            <Menu.Item key="users">
              <Icon type="team" />
              Users
            </Menu.Item>
            <Menu.Item key="categories">
              <Icon type="unordered-list" />
              Categories
            </Menu.Item>
          </Menu>
        </Sider>
        <Content className="dashboardContent" theme="light">
          <Router />
        </Content>
      </Layout>
    );
  }
}

export default Index;