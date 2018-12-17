import React, { Component } from 'react';
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    const { children } = this.props;

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
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
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>用户管理</Breadcrumb.Item>
              <Breadcrumb.Item>小明</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            React ©2018 Created by SHIYUN
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;