import React from 'react';
import { Link } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';

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
          <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
          >NavBar</NavBar>
          我是首页
          <br/>
          <br/>

          <Link to="/login">登录</Link>
        </div>
    );
  }
}
