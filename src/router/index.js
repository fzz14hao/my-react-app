import loadable from '@loadable/component'
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// 页面异步chunk优化

// const Index = loadable(() => import('../pages/Index'))
// const Login = loadable(() => import('../pages/Login'))


import Index from '../pages/Index'
import Login from '../pages/Login'


export default class Root extends Component {
  render() {
    return (
        <Router basename="/" history={history}>
          <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/index"  component={Index}/>
            <Route path="/login" component={Login}/>
            {/*<Route path="/" component={Index}/>*/}
          </Switch>
        </Router>
    )
  }
}
