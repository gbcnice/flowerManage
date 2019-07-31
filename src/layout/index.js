
import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import "./index.css"
import {layoutRouteComponent} from "@router"
import {  Dropdown } from 'antd';
import SliderEach from "@utils/sliderEach"
import store from "@store"
import {LogoutAction} from "@actions/actionCreator"
import {withRouter} from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout;
const SliderTabBar = SliderEach(layoutRouteComponent)

 class LayoutCom extends Component {
   constructor(){
     super()
     this.state = store.getState()
     store.subscribe(this.handleUpdate.bind(this))
   }
   handleUpdate(){
    this.setState(store.getState())
    
  }
  componentDidUpdate(oldprops,oldstate){
    if(oldstate.user.token!=this.state.user.token){
      this.props.history.push("/home")
    }
    
  }
  //如果有异步设置state值的情况，在组件销毁时清除所有的state状态
componentWillUnmount() {
  this.setState = (state, callback) => {
      return
  }
}
   handleLogout(){
     this.props.history.push("/login")
     sessionStorage.removeItem("token")
     store.dispatch(LogoutAction())
   }
    render() {
      const menu = (
        <Menu>
          <Menu.Item>
          <div>
              个人中心
              </div>
          </Menu.Item>
          <Menu.Item>
          <div>
              修改密码
              </div>
          </Menu.Item>
          <Menu.Item>
            <div onClick={this.handleLogout.bind(this)}>
            退出登录
            </div>
          </Menu.Item>
        </Menu>
      );
        return (
            <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo">
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"></img>
      </div>
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        onClick={this.handleTo.bind(this)}
      >
         {SliderTabBar}
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200 }}>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            admin <Icon type="down" />
          </a>
        </Dropdown>
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        {this.props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
        )
    }
    handleTo({key}){
      this.props.history.push(key)
    }
}
export default withRouter(LayoutCom)
