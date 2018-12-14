import React, { Component } from 'react';
import {
    Route,
}from 'react-router-dom';
import App from '../views/App/App';  // 导入App组件
import Login from '../views/Login/Login'; // 导入Login组件

class Routes extends Component{
    render(){
        return (
          <div>
            <Route exact path="/" component={Login} />
            {/* <Route path="/" component={App} /> */}
          </div>
        )
    }
}

export default Routes