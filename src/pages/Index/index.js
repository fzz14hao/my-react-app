import React from 'react';
import { Link } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile';
import {timeFormat} from '../../utils/timeFormat'

import './index.less'

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		date:timeFormat()
	}

  }


  componentDidMount() {

  }


  render() {

    return (
        <div className='index'>
          <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
          >首页</NavBar>
          我是首页
          <br/>
        <br/>
		  
		  {
			 timeFormat(new Date,'yyyy年mm月dd日 hh时MM分 周z')
		  }
			<br/>
			<br/>
          <Link to="/login">登录</Link>
        </div>
    );
  }
}
