import loadable from '@loadable/component'
import React, {Component} from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";


// 页面异步chunk优化

const Index = loadable(() => import('../pages/Index'))
const Login = loadable(() => import('../pages/Login'))

export default class Root extends Component {
  render() {
    return (
        <HashRouter basename="/">
          <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/index"  component={Index}/>
            <Route path="/login" component={Login}/>
            {/*<Route path="/" component={Index}/>*/}
          </Switch>
        </HashRouter>
    )
  }
}
