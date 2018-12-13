import React, { Component } from 'react';
import { Button } from 'antd';
import logo from '../../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            太 <code>太</code> 太
          </p>
            登录
        </header>
        <Button>按钮</Button>
      </div>
    );
  }
}

export default App;
