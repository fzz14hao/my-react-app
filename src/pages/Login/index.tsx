import React from 'react';
import './index.less'
import { Link } from "react-router-dom";


export default class Login extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {}

  }


  componentDidMount() {

  }


  render() {

    return (
      <div>
        我是登录
        <br />
        <br />
        <Link to="/index">首页</Link>
      </div>
    );
  }
}
