import React, { Component } from 'react';
import {
  Breadcrumb,
} from 'antd';

class Crumb extends Component {

  render() {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>用户管理</Breadcrumb.Item>
        <Breadcrumb.Item>小明</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default Crumb;