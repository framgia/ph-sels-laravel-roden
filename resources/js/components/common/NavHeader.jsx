import React,{Fragment, Component } from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom';
import { Menu, Dropdown, Icon , Avatar , Row, Col} from 'antd';

import { checkAuth } from '../../actions';
import { authLogout } from '../../actions';
import { logout } from '../../actions';
import { Link } from 'react-router-dom';
import './Navheader.css';

class NavHeader extends Component{
  
  constructor(props){
    super(props)

    this.state = {
      }
  }
  
  componentDidMount(){
      this.props.checkAuth();
  }


  componentWillReceiveProps(nextProps) {

        this.setState(nextProps);
    }

  handleLogout(){
    this.props.authLogout()
        .then(() => {
          return <Redirect to='/login' />
        })
  }

  menuList(){

    return(
          <Menu>
            <Menu.Item key="0">
              <a href="/">
                <Row>
                  <Col span={8}>
                    <Avatar 
                      style={{ backgroundColor: '#87d068', margin: '6px 8px' }} 
                      icon="user" />
                  </Col>
                  <Col span={16} style={{paddingTop: '12px'}}>
                   <span>View Profile</span>
                  </Col>
                </Row>
              </a>
            </Menu.Item>
            <Menu.Item key="1">
              <a>
               <Row>
                  <Col span={8} style={{paddingLeft:'7px'}}>
                    <Avatar 
                      icon="setting" />
                  </Col>
                  <Col span={16} style={{paddingTop: '4px' , paddingLeft:'2px'}}>
                   <span>Setting</span>
                  </Col>
                </Row>
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3" style={{textAlign:'right', marginRight:'6px'}}>
                <a onClick={this.handleLogout.bind(this)}>Logout</a>
            </Menu.Item>
          </Menu>
      )
  }

  renderLogout(){

    return (
           <Dropdown overlay={this.menuList()} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                 <Avatar style={{ backgroundColor: '#87d068', margin: '6px 8px' }} icon="user" />
                 <span>{this.state.user.name}</span>
                 <Icon type="down" />
              </a>
            </Dropdown>
      ) 
  }

  renderLogin(){
    return (
        <Fragment>
          <Link to="/login" className="item">
                      Login
          </Link>
          <Link to="/register" className="item">
                    Register
          </Link>
        </Fragment>
      )
  }

  render(){
     return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                S*ELS
            </Link>
            <div className="right menu">
              {this.props.isAuth ? this.renderLogout() : this.renderLogin()}
            </div>
        </div>
      );
    }
};

const mapStateToProps = (state) =>{
  
    return {isAuth : state.authUser.isAuthenticated,
            user   : state.authUser.user}

}

export default connect(mapStateToProps ,{checkAuth, authLogout})(NavHeader);