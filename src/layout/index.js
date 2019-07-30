
import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import "./index.css"
import {layoutRouteComponent} from "@router"
import SliderEach from "@utils/sliderEach"
import {withRouter} from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout;
const SliderTabBar = SliderEach(layoutRouteComponent)
 class LayoutCom extends Component {
    render() {
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
      <Header style={{ background: '#fff', padding: 0 }} />
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
