import React from 'react';
import { Link } from 'react-router-dom'
import './index.less'


export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }


  componentDidMount() {

  }


  render() {

    return (
        <div>
          我是首页
          <br/>
          <br/>

          <Link to="/login">登录</Link>
        </div>
    );
  }
}
