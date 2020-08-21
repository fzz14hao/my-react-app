import React from 'react';
import './index.less'
import {Link} from "react-router-dom";
import {Icon, NavBar} from "antd-mobile";


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }


  componentDidMount() {

  }


  render() {

    return (
        <div>
          <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
          >登录</NavBar>
          我是登录
          <br/>
          <br/>
          <Link to="/index">首页</Link>
        </div>
    );
  }
}
