import React , {Component} from 'react';
import { Layout } from 'antd';

import Profile from './Profile/Profile';
import DashboardContent from './Content/DashboardContent';
import './Index.css';

const { Sider, Content } = Layout;


class Index extends Component{

	render(){
		return (
			  	<Layout className="dashboard">
				  <Sider
				  	theme="light"
				  	width="300">
				  	<Profile />
				  </Sider>
				  <Content
				    className="dashboardContent"
				  	theme="light">
					<DashboardContent />
				  </Content>
				</Layout>
			);
	}
}

export default Index;