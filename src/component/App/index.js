import React, { Component } from 'react';
import {
  Layout,
} from 'antd';
import LeftMenu from './Menu';
import Crumb from './Crumb';
import FootPlus from './Footer';

const {
  Header, Content, Sider,
} = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
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
          <LeftMenu />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Crumb />
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <FootPlus />
        </Layout>
      </Layout>
    );
  }
}

export default App;