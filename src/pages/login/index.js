import { Form, Icon, Input, Button, Checkbox } from 'antd';

import React, { Component } from 'react'
import "./index.css"
import { LoginAsyncAction } from '@actions/actionCreator';
import store from "@store"
 class Login extends Component {
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
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
        <Form.Item label="名字" labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item >
        <Form.Item label="密码" labelCol={{ span: 5 }} wrapperCol={{ span: 19 }}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
            </div>
        )
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            store.dispatch(LoginAsyncAction(values))
          }
        });
      };
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;