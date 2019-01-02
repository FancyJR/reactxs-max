import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
    Route,
}from 'react-router-dom';
import store from '../model';
import { 
  PersonalData, // 导入PersonalData组件
  Login // 导入login组件
} from '../views'; 

class Routes extends Component{
    render(){
        return (
          <Provider store={store}>
            <Route exact path="/" component={Login} />
            <Route path="/PersonalData" component={PersonalData} />
          </Provider>
        )
    }
}

export default Routes