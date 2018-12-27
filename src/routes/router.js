import React, { Component } from 'react';
import {
    Route,
}from 'react-router-dom';
import PersonalData from '../views/PersonalData/PersonalData'; // 导入PersonalData组件
import Login from '../views/Login/Login'; // 导入Login组件

class Routes extends Component{
    render(){
        return (
          <div>
            <Route exact path="/" component={Login} />
            <Route path="/PersonalData" component={PersonalData} />
          </div>
        )
    }
}

export default Routes