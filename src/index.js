import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link
}from 'react-router-dom';
import Routes from './routes/router';
import './index.css';
import * as serviceWorker from './serviceWorker';

export default class App extends Component{
  render(){
      return (
          <Router>
            <div>
              <ul className="nav">
    　　　　　　<li><Link to="/">App</Link></li>
    　　　　　　<li><Link to="/Login">Login</Link></li>
  　　 　　　　 </ul>
              <hr />
              <Routes />
            </div>
          </Router>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
