import React, { Component } from 'react';
import {
  Menu, Icon,
} from 'antd';

const SubMenu = Menu.SubMenu;

class LeftMenu extends Component {
  render() {
    return (
      <div>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>用户管理</span></span>}
          >
            <Menu.Item key="3">小明</Menu.Item>
            <Menu.Item key="4">小李</Menu.Item>
            <Menu.Item key="5">小王</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team" /><span>团队管理</span></span>}
          >
            <Menu.Item key="6">团队一组</Menu.Item>
            <Menu.Item key="8">团队二组</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default LeftMenu;