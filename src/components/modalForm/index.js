import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import SelectStatus from "../select"
import CheckboxCom from "../checkbox"
 class ModalForm extends Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        
        this.props.form.validateFields();
      }
    //点击提交时会自动进行校验以及获取到表单中的数据
      handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log( values);
          }
        });
      };
    componentWillMount(props){
      this.props.form.setFieldsValue({
        shoptype: this.props.record.booksTag,
      });
    }
    render() {
      
        let {booksAuth,booksName,booksStatus,booksTag} = this.props.record
        console.log(booksTag,"sadasdasd")
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;

       


    // Only show error after a field is touched.
    const usernameError = isFieldTouched('shopname') && getFieldError('shopname');
    const passwordError = isFieldTouched('shopsel') && getFieldError('shopsel');
        return (
            <Form layout="vertical" onSubmit={this.handleSubmit}
            labelCol={{
              sm: { span: 5 },
            }}
            wrapperCol= {{
              sm: { span: 18 },
            }}
            >
        <Form.Item 
        label="商品名字"
        validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('shopname', {
            rules: [{ required: true, message: '请填入商品名字' },
        {validator:this.handleValidator}],
          initialValue:booksName
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入商品"
            />,
          )}
        </Form.Item>
        <Form.Item 
        label="商品卖家"
        >
          {getFieldDecorator('shopsel', {
            rules: [{ required: true, message: '请填入卖家名字!' }],
            initialValue:booksAuth
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              
              placeholder="请输入卖家"
            />,
          )}
        </Form.Item>
        <Form.Item 
        label="商品状态"
        >
          {getFieldDecorator('shopstatus', {
            initialValue:booksStatus
          })(
            <SelectStatus/>
          )}
        </Form.Item>
        <Form.Item 
        label="商品类型"
        >
          {getFieldDecorator('shoptype', {
            initialValue:booksTag
          })(
            <CheckboxCom/>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            修改信息
          </Button>
        </Form.Item>
      </Form>
        )
    }
    handleValidator(rule,value,callback){
        if(value!=1){
            callback('格式错误')
        }else{
            callback()
        }
    }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(ModalForm);
export default WrappedHorizontalLoginForm