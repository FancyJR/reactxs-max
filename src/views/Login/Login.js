import React, { Component } from 'react';
import { Form, Button, Input, Icon } from 'antd';
import {
  Link
}from 'react-router-dom';
import apple from '../../assets/apple.jpeg';
import './Login.less';

const FormItem = Form.Item
class LoginPlus extends Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="Apple">
        <header className="Apple-header">
          <img src={apple} className="Apple-logo" alt="logo" />
        </header>
        <div className="Login-box">
          <Form onSubmit={e => this.handleSubmit(e, this.state.isCertificates)}>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true, min: 4, max: 10, message: '用户名为4-10个字符',
                  },
                ],
              })(<Input addonBefore={<Icon type="user" />} placeholder="请输入用户名" type="text" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true, min: 6, max: 16, message: '密码为6-16个字符',
                  },
                ],
              })(<Input addonBefore={<Icon type="lock" />} placeholder="请输入密码" type="password" />)}
            </FormItem>
            <FormItem>
            <Link to="/PersonalData">
              <Button htmlType="submit" className="cert-btn">登录</Button>
            </Link>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const Login = Form.create()(LoginPlus);

export default Login;
