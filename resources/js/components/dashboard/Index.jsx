import React , {Component} from 'react';
import { Layout } from 'antd';
import Profile from './Profile';

const { Sider, Content } = Layout;


class Index extends Component{

	render(){
		return (
			  	<Layout style={{marginTop : '34px'}}>
				  <Sider
				  	theme="light"
				  	width="300">
				  	<Profile />
				  </Sider>
				  <Content>
					Content
				  </Content>
				</Layout>
			);
	}
}

export default Index;